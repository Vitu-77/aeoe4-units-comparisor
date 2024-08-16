import React, { FC } from "react";
import { TbBow, TbStar, TbStarFilled } from "react-icons/tb";

type RowProps = {
  isHighest?: boolean
}

const StatsRow: FC<RowProps> = ({ isHighest }) => {
  return (
    <li className="flex items-center justify-between px-3 py-2 list-none rounded-lg bg-foreground-700">
      <div className="flex flex-col">
        <span className="text-xs font-semibold text-foreground-500">RANGED ATTACK</span>
        <div className="flex items-center gap-2 font-semibold">
          <TbBow className="text-md text-foreground-500" />
          <span className="text-sm font-normal text-foreground-500">4</span>
        </div>
      </div>
      {isHighest ? <TbStarFilled className="text-lg text-primary-500" /> : <TbStar className="text-lg text-foreground-600" />}
    </li>
  );
};

export const Stats = () => {
  return (
    <ul className="flex flex-col gap-4 list-none">
      <StatsRow isHighest />
      <StatsRow />
      <StatsRow isHighest/>
      <StatsRow isHighest/>
      <StatsRow />
      <StatsRow />
      <StatsRow isHighest/>
      <StatsRow />
      <StatsRow />
    </ul>
  );
};
