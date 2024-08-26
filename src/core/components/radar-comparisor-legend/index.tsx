import { ParsedUnit } from "@domain/entities/parsed-unit";
import { getAgeLabel } from "@infra/helpers/get-age-label";
import { getCivName } from "@infra/helpers/get-civ-name";
import React, { FC, useCallback } from "react";

type Props = {
  visibleUnitsIds: number[];
  setVisibleUnitsIds: React.Dispatch<React.SetStateAction<number[]>>;
  onItemHover: (v: number | null) => void;
  units: ParsedUnit[];
};

export const RadarComparisorLegend: FC<Props> = ({
  units,
  setVisibleUnitsIds,
  visibleUnitsIds,
  onItemHover,
}) => {
  const isItemEnabled = useCallback(
    (u: ParsedUnit) => {
      return visibleUnitsIds.includes(u.id);
    },
    [visibleUnitsIds]
  );

  const onItemClick = useCallback(
    (u: ParsedUnit, isEnabled: boolean) => {
      onItemHover(null);
      setVisibleUnitsIds((prev) => {
        return isEnabled ? prev.filter((id) => id !== u.id) : [...prev, u.id];
      });
    },
    [setVisibleUnitsIds, onItemHover]
  );

  return (
    <ul
      className="flex flex-col gap-2 mt-8 h-fit w-fit"
      onMouseLeave={() => onItemHover(null)}
    >
      {units.map((u, index) => {
        const isEnabled = isItemEnabled(u);

        return (
          <li
            className="flex items-center w-full gap-2 px-4 py-2 rounded-md cursor-pointer hover:bg-black/20"
            key={u.id}
            onMouseEnter={() => onItemHover(isEnabled ? index : null)}
            onClick={() => onItemClick(u, isEnabled)}
            style={{ opacity: isEnabled ? 1 : 0.2 }}
          >
            <div
              className="rounded-md w-[6px] h-[32px]"
              style={{ backgroundColor: u.color }}
            ></div>

            <div className="flex flex-col">
              <small className="text-sm font-semibold uppercase text-foreground-300">
                {u.name} <span className="font-semibold text-foreground-500">
                  ({getAgeLabel(u.age)})
                </span>
              </small>
              <small className="text-xs text-foreground-400">
                {getCivName(u.civ)}
              </small>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
