import { ParsedUnit } from "@domain/entities/parsed-unit";
import { ParsedUnitCosts } from "@domain/entities/parsed-unit-costs";
import { Unit } from "@domain/entities/unit";
import { UnitCosts } from "@domain/entities/unit-costs";
import { StatsTypesEnum } from "@domain/enums/stats-types";
import { UnitArmorType } from "@domain/enums/unit-armor-type";
import { UnitWeaponType } from "@domain/enums/unit-weapon-type";
import { getUnitCiv } from "@infra/helpers/get-unit-civ";

function getUnitAttack(unit: Unit, type: UnitWeaponType) {
  const weapon = unit.weapons.find((w) => w.type === type);
  return weapon ? weapon.damage * (weapon.burst?.count ?? 1) : null;
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
    description: unit.displayClasses[0],
    age: unit.age,
    stats: {
      hitpoints: {
        value: unit.hitpoints,
        type: StatsTypesEnum.SURVIVABILITY,
      },
      meleeAttack: {
        value: getUnitAttack(unit, UnitWeaponType.MELEE),
        type: StatsTypesEnum.ATTACK,
      },
      rangedAttack: {
        value: getUnitAttack(unit, UnitWeaponType.RANGED),
        type: StatsTypesEnum.ATTACK,
      },
      torchAttack: {
        value: getUnitAttack(unit, UnitWeaponType.FIRE),
        type: StatsTypesEnum.ATTACK,
      },
      siegeAttack: {
        value: getUnitAttack(unit, UnitWeaponType.SIEGE),
        type: StatsTypesEnum.ATTACK,
      },
      meleeArmor: {
        value: getUnitArmor(unit, UnitArmorType.MELEE),
        type: StatsTypesEnum.SURVIVABILITY,
      },
      rangedArmor: {
        value: getUnitArmor(unit, UnitArmorType.RANGED),
        type: StatsTypesEnum.SURVIVABILITY,
      },
      fireArmor: {
        value: getUnitArmor(unit, UnitArmorType.FIRE),
        type: StatsTypesEnum.SURVIVABILITY,
      },
      sight: { value: unit.sight.line, type: StatsTypesEnum.DYNAMICS },
      moveSpeed: { value: unit.movement.speed, type: StatsTypesEnum.DYNAMICS },
      costs: {
        value: getUnitCosts(unit.costs),
        type: StatsTypesEnum.PRODUCTION,
      },
      productionTime: {
        value: unit.costs.time,
        type: StatsTypesEnum.PRODUCTION,
      },
      popCap: { value: unit.costs.popcap, type: StatsTypesEnum.PRODUCTION },
    },
  };
}
