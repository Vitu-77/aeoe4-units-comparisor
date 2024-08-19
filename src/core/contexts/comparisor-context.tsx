import { ParsedUnit } from "@domain/entities/parsed-unit";
import { Unit } from "@domain/entities/unit";
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
  const [data, setData] = useState<Unit[]>([]);

  const addUnit = useCallback((unit: Unit) => {
    setData((prev) => [...prev, unit]);
  }, []);

  const removeUnit = useCallback((index: number) => {
    setData((prev) => prev.splice(index, 1));
  }, []);

  const units = useMemo(() => {
    return []
  }, [])

  return (
    <ComparisorContext.Provider value={{ units, addUnit, removeUnit }}>
      {children}
    </ComparisorContext.Provider>
  );
};

export function useComparisor() {
  return useContext(ComparisorContext);
}
