import React from "react";

import { UnitStats } from "@core/components/unit-stats";
import { UnitFlag } from "@core/components/unit-flag";
import { UnitHeader } from "@core/components/unit-header";
import { getCivBackground } from "@infra/helpers/get-civ-background";
import { UnitAgeSelector } from "@core/components/unit-age-selector";
import { ParsedUnit } from "@domain/entities/parsed-unit";

type Props = {
  unit: ParsedUnit;
};

export const Unit: React.FC<Props> = ({ unit }) => {
  return (
    <li className="rounded-2xl w-[350px] bg-foreground-800 relative">
      <UnitFlag civ={unit.civ} />
      <div
        className="z-10 flex flex-col w-full gap-6 p-4 rounded-2xl"
        style={getCivBackground(unit.civ)}
      >
        <UnitHeader unit={unit} />
        <UnitAgeSelector />
        <UnitStats stats={unit.stats} />
      </div>
    </li>
  );
};
