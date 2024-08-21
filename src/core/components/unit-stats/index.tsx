import React, { FC, ReactNode, useCallback, useMemo } from "react";
import { STATS_ROWS_CONFIGS } from "@domain/constants/stats-rows-config";
import { StatsTypesEnum } from "@domain/enums/stats-types";
import { IconType } from "react-icons";
import { TbStar, TbStarFilled } from "react-icons/tb";
import { UnitCosts } from "@domain/entities/unit-costs";
import { getResourceIcon } from "@infra/helpers/get-resource-icon";
import { ParsedUnitStats } from "@domain/entities/parsed-unit-stats";
import { StatStatus } from "@domain/enums/stat-status";

type RowProps = {
  label: string;
  content: ReactNode;
  status: StatStatus;
};

type UnitStatsProps = {
  stats: ParsedUnitStats;
};

const StatsRow: FC<RowProps> = ({ status, content, label }) => {
  return (
    <li className="flex items-center justify-between px-3 py-2 list-none rounded-lg bg-black/5">
      <div className="flex flex-col">
        <span className="text-xs font-semibold text-foreground-500">
          {label}
        </span>
        <div className="flex items-center gap-2 font-semibold">{content}</div>
      </div>
      {status === StatStatus.BEST ? (
        <TbStarFilled className="text-lg text-primary-500" />
      ) : (
        <TbStar className="text-lg text-foreground-600" />
      )}
    </li>
  );
};

export const UnitStats: FC<UnitStatsProps> = ({ stats }) => {
  const { costs, ...simpleStats } = stats;
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

  return (
    <ul className="flex flex-col gap-1 list-none">
      {Object.entries(STATS_ROWS_CONFIGS).map(([key, { icon, label }]) => {
        const stat = stats[key] as {
          value: any;
          status: StatStatus;
          type: StatsTypesEnum;
        };

        return (
          <StatsRow
            key={key}
            label={label}
            status={stat.status}
            content={
              key === "costs"
                ? renderCostsContent(stat.value)
                : renderSimpleContent(icon, stat.value)
            }
          />
        );
      })}
    </ul>
  );
};
