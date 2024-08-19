import { ParsedUnitStats } from "@domain/entities/parsed-unit-stats";
import { CivilizationsEnum } from "@domain/enums/civs";

export type ParsedUnit = {
  id: string;
  baseId: string;
  producedBy: string[];
  icon: string;
  name: string;
  civ: CivilizationsEnum;
  stats: ParsedUnitStats
};
