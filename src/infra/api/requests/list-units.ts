import { Unit } from "@domain/entities/unit";
import { CivilizationsEnum } from "@domain/enums/civs";
import { CivsAbbreviationsEnum } from "@domain/enums/civs-abbreviations";
import { data } from "@infra/api/data/units.json";

export type ListUnitsParams = {
  civ?: CivilizationsEnum;
  name?: string;
  age?: number;
  unique?: boolean;
  ids?: number[];
  baseId?: string;
};

type DataEntry = (typeof data)[0];

function getFilters({
  civ,
  name,
  age,
  unique,
  ids,
  baseId,
}: ListUnitsParams = {}) {
  const filterFn = (entry: DataEntry) => {
    const civCheck = civ
      ? entry.civs.includes(CivsAbbreviationsEnum[civ])
      : true;
    const nameCheck = name
      ? entry.name.toLowerCase().includes(name.toLowerCase())
      : true;
    const ageCheck = age ? entry.age === age : true;
    const uniqueCheck = unique !== undefined ? entry.unique === unique : true;
    const idCheck = ids && ids.length ? ids.includes(entry.pbgid) : true;
    const baseIdCheck = baseId ? entry.baseId === baseId : true;

    return (
      civCheck && nameCheck && ageCheck && uniqueCheck && idCheck && baseIdCheck
    );
  };

  return filterFn;
}

export function listUnits(params?: ListUnitsParams): Unit[] {
  return data.filter(getFilters(params)) as Unit[];
}
