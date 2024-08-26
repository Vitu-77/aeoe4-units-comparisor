import { ParsedUnit } from "@domain/entities/parsed-unit";
import { UnitArmorStat } from "@domain/entities/parsed-unit-stats";

function getAllUnitArmors(unit: ParsedUnit) {
  return [unit.stats.rangedArmor, unit.stats.meleeArmor, unit.stats.fireArmor];
}

function getArmorMultiplier(armor: number) {
  if (armor <= 1) {
    return 1;
  }

  if (armor <= 3) {
    return 1.2;
  }

  if (armor <= 5) {
    return 1.3;
  }

  if (armor <= 10) {
    return 1.4;
  }

  return 0.5;
}

function getArmorValue(armor: UnitArmorStat) {
  return armor.value * getArmorMultiplier(armor.value) * 10;
}

function getArmorSum(unit: ParsedUnit) {
  return getAllUnitArmors(unit).reduce(
    (acc, armor) => acc + getArmorValue(armor),
    0
  );
}

function getArmorVersatilityIncrement(unit: ParsedUnit) {
  return getAllUnitArmors(unit).filter((a) => a.value <= 10).length * 10;
}

export function getUnitDefense(unit: ParsedUnit) {
  const armorSum = getArmorSum(unit);
  const sumSqrt = Math.sqrt(armorSum);
  const versatilityIncrement = getArmorVersatilityIncrement(unit);
  const defense = Math.round((sumSqrt / 2) * 10) + versatilityIncrement;
  return defense <= 100 ? defense : 100;
}
