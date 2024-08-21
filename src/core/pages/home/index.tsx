import React from "react";
import { ComparisorGrid } from "@core/components/comparisor-grid";
import { Unit } from "@core/components/unit";
import { useComparisor } from "@core/contexts/comparisor-context";
import { listCivs, listUnits } from "@infra/api";
import { CivilizationsEnum } from "@domain/enums/civs";

export function Home() {
  const { units } = useComparisor()

  return (
    <div className="flex flex-col w-full h-full p-8">

      <div className="grid w-full grid-cols-4 gap-2">
        <button className="bg-purple-600 rounded-md" onClick={() => console.log(listUnits({ civ: CivilizationsEnum.BYZANTINES }))}>Byz</button>
        <button className="bg-red-600 rounded-md" onClick={() => console.log(listUnits({ civ: CivilizationsEnum.CHINESE }))}>Chinese</button>
        <button className="bg-yellow-600 rounded-md" onClick={() => console.log(listUnits({ civ: CivilizationsEnum.JAPANESE }))}>Japan</button>
        <button className="bg-black rounded-md" onClick={() => console.log(listCivs())}>All Civs</button>
      </div>

      <ComparisorGrid>
        {units.map((unit, index) => (
          <Unit key={index} unit={unit} />
        ))}
      </ComparisorGrid>
    </div>
  );
}
