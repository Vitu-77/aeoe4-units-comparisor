import React, { useMemo } from "react";
import { ComparisorGrid } from "@core/components/comparisor-grid";
import { Unit } from "@core/components/unit";
import { useComparisor } from "@core/contexts/comparisor-context";
import { listCivs, listUnits } from "@infra/api";
import { CivilizationsEnum } from "@domain/enums/civs";

export function Home() {
  const { units } = useComparisor();
  const civs = useMemo(() => listCivs(), []);

  return (
    <div className="flex flex-col w-full h-full p-8">
      <div className="flex w-full gap-2 mb-6">
        {civs.map((civ) => (
          <img
            className="w-[60px] cursor-pointer"
            key={civ.name}
            src={civ.flag}
            onClick={() => console.log(listUnits({ civ: civ.name }))}
          />
        ))}
      </div>

      <ComparisorGrid>
        {units.map((unit, index) => (
          <Unit key={index} unit={unit} />
        ))}
      </ComparisorGrid>
    </div>
  );
}
