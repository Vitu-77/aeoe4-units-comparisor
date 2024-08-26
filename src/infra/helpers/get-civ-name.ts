import { CivilizationsEnum } from "@domain/enums/civs";
import { CivsNamesEnum } from "@domain/enums/civs-names";

export function getCivName (civ: CivilizationsEnum) {
  return CivsNamesEnum[civ.toUpperCase()]
}