import { ParsedUnitStats } from "@domain/entities/parsed-unit-stats";
import { CivilizationsEnum } from "@domain/enums/civs";

export type ParsedUnit = {
  id: number;
  index: number;
  baseId: string;
  producedBy: string[];
  icon: string;
  name: string;
  civ: CivilizationsEnum;
  age: number;
  description: string;
  stats: ParsedUnitStats;
  color: string;
};
