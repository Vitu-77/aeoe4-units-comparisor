import React from "react";

import { UnitStats } from "@core/components/unit-stats";
import { UnitFlag } from "@core/components/unit-flag";
import { UnitHeader } from "@core/components/unit-header";
import { getCivBackground } from "@infra/helpers/get-civ-background";
import { CivilizationsEnum } from "@domain/enums/civs";
import { UnitAgeSelector } from "@core/components/unit-age-selector";
import { Unit as UnitType } from "@domain/entities/unit";

type Props = {
  unit: UnitType;
  civ: CivilizationsEnum;
};

export const Unit: React.FC<Props> = ({ unit, civ }) => {
  return (
    <li
      className="rounded-2xl w-[350px] bg-foreground-800 relative"
      onClick={() => console.log(unit)}
    >
      <UnitFlag civ={civ} />
      <div
        className="z-10 flex flex-col w-full gap-6 p-4 rounded-2xl"
        style={getCivBackground(civ)}
      >
        <UnitHeader unit={unit} />
        <UnitAgeSelector />
        <UnitStats unit={unit} />
      </div>
    </li>
  );
};
