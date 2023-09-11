import React, { useEffect, useState } from "react";
import ApexChart from "react-apexcharts";

import "./chart.css";

export default function Chart() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/Bus", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div className="chart_box">
      <ApexChart
        type="line"
        series={[
          { name: "Congestion", data: [10, 41, 35, 51, 49, 62, 69, 91, 148] },
        ]}
        options={{
          series: [
            {
              name: "Desktops",
              data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
            },
          ],
          chart: {
            height: 350,
            type: "line",
            zoom: {
              enabled: false,
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "straight",
          },
          grid: {
            row: {
              colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
              opacity: 0.5,
            },
          },
          xaxis: {
            categories: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
            ],
          },
        }}
      />
    </div>
  );
}
