import React from "react";
import "../signIn/index.css";
import { Typography, Box, Link, TextField } from "@mui/material";
import AppLogo from "../../../assets/logo.png";
// import "./index.css";
import { Logo } from "../../../assets/Svg.jsx";
import SigninForm from "./SigninForm.jsx";

const SignIn = () => {
  return (
    <>
      {/* <Box
        sx={{
          display: "flex",
          // flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          // width: "1440px",
          // height: 789,
          // m: "auto",
          padding: "98px 392px 99px 392px",
          // background: "var(--Grey-5, #FCFAFA)",
          background: "red",
          overflow: "hidden",
        }}
      > */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "90vh",
          // m: "auto",
          // padding: "184px 445px 125px 446px",
          gap: "10px",  
        }}
      >
        <Box>
          <Logo />
        </Box>
        <Box>
          <Typography
            variant="subtitle1"
            sx={{ width: "665px", fontSize: "36px", textAlign: "center" }}
          >
            Welcome, Signin to Digi Reg
          </Typography>
        </Box>
        <SigninForm
          sx={{
            width: "512px",
            height: "494px",
            background: "#FFF",
          }}
        />
      </Box>
      {/* </Box> */}
    </>
  );
};
export default SignIn;
