import { Unit } from "@domain/entities/unit";
import { CivilizationsEnum } from "@domain/enums/civs";
import { CivsAbbreviationsEnum } from "@domain/enums/civs-abbreviations";
import { data } from "@infra/api/data/units.json";

export type ListUnitsParams = {
  civ?: CivilizationsEnum;
  name?: string;
  age?: number;
  unique?: boolean
};

type DataEntry = (typeof data)[0];

function getFilters({ civ, name, age, unique }: ListUnitsParams) {
  const filterFn = (entry: DataEntry) => {
    const civCheck = civ
      ? entry.civs.includes(CivsAbbreviationsEnum[civ])
      : true;
    const nameCheck = name
      ? entry.name.toLowerCase().includes(name.toLowerCase())
      : true;
    const ageCheck = age ? entry.age === age : true;
    const uniqueCheck = unique !== undefined ? entry.unique === unique : true;

    return civCheck && nameCheck && ageCheck;
  };

  return filterFn;
}

export function listUnits(params?: ListUnitsParams): Unit[] {
  return data.filter(getFilters(params)) as Unit[];
}
