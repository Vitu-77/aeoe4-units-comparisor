import { ParsedUnitCosts } from "@domain/entities/parsed-unit-costs";
import { StatStatus } from "@domain/enums/stat-status";
import { StatsTypesEnum } from "@domain/enums/stats-types";

export type ParsedUnitStatValue = undefined | null | string | number;

export type UnitAttackStat = {
  value: number | null;
  type: StatsTypesEnum;
  status?: StatStatus;
}

export type UnitArmorStat = {
  value: number | null;
  type: StatsTypesEnum;
  status?: StatStatus;
}

export type ParsedUnitStats = {
  hitpoints: {
    value: number;
    type: StatsTypesEnum;
    status?: StatStatus;
  };
  meleeAttack?: UnitAttackStat;
  rangedAttack?: UnitAttackStat;
  torchAttack?: UnitAttackStat;
  siegeAttack?: UnitAttackStat;
  meleeArmor?: UnitArmorStat;
  rangedArmor?: UnitArmorStat;
  fireArmor?: UnitArmorStat;
  sight: {
    value: number;
    type: StatsTypesEnum;
    status?: StatStatus;
  };
  moveSpeed: {
    value: number;
    type: StatsTypesEnum;
    status?: StatStatus;
  };
  costs: {
    value: ParsedUnitCosts;
    type: StatsTypesEnum;
    status?: StatStatus;
  };
  productionTime: {
    value: number;
    type: StatsTypesEnum;
    status?: StatStatus;
  };
  popCap: {
    value: number;
    type: StatsTypesEnum;
    status?: StatStatus;
  };
};
