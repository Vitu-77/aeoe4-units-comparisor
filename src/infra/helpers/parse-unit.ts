import { ParsedUnit } from "@domain/entities/parsed-unit";
import { ParsedUnitCosts } from "@domain/entities/parsed-unit-costs";
import { Unit } from "@domain/entities/unit";
import { UnitCosts } from "@domain/entities/unit-costs";
import { UnitArmorType } from "@domain/enums/unit-armor-type";
import { UnitWeaponType } from "@domain/enums/unit-weapon-type";
import { getUnitCiv } from "@infra/helpers/get-unit-civ";

function getUnitAttack(unit: Unit, type: UnitWeaponType) {
  return unit.weapons.find((w) => w.type === type)?.damage ?? null;
}

function getUnitArmor(unit: Unit, type: UnitArmorType) {
  return unit.armor.find((a) => a.type === type)?.value ?? null;
}

function getUnitCosts(costs: UnitCosts): ParsedUnitCosts {
  return {
    food: costs.food,
    gold: costs.gold,
    oliveoil: costs.oliveoil,
    wood: costs.wood,
  };
}

export function parseUnit(unit: Unit): ParsedUnit {
  return {
    id: unit.id,
    baseId: unit.baseId,
    producedBy: unit.producedBy,
    icon: unit.icon,
    name: unit.name,
    civ: getUnitCiv(unit),
    stats: {
      hitpoints: { value: unit.hitpoints },
      description: { value: unit.displayClasses[0] ?? "" },
      age: { value: unit.age },
      meleeAttack: { value: getUnitAttack(unit, UnitWeaponType.MELEE) },
      rangedAttack: { value: getUnitAttack(unit, UnitWeaponType.RANGED) },
      fireAttack: { value: getUnitAttack(unit, UnitWeaponType.FIRE) },
      siegeAttack: { value: getUnitAttack(unit, UnitWeaponType.SIEGE) },
      meleeArmor: { value: getUnitArmor(unit, UnitArmorType.MELEE) },
      rangedArmor: { value: getUnitArmor(unit, UnitArmorType.RANGED) },
      fireArmor: { value: getUnitArmor(unit, UnitArmorType.FIRE) },
      sight: { value: unit.sight.line },
      moveSpeed: { value: unit.movement.speed },
      costs: { value: getUnitCosts(unit.costs) },
      productionTime: { value: unit.costs.time },
      popCap: { value: unit.costs.popcap },
    },
  };
}
