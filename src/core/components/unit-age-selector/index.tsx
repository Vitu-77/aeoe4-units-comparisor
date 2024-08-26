import React, { FC, useMemo } from "react";
import { ParsedUnit } from "@domain/entities/parsed-unit";
import { getAgeLabel } from "@infra/helpers/get-age-label";
import { getUnitAvailableAges } from "@infra/helpers/get-unit-available-ages";
import { useComparisor } from "@core/contexts/comparisor-context";

type Props = {
  unit: ParsedUnit;
  index: number;
};

type ButtonProps = {
  age: number;
  isDisabled: boolean;
  isSelected: boolean;
  onClick: () => void | undefined;
};

const Button: FC<ButtonProps> = ({ age, isDisabled, isSelected, onClick }) => {
  const classNames = useMemo(() => {
    const baseClass =
      "flex items-center justify-center w-full cursor-pointer h-[40px]";
    const roundLeftClass = age === 1 ? "rounded-l-xl" : "";
    const roundRightClass = age === 4 ? "rounded-r-xl" : "";
    const pointerClass = isDisabled || isSelected ? "pointer-events-none" : "";
    const opacityClass = isDisabled ? "opacity-30" : "opacity-100";
    const isSelectedClass = isSelected
      ? "text-foreground-200 bg-black/30"
      : "text-foreground-600 hover:bg-black/50 bg-black/30";

    return [
      baseClass,
      roundLeftClass,
      roundRightClass,
      pointerClass,
      opacityClass,
      isSelectedClass,
    ].join(" ");
  }, [isDisabled, isSelected, age]);

  return (
    <div
      onClick={onClick}
      style={{ fontFamily: '"Averia Serif Libre", serif' }}
      className={classNames}
    >
      {getAgeLabel(age)}
    </div>
  );
};

export const UnitAgeSelector: FC<Props> = ({ unit, index }) => {
  const { changeUnitAge } = useComparisor();
  const availableAges = useMemo(() => getUnitAvailableAges(unit), [unit]);
  const ages = useMemo(() => [1, 2, 3, 4], []);

  return (
    <div className="grid w-full grid-cols-4 my-1 rounded-xl">
      {ages.map((age) => {
        const isSelected = unit.age === age;
        const isDisabled = !availableAges.includes(age);
        const onClick =
          isSelected || isDisabled
            ? undefined
            : () => changeUnitAge(index, age);

        return (
          <Button
            key={age}
            age={age}
            onClick={onClick}
            isSelected={unit.age === age}
            isDisabled={!availableAges.includes(age)}
          />
        );
      })}
    </div>
  );
};
