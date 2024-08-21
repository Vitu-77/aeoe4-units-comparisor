import { Unit } from "@domain/entities/unit";
import { CivilizationsEnum } from "@domain/enums/civs";
import { CivsAbbreviationsEnum } from "@domain/enums/civs-abbreviations";
import { data } from "@infra/api/data/units.json";

type Params = {
  civ?: CivilizationsEnum;
  name?: string;
  age?: number;
};

type DataEntry = (typeof data)[0];

function getFilters({ civ, name, age }: Params) {
  const filterFn = (entry: DataEntry) => {
    const civCheck = civ
      ? entry.civs.includes(CivsAbbreviationsEnum[civ])
      : true;
    const nameCheck = name
      ? entry.name.toLowerCase().includes(name.toLowerCase())
      : true;
    const ageCheck = age ? entry.age === age : true;

    return civCheck && nameCheck && ageCheck;
  };

  return filterFn;
}

export function listUnits(params?: Params): Unit[] {
  return data.filter(getFilters(params)) as Unit[];
}
