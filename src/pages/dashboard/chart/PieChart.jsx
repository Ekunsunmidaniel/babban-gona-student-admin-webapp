import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { Typography, Box } from "@mui/material";

export default function BasicPie() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          height: "356px",
          color: "#808191",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            height: "356px",
            color: "#808191",
            fontFamily: "Roboto",
            fontSize: "30px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "30px",
            padding:"10px"
          }}
        >
          Course Popularity
        </Typography>
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 35, label: "Software Engineering" },
                { id: 1, value: 20, label: "Computer Science" },
                { id: 2, value: 30, label: "Agricultural Science" },
                // { id: 3, value: 5, label: "People and Culture" },
                { id: 4, value: 25, label: "Product Design" },
                // { id: 5, value: 10, label: "Materials Engineering" },
                { id: 6, value: 5, label: "Others" },
              ],
            },
          ]}
          width={450}
          height={330}
          label={{
            field: "label",
            content: (props) => props.active && `${props.data.label}`,
          }}
        />
      </Box>
    </>
  );
}
