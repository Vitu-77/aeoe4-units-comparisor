import React from "react";
import { ComparisorGrid } from "@core/components/comparisor-grid";
import { Unit } from "@core/components/unit";
import { useComparisor } from "@core/contexts/comparisor-context";

export function Home() {
  const { units } = useComparisor()

  return (
    <div className="flex flex-col w-full h-full p-8">
      <ComparisorGrid>
        {units.map((unit, index) => (
          <Unit key={index} unit={unit} />
        ))}
      </ComparisorGrid>
    </div>
  );
}
