import { CivilizationsEnum } from "@domain/enums/civs";
import * as flags from "@assets/images/flags";

type Params = {
  name?: string;
};

type Response = {
  name: CivilizationsEnum;
  flag: string;
}[];

export function listCivs(params?: Params): Response {
  return Object.values(CivilizationsEnum)
    .filter((civ) =>
      params?.name ? civ.includes(params.name.toLowerCase()) : true
    )
    .map((civName) => ({ name: civName, flag: flags[civName] }));
}
