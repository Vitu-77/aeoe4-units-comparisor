import React, { FC } from "react";

type Props = {};

export const UnitHeader: FC<Props> = () => {
  return (
    <header className="flex items-center w-full gap-4">
      <div className="rounded-xl w-[50px] h-[50px] flex items-center justify-center bg-primary-300"></div>

      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-primary-300">Cataphract</h3>
        <p className="text-xs font-normal text-white">Heavy Melee Cavalry</p>
      </div>
    </header>
  );
};
