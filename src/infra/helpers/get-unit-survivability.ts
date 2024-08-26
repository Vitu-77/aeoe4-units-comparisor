import { ParsedUnit } from "@domain/entities/parsed-unit"
import { getUnitDefense } from "@infra/helpers/get-unit-defense"

function getUnitHpValue (unit: ParsedUnit) {
  return Math.round(Math.sqrt(unit.stats.hitpoints.value) * 1.5)
}

function getUnitMoveSpeedValue (unit: ParsedUnit) {
  return Math.round(Math.sqrt(unit.stats.moveSpeed.value * 100) * 1.1)
}

export function getUnitSurvivability (unit: ParsedUnit) {
  const defenseValue = Math.round((getUnitDefense(unit) / 2) * 1.3)
  const hpValue = getUnitHpValue(unit)
  const moveSpeedValue = getUnitMoveSpeedValue(unit)
  const survivability = defenseValue + hpValue + moveSpeedValue
  return survivability <= 100 ? survivability : 100
}