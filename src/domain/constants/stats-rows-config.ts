import {
  TbBolt,
  TbBow,
  TbEye,
  TbFlame,
  TbHeart,
  TbMeteor,
  TbSwords,
  TbTargetArrow,
  TbMatchstick,
  TbShieldCheckered,
  TbClock,
  TbHome,
} from "react-icons/tb";

export const STATS_ROWS_CONFIGS = {
  meleeAttack: {
    label: "MELEE ATTACK",
    icon: TbSwords,
    comparisonFns: {
      best: Math.max,
      worst: Math.min
    },
  },
  rangedAttack: {
    label: "RANGED ATTACK",
    icon: TbBow,
    comparisonFns: {
      best: Math.max,
      worst: Math.min
    },
  },
  torchAttack: {
    label: "TORCH ATTACK",
    icon: TbMatchstick,
    comparisonFns: {
      best: Math.max,
      worst: Math.min
    },
  },
  siegeAttack: {
    label: "SIEGE ATTACK",
    icon: TbMeteor,
    comparisonFns: {
      best: Math.max,
      worst: Math.min
    },
  },
  hitpoints: {
    label: "HITPOINTS",
    icon: TbHeart,
    comparisonFns: {
      best: Math.max,
      worst: Math.min
    },
  },
  meleeArmor: {
    label: "MELEE ARMOR",
    icon: TbShieldCheckered,
    comparisonFns: {
      best: Math.max,
      worst: Math.min
    },
  },
  rangedArmor: {
    label: "RANGED ARMOR",
    icon: TbTargetArrow,
    comparisonFns: {
      best: Math.max,
      worst: Math.min
    },
  },
  fireArmor: {
    label: "FIRE ARMOR",
    icon: TbFlame,
    comparisonFns: {
      best: Math.max,
      worst: Math.min
    },
  },
  costs: {
    label: "COSTS",
    icon: null,
    comparisonFns: {
      best: Math.min,
      worst: Math.max
    },
  },
  productionTime: {
    label: "PRODUCTION TIME",
    icon: TbClock,
    comparisonFns: {
      best: Math.min,
      worst: Math.max
    },
  },
  popCap: {
    label: "OCCUPATION",
    icon: TbHome,
    comparisonFns: {
      best: Math.min,
      worst: Math.max
    },
  },
  sight: {
    label: "SIGHT",
    icon: TbEye,
    comparisonFns: {
      best: Math.max,
      worst: Math.min
    },
  },
  moveSpeed: {
    label: "MOVE SPEED",
    icon: TbBolt,
    comparisonFns: {
      best: Math.max,
      worst: Math.min
    },
  },
};
