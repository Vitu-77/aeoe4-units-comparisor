import React, { FC } from "react";

import { UnitIcon } from "@core/components/unit-icon";
import { ParsedUnit } from "@domain/entities/parsed-unit";

type Props = {
  unit: ParsedUnit;
};

export const UnitHeader: FC<Props> = ({ unit }) => {
  return (
    <header className="flex items-center w-full gap-4">
      <UnitIcon icon={unit.icon} />

      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-primary-300">{unit.name}</h3>
        <p className="text-xs font-normal text-white">{unit.description}</p>
      </div>
    </header>
  );
};
