import React from "react";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import "./PinAuth.css";
import { Typography, Link, Box, TextField, Button} from "@mui/material";

// import { LockOutlinedIcon } from "@mui/material";
import LockRoundedIcon from "@mui/icons-material/LockRounded";

function PinAuth() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "1440px",
          height: 789,
          m: "auto",
          padding: "98px 392px 99px 392px",
          background: "var(--Grey-5, #FCFAFA)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            // m: "auto",
            // padding: "98px 392px, 99px, 392px",
            gap: "10px",
            background: "var(--Grey-5, #FCFAFA)",
          }}
        >
          <Box>
            <Typography
              variant="subtitle1"
              sx={{ width: "665px", fontSize: "36px", textAlign: "center" }}
            >
              Enter Your Pin
            </Typography>
          </Box>
          <Box>
            <TextField
              id="standard-password-input"
              label="Pin"
              type="password"
              autoComplete="current-password"
              variant="standard"
              size="medium"
              // fullWidth="100%"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "25px",
              marginleft: "auto",
              margintop: "15px",
              fontsize: "20px",
            }}
          >
            <Box>
              <Button
                variant="text"
                color="primary"
                underline="none"
                onClick={() => {
                  console.info("I'm a button.");
                }}
                sx={{
                  color: "#1f7a8c",
                  cursor: "pointer",
                }}
                size="Large"
              >
                Cancel
              </Button>
            </Box>
            <Box>
              <Button
                variant="text"
                color="primary"
                underline="none"
                onClick={() => {
                  console.info("I'm a button.");
                }}
                sx={{
                  color: "#1f7a8c",
                  cursor: "pointer",
                }}
              >
                Done
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default PinAuth;
