import { UnitWeaponType } from "@domain/enums/unit-weapon-type";

export type WeaponModifier = {
  property: string;
  target: {
    class: string[][];
  };
  effect: string;
  value: number;
  type: string;
};

export type UnitWeapon = {
  name: string;
  type: UnitWeaponType;
  damage: number;
  speed: number;
  range: {
    min: number;
    max: number;
  };
  modifiers: WeaponModifier[];
  durations: {
    aim: number;
    windup: number;
    attack: number;
    winddown: number;
    reload: number;
    setup: number;
    teardown: number;
    cooldown: number;
  };
  burst?: {
    count: number;
  };
  attribName: string;
  pbgid: number;
};
