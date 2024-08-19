import { UnitArmor } from "@domain/entities/unit-armor";
import { UnitCosts } from "@domain/entities/unit-costs";
import { UnitWeapon } from "@domain/entities/unit-weapon";

export type Unit = {
  id: string;
  baseId: string;
  type: string;
  name: string;
  pbgid: number;
  attribName: string;
  age: number;
  civs: string[];
  description: string;
  classes: string[];
  displayClasses: string[];
  unique: true;
  costs: UnitCosts;
  producedBy: string[];
  icon: string;
  hitpoints: number;
  weapons: UnitWeapon[];
  armor: UnitArmor[];
  sight: {
    line: number;
    height: number;
  };
  movement: {
    speed: number;
  };
};
