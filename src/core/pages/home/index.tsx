import React, { useState } from "react";
import { ComparisorGrid } from "@core/components/comparisor-grid";
import { Unit } from "@core/components/unit";
import { useComparisor } from "@core/contexts/comparisor-context";
import { UnitsModal } from "@core/components/units-modal";

export function Home() {
  const comparisor = useComparisor();
  const [showModal, setShowModal] = useState(true);

  return (
    <div className="flex flex-col w-full h-full p-8">
      <ComparisorGrid>
        {comparisor.units.map((unit, index) => (
          <Unit key={index} unit={unit} />
        ))}

        <div
          onClick={() => setShowModal(true)}
          className="flex items-center justify-center w-[300px] text-white text-2xl h-full border-4 border-white cursor-pointer"
        >
          +
        </div>
      </ComparisorGrid>

      <UnitsModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
