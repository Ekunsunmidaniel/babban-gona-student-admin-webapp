import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import {  Box } from "@mui/material";

const chartSetting = {
  xAxis: [
    {
      label: "Faculty Sizes",
    },
  ],
  width: 500,
  height: 356,
};
const dataset = [
  {
    london: 30,
    paris: 30,
    newYork: 30,
    seoul: 30,
    faculty: "Eng.",
  },
  {
    london: 20,
    paris: 20,
    newYork: 20,
    seoul: 20,
    faculty: "Art",
  },
  {
    london: 25,
    paris: 25,
    newYork: 25,
    seoul: 25,
    faculty: "Sci.",
  },
];

const valueFormatter = (value) => `${value}mm`;

export default function HorizontalBars() {
     const customColors = ["#f44336"];
  return (
    <Box sx={{ height: "356px", background:"#fff"}}>
      <BarChart
        dataset={dataset}
        yAxis={[{ scaleType: "band", dataKey: "faculty" }]}
        series={[
          {
            dataKey: "seoul",
            label: "Faculties",
            valueFormatter,
            colors: customColors,
          },
        ]}
        layout="horizontal"
        {...chartSetting}
      />
    </Box>
  );
}
