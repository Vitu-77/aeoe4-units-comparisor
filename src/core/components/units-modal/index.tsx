import { ModalSelectedUnits } from "@core/components/modal-selected-units";
import { UnitIcon } from "@core/components/unit-icon";
import { UnitsModalFilters } from "@core/components/units-modal-filters";
import { useComparisor } from "@core/contexts/comparisor-context";
import { Unit } from "@domain/entities/unit";
import { listUnits, ListUnitsParams } from "@infra/api/requests/list-units";
import { getCivFlag } from "@infra/helpers/get-civ-flag";
import { getUnitCiv } from "@infra/helpers/get-unit-civ";
import React, { FC, useCallback, useMemo, useState } from "react";
import { TbX } from "react-icons/tb";
import Modal from "react-responsive-modal";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

type UnitItemProps = {
  unit: Unit;
  onClick: (u: Unit) => void;
};

const UnitItem: FC<UnitItemProps> = ({ unit, onClick }) => (
  <li
    className="flex items-center w-full gap-4 p-2 rounded-lg cursor-pointer hover:bg-black/30"
    onClick={() => onClick(unit)}
  >
    <UnitIcon icon={unit.icon} size="sm" />

    <div className="flex flex-col w-full">
      <h3 className="font-semibold text-md text-primary-300">{unit.name}</h3>
      <div className="flex items-center justify-between w-full gap-1">
        <p className="text-xs font-normal text-white">
          {unit.displayClasses[0]}
        </p>
        <div className="flex items-center justify-end gap-2">
          {/* <small className="text-xs font-semibold capitalize te xt-foreground-400">{getUnitCiv(unit)}</small> */}
          <img className="w-[20px]" src={getCivFlag(getUnitCiv(unit))} />
        </div>
      </div>
    </div>
  </li>
);

export const UnitsModal: FC<Props> = ({ isOpen, onClose }) => {
  const { addUnits } = useComparisor()
  const [filters, setFilters] = useState<ListUnitsParams>({});
  const [selectedUnits, setSelectedUnits] = useState<Unit[]>([]);
  const units = useMemo(() => listUnits(filters), [filters]);

  const handleSelectUnit = useCallback((u: Unit) => {
    setSelectedUnits((prev) => [...prev, u]);
  }, []);

  const handleRemoveUnit = useCallback((index: number) => {
    setSelectedUnits((prev) => prev.filter((_, i) => i!==index));
  }, []);

  const handleAddUnits = useCallback(() => {
    addUnits(selectedUnits)
    setSelectedUnits([])
    onClose()
  }, [addUnits, selectedUnits, onClose])

  return (
    <Modal
      center
      open={isOpen}
      onClose={onClose}
      classNames={{ modal: "rounded-xl !p-0 !bg-transparent !max-w-[1000px]" }}
      styles={{ modal: { width: "90vw", backdropFilter: "blur(25px)" } }}
      closeIcon={
        <TbX className="text-foreground-500 hover:text-foreground-200" />
      }
    >
      <header className="flex flex-col w-full px-4 pt-4 mb-6 rounded-t-xl border-b-1 border-foreground-100">
        <h4 className="text-lg font-semibold text-foreground-300">
          Add units to comparison
        </h4>
        <small className="text-sm text-foreground-500 mt-[-5px]">
          Select one or more units to compare
        </small>
      </header>

      <UnitsModalFilters filters={filters} onChange={setFilters} />

      <ModalSelectedUnits
        selectedUnits={selectedUnits}
        onRemoveUnit={handleRemoveUnit}
      />

      <div className="px-4 mt-1">
        <ul className="flex flex-col w-full overflow-y-auto rounded-xl custom-scrollbar overflow-x-hidden mb-4 h-[60vh]">
          {units.map((unit, index) => (
            <UnitItem unit={unit} key={index} onClick={handleSelectUnit} />
          ))}
        </ul>
      </div>

      <footer className="flex justify-end w-full p-4">
        <button
          disabled={!selectedUnits.length}
          onClick={handleAddUnits}
          className="px-4 py-3 text-sm font-semibold border-none rounded-lg disabled:opacity-55 disabled:pointer-events-none bg-black/40 hover:bg-black/70 text-foreground-300"
        >
          Compare selected units
          {selectedUnits.length > 0 && (
            <span className="ml-2">({selectedUnits.length})</span>
          )}
        </button>
      </footer>
    </Modal>
  );
};
