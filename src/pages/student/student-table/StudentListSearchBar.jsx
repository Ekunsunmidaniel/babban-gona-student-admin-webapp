import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

function StudentListSearchBar({onSearchStudent}) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchValue);
    // Add your search logic here
    onSearchStudent(searchValue)
  };
  return (
    <>
      <TextField
        label="Search by Username/ID/course"
        variant="outlined"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon
                onClick={handleSearch}
                style={{ cursor: "pointer", height:"20px" }}
              />
            </InputAdornment>
          ),
        }}
        style={{
          width: "200px",
          marginBottom: "20px",
          height: "20px",
          bottom:"25px"
          // Adjust the height here
        }}
      />
    </>
  );
}

export default StudentListSearchBar;
