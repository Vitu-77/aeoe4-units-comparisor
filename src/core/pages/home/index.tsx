import React, { useState } from "react";
import { ComparisorGrid } from "@core/components/comparisor-grid";
import { Unit } from "@core/components/unit";
import { useComparisor } from "@core/contexts/comparisor-context";
import { UnitsModal } from "@core/components/units-modal";
import { AddUnitButton } from "@core/components/add-unit-button";
import { RadarComparisor } from "@core/components/radar-comparisor";

export function Home() {
  const comparisor = useComparisor();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col w-full h-full p-8">
      <ComparisorGrid>
        {comparisor.units.map((unit, index) => (
          <Unit key={index} unit={unit} index={index} />
        ))}
        <AddUnitButton onClick={() => setShowModal(true)} />
      </ComparisorGrid>

      <RadarComparisor units={comparisor.units} />

      <UnitsModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
