import { CivilizationsEnum } from "@domain/enums/civs";
import { CivsBackgroundColors } from "@domain/enums/civs-background-colors";

export function getCivBackground(civ: CivilizationsEnum) {
  const civBgColor = CivsBackgroundColors[civ.toUpperCase()];
  return {
    backdropFilter: "blur(0px)",
    background:
      `linear-gradient(180deg, rgba(44, 44, 44, 0.95) 0%, ${civBgColor} 30%, rgba(35,35,35,1) 100%)`,
  };
}
