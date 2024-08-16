import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const ComparisorGrid: React.FC<Props> = ({ children }) => {
  return (
    <section className="w-fullh-fit">
      <ul className="grid justify-start grid-flow-col gap-4 overflow-auto border-4 border-red-500">{children}</ul>
    </section>
  );
};
