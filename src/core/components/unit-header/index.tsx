import { ParsedUnit } from "@domain/entities/parsed-unit";
import React, { FC } from "react";

type Props = {
  unit: ParsedUnit;
};

export const UnitHeader: FC<Props> = ({ unit }) => {
  return (
    <header className="flex items-center w-full gap-4">
      <div className="rounded-xl w-[50px] h-[50px] flex items-center justify-center bg-[#66583e]">
        <img src={unit.icon} className="w-[40px] h-[40px]" />
      </div>

      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-primary-300">{unit.name}</h3>
        <p className="text-xs font-normal text-white">{unit.description}</p>
      </div>
    </header>
  );
};
