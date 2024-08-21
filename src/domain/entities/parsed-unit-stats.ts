import { ParsedUnitCosts } from "@domain/entities/parsed-unit-costs";
import { StatStatus } from "@domain/enums/stat-status";
import { StatsTypesEnum } from "@domain/enums/stats-types";

export type ParsedUnitStatValue = undefined | null | string | number;

export type ParsedUnitStats = {
  hitpoints: {
    value: number;
    type: StatsTypesEnum;
    status?: StatStatus;
  };
  meleeAttack?: {
    value: number | null;
    type: StatsTypesEnum;
    status?: StatStatus;
  };
  rangedAttack?: {
    value: number | null;
    type: StatsTypesEnum;
    status?: StatStatus;
  };
  torchAttack?: {
    value: number | null;
    type: StatsTypesEnum;
    status?: StatStatus;
  };
  siegeAttack?: {
    value: number | null;
    type: StatsTypesEnum;
    status?: StatStatus;
  };
  meleeArmor?: {
    value: number | null;
    type: StatsTypesEnum;
    status?: StatStatus;
  };
  rangedArmor?: {
    value: number | null;
    type: StatsTypesEnum;
    status?: StatStatus;
  };
  fireArmor?: {
    value: number | null;
    type: StatsTypesEnum;
    status?: StatStatus;
  };
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
