
import { StatsTypesEnum } from "@domain/enums/stats-types";
import {
  TbBolt,
  TbBow,
  TbEye,
  TbFlame,
  TbFlameOff,
  TbHeart,
  TbMeteor,
  TbShield,
  TbSwords,
  TbTargetArrow,
  TbMatchstick,
  TbShieldCheckered,
  TbClock,
  TbHome
} from "react-icons/tb";

export const STATS_ROWS_CONFIGS = {
  melee_attack: {
    type: StatsTypesEnum.ATTACK,
    label: "MELEE ATTACK",
    icon: TbSwords,
  },
  ranged_attack: {
    type: StatsTypesEnum.ATTACK,
    label: "RANGED ATTACK",
    icon: TbBow,
  },
  torch_attack: {
    type: StatsTypesEnum.ATTACK,
    label: "TORCH ATTACK",
    icon: TbMatchstick,
  },
  siege_attack: {
    type: StatsTypesEnum.ATTACK,
    label: "SIEGE ATTACK",
    icon: TbMeteor,
  },

  hitpoints: {
    type: StatsTypesEnum.SURVIVABILITY,
    label: "HITPOINTS",
    icon: TbHeart,
  },
  melee_armor: {
    type: StatsTypesEnum.SURVIVABILITY,
    label: "MELEE ARMOR",
    icon: TbShieldCheckered,
  },
  ranged_armor: {
    type: StatsTypesEnum.SURVIVABILITY,
    label: "RANGED ARMOR",
    icon: TbTargetArrow,
  },
  fire_armor: {
    type: StatsTypesEnum.SURVIVABILITY,
    label: "FIRE ARMOR",
    icon: TbFlame,
  },
  costs: {
    type: StatsTypesEnum.PRODUCTION,
    label: 'COSTS',
    icon: null,
  },
  production_time: {
    type: StatsTypesEnum.PRODUCTION,
    label: 'PRODUCTION TIME',
    icon: TbClock,
  },
  pop_cap: {
    type: StatsTypesEnum.PRODUCTION,
    label: 'OCCUPATION',
    icon: TbHome,
  },

  sight: {
    type: StatsTypesEnum.DYNAMICS,
    label: "SIGHT",
    icon: TbEye,
  },
  move_speed: {
    type: StatsTypesEnum.DYNAMICS,
    label: "MOVE SPEED",
    icon: TbBolt,
  },
};
