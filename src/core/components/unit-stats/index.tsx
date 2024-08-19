import React, { FC, ReactNode, useCallback, useMemo } from "react";
import { STATS_ROWS_CONFIGS } from "@domain/constants/stats-rows-config";
import { Unit } from "@domain/entities/unit";
import { UnitWeapon } from "@domain/entities/unit-weapon";
import { StatsTypesEnum } from "@domain/enums/stats-types";
import { UnitWeaponType } from "@domain/enums/unit-weapon-type";
import { IconType } from "react-icons";
import { TbStar, TbStarFilled } from "react-icons/tb";
import { UnitArmorType } from "@domain/enums/unit-armor-type";

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
          <span className={`text-sm text-foreground-500 ${value ? '' : 'opacity-1'}`}>{value ?? "-"}</span>
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

  const rows = useMemo<RowProps[]>(() => {
    return [
      {
        type: StatsTypesEnum.ATTACK,
        label: STATS_ROWS_CONFIGS.melee_attack.label,
        content: renderSimpleContent(
          STATS_ROWS_CONFIGS.melee_attack.icon,
          getWeaponDamage(
            unit.weapons.find((w) => w.type === UnitWeaponType.MELEE)
          )
        ),
      },
      {
        type: StatsTypesEnum.ATTACK,
        label: STATS_ROWS_CONFIGS.ranged_attack.label,
        content: renderSimpleContent(
          STATS_ROWS_CONFIGS.ranged_attack.icon,
          getWeaponDamage(
            unit.weapons.find((w) => w.type === UnitWeaponType.RANGED)
          )
        ),
      },
      {
        type: StatsTypesEnum.ATTACK,
        label: STATS_ROWS_CONFIGS.torch_attack.label,
        content: renderSimpleContent(
          STATS_ROWS_CONFIGS.torch_attack.icon,
          getWeaponDamage(
            unit.weapons.find((w) => w.type === UnitWeaponType.FIRE)
          )
        ),
      },
      {
        type: StatsTypesEnum.ATTACK,
        label: STATS_ROWS_CONFIGS.siege_attack.label,
        content: renderSimpleContent(
          STATS_ROWS_CONFIGS.siege_attack.icon,
          getWeaponDamage(
            unit.weapons.find((w) => w.type === UnitWeaponType.SIEGE)
          )
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
    ];
  }, [unit]);

  return (
    <ul className="flex flex-col gap-1 list-none">
      {rows.map((rowProps, index) => (
        <StatsRow key={index} {...rowProps} />
      ))}
    </ul>
  );
};
