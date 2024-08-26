import React, { useMemo, useState } from "react";
import Chart from "react-apexcharts";

import { ParsedUnit } from "@domain/entities/parsed-unit";
import { getUnitAvailability } from "@infra/helpers/get-unit-availability";
import { getUnitDefense } from "@infra/helpers/get-unit-defense";
import { getUnitSurvivability } from "@infra/helpers/get-unit-survivability";
import { RadarComparisorLegend } from "@core/components/radar-comparisor-legend";

type Props = {
  units: ParsedUnit[];
};

export const RadarComparisor: React.FC<Props> = ({ units }) => {
  const [visibleUnitsIds, setVisibleUnitsIds] = useState(() =>
    units.map((u) => u.id)
  );

  const visibleUnits = useMemo(
    () => units.filter((u) => visibleUnitsIds.includes(u.id)),
    [units, visibleUnitsIds]
  );

  const [hoveringIndex, setHoveringIndex] = useState<number | null>(null);

  const series = useMemo(() => {
    return visibleUnits.map((unit) => ({
      name: unit.name,
      id: unit.id,
      fill: true,
      data: [
        unit.stats.rangedAttack.value * 1.5,
        getUnitDefense(unit),
        getUnitSurvivability(unit),
        getUnitAvailability(unit),
        40, // randomNumber(12, 62),
        65, // randomNumber(12, 62),
      ],
    }));
  }, [units, visibleUnitsIds]);

  const colors = useMemo(
    () =>
      visibleUnits
        .map((u) => u.color)
        .map((c, index) => {
          if (hoveringIndex === null || hoveringIndex === index) {
            return c;
          }

          return `${c}10`;
        }),
    [visibleUnits, hoveringIndex]
  );

  return (
    <section className="flex justify-center py-8 mt-8 rounded-lg bg-black/20">
      <RadarComparisorLegend
        units={units}
        visibleUnitsIds={visibleUnitsIds}
        setVisibleUnitsIds={setVisibleUnitsIds}
        onItemHover={(index) => setHoveringIndex(index)}
      />
      <Chart
        type="radar"
        series={series}
        width={1000}
        options={{
          series,
          chart: {
            type: "radar",
          },
          fill: {
            colors,
          },
          stroke: {
            colors,
            width: 2
          },
          markers: {
            strokeColors: colors,
            colors,
          },
          legend: {
            show: false,
          },
          plotOptions: {
            radar: {
              size: 250,
              polygons: {
                connectorColors: "#2f2f33",
                strokeWidth: "2",
                strokeColors: "#2f2f3320",
                fill: {
                  colors: ["#3f3f4690", "#52525b30"],
                },
              },
            },
          },
          yaxis: {
            stepSize: 20,
            labels: {
              style: {
                fontWeight: 800,
                colors: "#8f8f8f",
                fontFamily: "Poppins",
              },
            },
          },
          xaxis: {
            categories: [
              "Attack".toUpperCase(),
              "Defense".toUpperCase(),
              "Survivability".toUpperCase(),
              "Availability".toUpperCase(),
              "Worth".toUpperCase(),
              "Mobility".toUpperCase(),
            ],
          },
        }}
      />
    </section>
  );
};
