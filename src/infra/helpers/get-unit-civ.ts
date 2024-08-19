import { Unit } from "@domain/entities/unit";
import { CivilizationsEnum } from "@domain/enums/civs";

const CIVS_MAP = {
  ab: CivilizationsEnum.ABBASID,
  ay: CivilizationsEnum.AYYUBIDS,
  by: CivilizationsEnum.BYZANTINES,
  ch: CivilizationsEnum.CHINESE,
  de: CivilizationsEnum.DELHI,
  en: CivilizationsEnum.ENGLISH,
  fr: CivilizationsEnum.FRENCH,
  hr: CivilizationsEnum.HRE,
  ja: CivilizationsEnum.JAPANESE,
  je: CivilizationsEnum.JEANNE_DARC,
  ma: CivilizationsEnum.MALIANS,
  mo: CivilizationsEnum.MONGOLS,
  od: CivilizationsEnum.OOTD,
  ot: CivilizationsEnum.ottomans,
  ru: CivilizationsEnum.RUS,
  zx: CivilizationsEnum.ZHU_XI,
}

export function getUnitCiv(unit: Unit): CivilizationsEnum {
  const civAbbreviation = unit.civs[0]
  return CIVS_MAP[civAbbreviation]
}