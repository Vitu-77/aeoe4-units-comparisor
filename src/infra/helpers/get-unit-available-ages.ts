import { ParsedUnit } from "@domain/entities/parsed-unit";
import { listUnits } from "@infra/api";

export function getUnitAvailableAges(unit: ParsedUnit) {
  const units = listUnits({ baseId: unit.baseId, civ: unit.civ });
  return units.map((u) => u.age);
}
