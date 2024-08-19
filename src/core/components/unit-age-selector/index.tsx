import React, { FC } from "react";

type Props = {};

type ButtonProps = {
  age: number;
};

const Button: FC<ButtonProps> = ({ age }) => {
  const ageLabels = ["I", "II", "III", "IV"];

  return (
    <div
      style={{ fontFamily: '"Averia Serif Libre", serif' }}
      className={`flex items-center justify-center w-full cursor-pointer hover:bg-black/20 h-[40px] bg-black/10 text-foreground-400 ${
        age === 1 ? "rounded-l-xl" : ""
      } ${age === 4 ? "rounded-r-xl" : ""}`}
    >
      {ageLabels[age - 1]}
    </div>
  );
};

export const UnitAgeSelector: FC<Props> = () => {
  return (
    <div className="grid w-full grid-cols-4 my-1 rounded-xl">
      <Button age={1} />
      <Button age={2} />
      <Button age={3} />
      <Button age={4} />
    </div>
  );
};
