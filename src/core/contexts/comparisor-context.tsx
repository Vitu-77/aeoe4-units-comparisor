import {
  ARCHER,
  LANDSKENETCH,
  ROYAL_KNIGHT,
  WAR_ELEPHANT,
} from "@core/contexts/data";
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
  useMemo,
  useState,
} from "react";

type IComparisorContext = {
  units: ParsedUnit[];
  addUnit: (unit: Unit) => void;
  removeUnit: (index: number) => void;
};

type ProviderProps = {
  children: ReactNode;
};

export const ComparisorContext = createContext<IComparisorContext>({
  units: [],
} as IComparisorContext);

export const ComparisorProvider: React.FC<ProviderProps> = ({ children }) => {
  const [data, setData] = useState<Unit[]>([
    ARCHER,
    LANDSKENETCH,
    WAR_ELEPHANT,
    ROYAL_KNIGHT,
  ]);

  const addUnit = useCallback((unit: Unit) => {
    setData((prev) => [...prev, unit]);
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

  const units = useMemo(() => {
    const parsedData = data.map((unit) => parseUnit(unit));

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
    <ComparisorContext.Provider value={{ units, addUnit, removeUnit }}>
      {children}
    </ComparisorContext.Provider>
  );
};

export function useComparisor() {
  return useContext(ComparisorContext);
}
