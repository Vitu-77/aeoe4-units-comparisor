import { ParsedUnitCosts } from "@domain/entities/parsed-unit-costs";
import { StatStatus } from "@domain/enums/stat-status";

export type ParsedUnitStats = {
  hitpoints: {
    value: number
    status?: StatStatus
  };
  description: {
    value: string
    status?: StatStatus
  };
  age: {
    value: number
    status?: StatStatus
  };
  meleeAttack?: {
    value: number | null
    status?: StatStatus
  };
  rangedAttack?: {
    value: number | null
    status?: StatStatus
  };
  fireAttack?: {
    value: number | null
    status?: StatStatus
  };
  siegeAttack?: {
    value: number | null
    status?: StatStatus
  };
  meleeArmor?: {
    value: number | null
    status?: StatStatus
  };
  rangedArmor?: {
    value: number | null
    status?: StatStatus
  };
  fireArmor?: {
    value: number | null
    status?: StatStatus
  };
  sight: {
    value: number
    status?: StatStatus
  };
  moveSpeed: {
    value: number
    status?: StatStatus
  };
  costs: {
    value: ParsedUnitCosts
    status?: StatStatus
  };
  productionTime: {
    value: number
    status?: StatStatus
  };
  popCap: {
    value: number
    status?: StatStatus
  };
}