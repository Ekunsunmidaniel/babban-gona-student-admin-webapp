import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const DateInput = ({...props}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker />
    </LocalizationProvider>
  );
};
export default DateInput;
