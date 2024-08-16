import { ComparisorGrid } from "@core/components/comparisor-grid";
import { Unit } from "@core/components/unit";
import React, { useState } from "react";

export function Home() {
  const [units, setUnits] = useState([
    { name: "Cannon" },
    { name: "Archer" },
    { name: "Cataphract" },
  ]);

  return (
    <div className="flex flex-col w-full h-full p-8">
      <ComparisorGrid>
        {units.map((unit, index) => (
          <Unit key={index} name={unit.name} />
        ))}
      </ComparisorGrid>
    </div>
  );
}
