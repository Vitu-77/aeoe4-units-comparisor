import React, { FC, ReactNode, useCallback, useMemo } from "react";
import { STATS_ROWS_CONFIGS } from "@domain/constants/stats-rows-config";
import { Unit } from "@domain/entities/unit";
import { UnitWeapon } from "@domain/entities/unit-weapon";
import { StatsTypesEnum } from "@domain/enums/stats-types";
import { UnitWeaponType } from "@domain/enums/unit-weapon-type";
import { IconType } from "react-icons";
import { TbBold, TbBolt, TbStar, TbStarFilled } from "react-icons/tb";
import { UnitArmorType } from "@domain/enums/unit-armor-type";
import { UnitCosts } from "@domain/entities/unit-costs";
import { getResourceIcon } from "@infra/helpers/get-resource-icon";

type RowProps = {
  label: string;
  type: StatsTypesEnum;
  content: ReactNode;
  isHighest?: boolean;
};

type UnitStatsProps = {
  unit: Unit;
};

const StatsRow: FC<RowProps> = ({ isHighest, content, label }) => {
  return (
    <li className="flex items-center justify-between px-3 py-2 list-none rounded-lg bg-black/5">
      <div className="flex flex-col">
        <span className="text-xs font-semibold text-foreground-500">
          {label}
        </span>
        <div className="flex items-center gap-2 font-semibold">{content}</div>
      </div>
      {isHighest ? (
        <TbStarFilled className="text-lg text-primary-500" />
      ) : (
        <TbStar className="text-lg text-foreground-600" />
      )}
    </li>
  );
};

export const UnitStats: FC<UnitStatsProps> = ({ unit }) => {
  const renderIcon = useCallback((Icon: IconType) => {
    return <Icon className="text-md text-foreground-500" />;
  }, []);

  const renderSimpleContent = useCallback(
    (Icon: IconType, value?: string | number | null) => {
      return (
        <>
          {renderIcon(Icon)}
          <span
            className={`text-sm text-foreground-500 ${
              value ? "" : "opacity-1"
            }`}
          >
            {value ?? "-"}
          </span>
        </>
      );
    },
    []
  );

  const getWeaponDamage = useCallback((weapon?: UnitWeapon) => {
    if (!weapon) {
      return null;
    }

    return weapon.damage * (weapon?.burst?.count ?? 1);
  }, []);

  const renderCostsContent = useCallback((rawCosts: UnitCosts) => {
    const unitCosts = {
      food: rawCosts.food,
      wood: rawCosts.wood,
      gold: rawCosts.gold,
      oliveoil: rawCosts.oliveoil,
    };

    const costs = Object.entries(unitCosts).filter((c) => c[1] !== 0);
    const data = costs.map((c) => ({
      label: c[0],
      value: c[1],
      icon: getResourceIcon(c[0]),
    }));

    return (
      <div className="grid items-center w-full grid-cols-4 gap-3 mt-1">
        {data.map((item) => (
          <div className="flex items-center w-full gap-0.5" key={item.label}>
            <img src={item.icon} className="w-[25px]" />
            <small className="text-sm text-foreground-500">{item.value}</small>
          </div>
        ))}
      </div>
    );
  }, []);

  const rows = useMemo<RowProps[]>(() => {
    return [
      {
        type: StatsTypesEnum.ATTACK,
        label: STATS_ROWS_CONFIGS.melee_attack.label,
        content: renderSimpleContent(
          STATS_ROWS_CONFIGS.melee_attack.icon,
          unit.weapons.find((w) => w.type === UnitWeaponType.MELEE)?.damage
        ),
      },
      {
        type: StatsTypesEnum.ATTACK,
        label: STATS_ROWS_CONFIGS.ranged_attack.label,
        content: renderSimpleContent(
          STATS_ROWS_CONFIGS.ranged_attack.icon,
          unit.weapons.find((w) => w.type === UnitWeaponType.RANGED)?.damage
        ),
      },
      {
        type: StatsTypesEnum.ATTACK,
        label: STATS_ROWS_CONFIGS.torch_attack.label,
        content: renderSimpleContent(
          STATS_ROWS_CONFIGS.torch_attack.icon,
          unit.weapons.find((w) => w.type === UnitWeaponType.FIRE)?.damage
        ),
      },
      {
        type: StatsTypesEnum.ATTACK,
        label: STATS_ROWS_CONFIGS.siege_attack.label,
        content: renderSimpleContent(
          STATS_ROWS_CONFIGS.siege_attack.icon,
          unit.weapons.find((w) => w.type === UnitWeaponType.SIEGE)?.damage
        ),
      },
      // Survivability
      {
        type: StatsTypesEnum.SURVIVABILITY,
        label: STATS_ROWS_CONFIGS.melee_armor.label,
        content: renderSimpleContent(
          STATS_ROWS_CONFIGS.melee_armor.icon,
          unit.armor.find((a) => a.type === UnitArmorType.MELEE)?.value
        ),
      },
      {
        type: StatsTypesEnum.SURVIVABILITY,
        label: STATS_ROWS_CONFIGS.ranged_armor.label,
        content: renderSimpleContent(
          STATS_ROWS_CONFIGS.ranged_armor.icon,
          unit.armor.find((a) => a.type === UnitArmorType.RANGED)?.value
        ),
      },
      {
        type: StatsTypesEnum.SURVIVABILITY,
        label: STATS_ROWS_CONFIGS.fire_armor.label,
        content: renderSimpleContent(
          STATS_ROWS_CONFIGS.fire_armor.icon,
          unit.armor.find((a) => a.type === UnitArmorType.FIRE)?.value
        ),
      },

      {
        type: StatsTypesEnum.DYNAMICS,
        label: STATS_ROWS_CONFIGS.sight.label,
        content: renderSimpleContent(
          STATS_ROWS_CONFIGS.sight.icon,
          unit.sight.line
        ),
      },
      {
        type: StatsTypesEnum.DYNAMICS,
        label: STATS_ROWS_CONFIGS.move_speed.label,
        content: renderSimpleContent(
          STATS_ROWS_CONFIGS.move_speed.icon,
          unit.movement.speed
        ),
      },

      {
        type: StatsTypesEnum.PRODUCTION,
        label: STATS_ROWS_CONFIGS.costs.label,
        content: renderCostsContent(unit.costs),
      },
      {
        type: StatsTypesEnum.PRODUCTION,
        label: STATS_ROWS_CONFIGS.production_time.label,
        content: renderSimpleContent(
          STATS_ROWS_CONFIGS.production_time.icon,
          unit.costs.time
        ),
      },
      {
        type: StatsTypesEnum.PRODUCTION,
        label: STATS_ROWS_CONFIGS.pop_cap.label,
        content: renderSimpleContent(
          STATS_ROWS_CONFIGS.pop_cap.icon,
          unit.costs.popcap
        ),
      },
    ];
  }, [unit, renderSimpleContent, renderCostsContent, getWeaponDamage]);

  return (
    <ul className="flex flex-col gap-1 list-none">
      {rows.map((rowProps, index) => (
        <StatsRow key={index} {...rowProps} />
      ))}
    </ul>
  );
};
