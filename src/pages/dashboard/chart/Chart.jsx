import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";


export default function BasicBars() {
  return (
    <BarChart
      sx={{ boxShadow: 2 }}
      xAxis={[{ scaleType: "band", data: ["Enginerring", "Science", "Art"] }]}
      series={[
        { data: [30, 40, 55], label: "Female" },
        { data: [90, 60, 25], label: "Male" },
      ]}
      width={500}
      height={300}
    />
  );
}
