import { ParsedUnit } from "@domain/entities/parsed-unit";
import { ParsedUnitCosts } from "@domain/entities/parsed-unit-costs";

function getTotalCosts(rawCosts: ParsedUnitCosts) {
  const costs = {
    food: rawCosts.food * 1.2,
    wood: rawCosts.wood * 1.5,
    stone: rawCosts.stone * 1.8,
    gold: rawCosts.gold * 1.8,
    oliveoil: rawCosts.oliveoil * 2,
  };

  let sum = 0;
  let nonEmptyValues = 0;

  Object.values(costs).forEach((value) => {
    if (value !== 0) {
      sum = sum + value;
      nonEmptyValues = nonEmptyValues + 1;
    }
  });

  return sum / nonEmptyValues;
}

function getPopCapMultiplier(popCap: number) {
  return Math.sqrt(popCap) * 0.1 + popCap * 0.1;
}

function getProductionTimeValue(time: number) {
  return Math.round(time + Math.sqrt(time) * 1.5);
}

function getProductionIncrement(unit: ParsedUnit) {
  return Math.round(Math.sqrt(unit.producedBy.length * unit.age));
}

export function getUnitAvailability(unit: ParsedUnit) {
  const costs = getTotalCosts(unit.stats.costs.value);
  const prodTime = getProductionTimeValue(unit.stats.productionTime.value);
  const popMult = getPopCapMultiplier(unit.stats.popCap.value);
  const prodIncrement = getProductionIncrement(unit);
  const availability = Math.round(100 - (costs + prodTime) * popMult + prodIncrement);
  return availability >= 1 ? availability : 1
}
