import React, { FC, useMemo } from "react";
import { CivilizationsEnum } from "src/domain/enums/civs";
import { getCivFlag } from "@infra/helpers/get-civ-flag";

type Props = {
  civ: CivilizationsEnum;
};

export const UnitFlag: FC<Props> = ({ civ }) => {
  const civFlag = useMemo(() => getCivFlag(civ), [civ]);

  return (
    <img
      src={civFlag}
      className="absolute top-0 left-0 z-0 w-full aspect-video rounded-t-2xl"
    />
  );
};
