import React from "react";
import ApexChart from "react-apexcharts";

export default function Chart() {
  return (
    <div>
      <ApexChart
        type="line"
        series={[
          { name: "Price", data: [1000, 2000, 3000] },
          { name: "Price2", data: [1500, 1000, 2500] },
        ]}
        options={{
          theme: { mode: "dark" },
          chart: {
            height: 200,
            toolbar: { show: false },
            background: "transparent",
          },
          stroke: { curve: "smooth", width: 4 },
          grid: { show: false },
          yaxis: { show: false },
          xaxis: {
            labels: { show: true },
            axisTicks: { show: false },
            axisBorder: { show: false },
            categories: [1660004640, 1660091040, 1660177440],
            type: "datetime",
          },
          fill: {
            type: "gradient",
            gradient: { gradientToColors: ["blue"], stops: [0, 100] },
          },
          colors: ["red"],
        }}
      />
    </div>
  );
}
