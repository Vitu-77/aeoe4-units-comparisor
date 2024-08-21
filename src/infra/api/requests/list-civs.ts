import { CivilizationsEnum } from "@domain/enums/civs";

type Params = {
  name?: string;
};

export function listCivs(params?: Params): CivilizationsEnum[] {
  return Object.values(CivilizationsEnum).filter((civ) =>
    params?.name ? civ.includes(params.name.toLowerCase()) : true
  );
}
