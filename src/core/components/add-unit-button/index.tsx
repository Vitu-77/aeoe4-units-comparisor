import React from "react";

import { TbPlus } from "react-icons/tb";

type Props = {
  onClick: () => void;
};

export const AddUnitButton: React.FC<Props> = ({ onClick }) => {
  return (
    <li
      className="rounded-2xl w-[350px] min-h-[800px] bg-black/20 hover:bg-black/30  flex flex-col items-center justify-center relative cursor-pointer"
      onClick={onClick}
    >
      <TbPlus className="text-foreground-400 text-[60px]" />
      <span className="text-xs font-semibold uppercase text-foreground-400">
        ADD UNITS
      </span>
    </li>
  );
};
