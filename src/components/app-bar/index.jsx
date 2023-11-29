import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

function TopBar() {
  return (
    <>
      <Box sx={{ flexGrow: 1, width: 1199, marginLeft: "241px" }}>
        <AppBar
          position="fixed"
          sx={{
            width: 1199,
            marginLeft: "241px",
            left: 0,
            backgroundColor: " #1f7a8c",
          }}
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Hello, Admin
            </Typography>
            <Button color="inherit">Logout</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default TopBar;
