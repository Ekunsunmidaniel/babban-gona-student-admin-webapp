import React, { useState, useEffect } from "react";
import { Typography, Box, Button } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AppRegistrationRoundedIcon from "@mui/icons-material/AppRegistrationRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { Logo } from "../../assets/Svg.jsx";

function SideBar() {
  const [buttonStates, setButtonStates] = useState({
    Dashboard: false,
    Register: false,
    Profile: false,
  });

  useEffect(() => {
    // Perform any side effects or logic after the state has changed
    console.log("Button states updated:", buttonStates);
  }, [buttonStates]);

  const handleClick = (button) => {
    setButtonStates((prevState) => {
      const newState = {};
      // Set the clicked button to true
      newState[button] = true;

      // Set all other buttons to false
      Object.keys(prevState).forEach((key) => {
        if (key !== button) {
          newState[key] = false;
        }
      });

      return newState;
    });
  };

  return (
    <Box
      sx={{
        width: "241px",
        height: "789px",
        background: "#bfdbf7",
        position: "fixed",
        left: 0,
        top: 0,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            my: "25px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Logo />
          <Typography color="#022b3a" textAlign="center">
            Babbangona Inter.school
          </Typography>
        </Box>
        <Typography
          sx={{
            color: "#1f7a8c",
            width: "241px",
            height: "0.5px",
            borderBottom: "1px solid",
          }}
        ></Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          my: "25px",
          mx: "10px",
          gap: "40px",
        }}
      >
        <Box>
          <Button
            href="#text-buttons"
            sx={{
              display: "flex",
              gap: "10px",
              color: "#022b3a",
              padding: "11px 20px 12px 16px",
              alignItems: "center",
              size: "medium",
              borderRight: buttonStates.Dashboard
                ? "4px solid #1f7a8c"
                : "none",
            }}
            onClick={() => handleClick("Dashboard")}
          >
            <HomeRoundedIcon />
            <Typography
              sx={{
                textTransform: "capitalize",
                width: "192px",
              }}
            >
              Dashboard
            </Typography>
          </Button>
        </Box>
        <Box>
          <Button
            href="#text-buttons"
            sx={{
              display: "flex",
              gap: "10px",
              color: "#022b3a",
              padding: "11px 20px 12px 16px",
              alignItems: "center",
              borderRight: buttonStates.Register
                ? "4px solid  #1f7a8c"
                : "none",
            }}
            onClick={() => handleClick("Register")}
          >
            <AppRegistrationRoundedIcon />
            <Typography
              sx={{
                textTransform: "capitalize",
                width: "192px",
              }}
            >
              Register Student
            </Typography>
          </Button>
        </Box>
        <Box>
          <Button
            href="#text-buttons"
            sx={{
              display: "flex",
              gap: "10px",
              color: "#022b3a",
              padding: "11px 20px 12px 16px",
              alignItems: "center",
              borderRight: buttonStates.Profile ? "4px solid  #1f7a8c" : "none",
            }}
            onClick={() => handleClick("Profile")}
          >
            <AccountCircleRoundedIcon />
            <Typography
              sx={{
                textTransform: "capitalize",
                width: "192px",
              }}
            >
              Student profile
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default SideBar;
