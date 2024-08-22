import { Unit } from "@domain/entities/unit";
import { getCivFlag } from "@infra/helpers/get-civ-flag";
import { getUnitCiv } from "@infra/helpers/get-unit-civ";
import React from "react";
import { TbX } from "react-icons/tb";

type Props = {
  selectedUnits: Unit[];
  onRemoveUnit: (index: number) => void;
};

type SelectedUnitProps = {
  unit: Unit;
  onRemove: (index: number) => void;
  index: number;
};

const SelectedUnit: React.FC<SelectedUnitProps> = ({
  unit,
  onRemove,
  index,
}) => {
  return (
    <div className="flex items-center gap-4 px-2 py-1 rounded-lg bg-black/30">
      <div className="flex items-center gap-2">
      <img className="w-[20px]" src={getCivFlag(getUnitCiv(unit))} />
        <span className="text-sm text-foreground-300">{unit.name}</span>
      </div>
      <TbX
        className="text-xs text-foreground-500 hover:text-foreground-50"
        onClick={() => onRemove(index)}
      />
    </div>
  );
};

export const ModalSelectedUnits: React.FC<Props> = ({
  selectedUnits,
  onRemoveUnit,
}) => {
  return (
    <div className="w-full grid grid-col-[auto_200px] gap-6 px-4 mt-4">
      <div className="flex flex-wrap w-full gap-2">
        {selectedUnits.map((u, index) => (
          <SelectedUnit
            unit={u}
            key={index}
            index={index}
            onRemove={onRemoveUnit}
          />
        ))}
      </div>
    </div>
  );
};
