import React from "react";

import { Stats } from "@core/components/stats";
import { UnitFlag } from "@core/components/unit-flag";
import { UnitHeader } from "@core/components/unit-header";
import { getCivBackground } from "@infra/helpers/get-civ-background";
import { CivilizationsEnum } from "@domain/enums/civs";

type Props = {
  name: string;
  civ: CivilizationsEnum;
};

export const Unit: React.FC<Props> = ({ name, civ }) => {
  return (
    <li
      className="rounded-2xl w-[300px] bg-foreground-800 relative"
      onClick={() => console.log(getCivBackground(civ))}
    >
      <UnitFlag civ={civ} />
      <div
        className="z-10 flex flex-col w-full gap-6 p-4 rounded-2xl"
        style={getCivBackground(civ)}
      >
        <UnitHeader />
        <Stats />
      </div>
    </li>
  );
};
