import React, { useMemo } from "react";

type Props = {
  icon: string;
  size?: "md" | "sm" | "lg";
};

export const UnitIcon: React.FC<Props> = ({ icon, size }) => {
  const sizeClass = useMemo(() => {
    switch (size) {
      case 'sm':
        return 'w-[35px] h-[35px] rounded-lg'
      case 'md':
        return 'w-[50px] h-[50px] rounded-xl'
      case 'lg':
        return 'w-[65px] h-[65px] rounded-xl'
      default:
        return 'w-[50px] h-[50px] rounded-xl'
    }
  }, [size])
  
  const imgSizeClass = useMemo(() => {
    switch (size) {
      case 'sm':
        return 'w-[28px] h-[28px]'
      case 'md':
        return 'w-[40px] h-[40px]'
      case 'lg':
        return 'w-[55px] h-[55px]'
      default:
        return 'w-[40px] h-[40px]'
    }
  }, [size])

  return (
    <div className={`${sizeClass}  flex items-center justify-center bg-[#66583e]`}>
      <img src={icon} className={imgSizeClass} />
    </div>
  );
};
