import { CivilizationsEnum } from "@domain/enums/civs";
import * as f from '@assets/images/flags'

export function getCivFlag (civ: CivilizationsEnum) {
  const flags = f as Record<CivilizationsEnum, string>
  return flags[civ]
}