import { ComparisorGrid } from "@core/components/comparisor-grid";
import { Unit } from "@core/components/unit";
import { ARCHER, LANDSKENETCH, ROYAL_KNIGHT, WAR_ELEPHANT } from "@core/pages/home/data";
import { CivilizationsEnum } from "@domain/enums/civs";
import React, { useState } from "react";

export function Home() {
  const [units, setUnits] = useState([
    { civ: CivilizationsEnum.DELHI, unit: WAR_ELEPHANT },
    { civ: CivilizationsEnum.JEANNE_DARC, unit: ROYAL_KNIGHT },
    { civ: CivilizationsEnum.BYZANTINES, unit: ARCHER },
    { civ: CivilizationsEnum.HRE, unit: LANDSKENETCH },
    { civ: CivilizationsEnum.FRENCH, unit: ROYAL_KNIGHT },
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
