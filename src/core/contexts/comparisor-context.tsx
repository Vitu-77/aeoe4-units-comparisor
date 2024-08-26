import { useSearchParams } from "react-router-dom";
import { STATS_ROWS_CONFIGS } from "@domain/constants/stats-rows-config";
import { ParsedUnit } from "@domain/entities/parsed-unit";
import { ParsedUnitCosts } from "@domain/entities/parsed-unit-costs";
import { ParsedUnitStatValue } from "@domain/entities/parsed-unit-stats";
import { Unit } from "@domain/entities/unit";
import { StatStatus } from "@domain/enums/stat-status";
import { parseUnit } from "@infra/helpers/parse-unit";
import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { listUnits } from "@infra/api";
import { getUnitCiv } from "@infra/helpers/get-unit-civ";

type IComparisorContext = {
  units: ParsedUnit[];
  addUnits: (unit: Unit[]) => void;
  removeUnit: (index: number) => void;
  changeUnitAge: (unitIndex: number, age: number) => void;
};

type ProviderProps = {
  children: ReactNode;
};

export const ComparisorContext = createContext<IComparisorContext>({
  units: [],
} as IComparisorContext);

export const ComparisorProvider: React.FC<ProviderProps> = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState<Unit[]>(() => {
    const idsParams = searchParams.getAll("units");
    const ids = idsParams ? idsParams.map((id) => Number(id)) : null;
    return ids.length ? listUnits({ ids }) : [];
  });

  useEffect(() => {
    const unitsIds = data.map((item) => String(item.pbgid));

    if (unitsIds.length) {
      setSearchParams({ units: unitsIds });
    }
  }, [data]);

  const addUnits = useCallback((unit: Unit[]) => {
    setData((prev) => [...prev, ...unit]);
  }, []);

  const removeUnit = useCallback((index: number) => {
    setData((prev) => prev.splice(index, 1));
  }, []);

  const collectStatsRowValues = useCallback(
    (data: ParsedUnit[], key: string) => {
      return data.map((item) => {
        if (key === "costs") {
          const v = item.stats[key].value as unknown as ParsedUnitCosts;
          return Object.values(v).reduce((acc, curr) => acc + curr, 0);
        }

        return item.stats[key].value ?? (0 as ParsedUnitStatValue);
      });
    },
    []
  );

  const changeUnitAge = useCallback(
    (unitIndex: number, age: number) => {
      const unit = data[unitIndex];
      const [newUnit] = listUnits({
        age,
        baseId: unit.baseId,
        civ: getUnitCiv(unit),
      });

      const updatedData = [...data];
      updatedData.splice(unitIndex, 1, newUnit);
      setData(updatedData);
    },
    [data]
  );

  const units = useMemo(() => {
    const parsedData = data.map((unit, index) => parseUnit(unit, index));

    Object.entries(STATS_ROWS_CONFIGS).forEach(([key, { comparisonFns }]) => {
      const values = collectStatsRowValues(parsedData, key);
      const bestValue = comparisonFns.best(...values);
      const worstValue = comparisonFns.worst(...values);

      values.forEach((v, index) => {
        if (!v) {
          parsedData[index].stats[key].status = StatStatus.DRAW;
          return;
        }

        if (v === bestValue) {
          parsedData[index].stats[key].status = StatStatus.BEST;
        } else if (v === worstValue) {
          parsedData[index].stats[key].status = StatStatus.WORST;
        } else {
          parsedData[index].stats[key].status = StatStatus.DRAW;
        }
      });
    });

    return parsedData;
  }, [data, collectStatsRowValues]);

  return (
    <ComparisorContext.Provider
      value={{ units, addUnits, removeUnit, changeUnitAge }}
    >
      {children}
    </ComparisorContext.Provider>
  );
};

export function useComparisor() {
  return useContext(ComparisorContext);
}
