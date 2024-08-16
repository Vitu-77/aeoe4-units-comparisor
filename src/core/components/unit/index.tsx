import React, { ReactNode } from "react";

type Props = {
  name: string;
};

export const Unit: React.FC<Props> = ({ name }) => {
  return (
    <li className="p-4 rounded-2xl w-[300px] h-[520px] bg-foreground-50">
      <strong>{name}</strong>
    </li>
  );
};
