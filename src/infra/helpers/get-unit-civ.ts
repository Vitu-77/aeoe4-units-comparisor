import { Unit } from "@domain/entities/unit";
import { CivilizationsEnum } from "@domain/enums/civs";

const ABBREVIATIONS_MAP = {
  ab: CivilizationsEnum.ABBASID,
  ay: CivilizationsEnum.AYYUBIDS,
  by: CivilizationsEnum.BYZANTINES,
  ch: CivilizationsEnum.CHINESE,
  de: CivilizationsEnum.DELHI,
  en: CivilizationsEnum.ENGLISH,
  fr: CivilizationsEnum.FRENCH,
  hr: CivilizationsEnum.HRE,
  ja: CivilizationsEnum.JAPANESE,
  je: CivilizationsEnum.JEANNEDARC,
  ma: CivilizationsEnum.MALIANS,
  mo: CivilizationsEnum.MONGOLS,
  od: CivilizationsEnum.ORDEROFTHEDRAGON,
  ot: CivilizationsEnum.ottomans,
  ru: CivilizationsEnum.RUS,
  zx: CivilizationsEnum.ZHU_XI,
}

export function getUnitCiv(unit: Unit): CivilizationsEnum {
  const civAbbreviation = unit.civs[0]
  return ABBREVIATIONS_MAP[civAbbreviation]
}