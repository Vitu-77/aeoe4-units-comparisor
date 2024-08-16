import { ComparisorGrid } from "@core/components/comparisor-grid";
import { Unit } from "@core/components/unit";
import { CivilizationsEnum } from "@domain/enums/civs";
import React, { useState } from "react";

export function Home() {
  const [units, setUnits] = useState([
    { civ: CivilizationsEnum.BYZANTINES, name: "Limitanei" },
    { civ: CivilizationsEnum.HRE, name: "Prelade" },
    { civ: CivilizationsEnum.BYZANTINES, name: "Cataphract" },
  ]);

  return (
    <div className="flex flex-col w-full h-full p-8">
      <ComparisorGrid>
        {units.map((unit, index) => (
          <Unit key={index} {...unit} />
        ))}
      </ComparisorGrid>
    </div>
  );
}
