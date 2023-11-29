import React from "react";
import {
  Typography,
  TextField,
  Box,
  Grid,
  Button,
  CircularProgress,
} from "@mui/material";
import { useFormik } from "formik";
import { signupValidationSchema } from "../../../schemaValidation";
// import supabase from "../../../config/SupabaseClient";
// import { createClient } from "@supabase/supabase-js";



const SignupForm = ({}) => {
  const [initialValues, setInitialValues] = React.useState({});

  // This function submits user credentials to an api
  const handleSignup = (values, formikBag) => {
    console.log({ values });
  };

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    onSubmit: handleSignup,
    validationSchema: signupValidationSchema,
  });

  const {
    values,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    errors,
    isValid,
    submitCount,
  } = formik;

  const getProps = (name) => {
    return {
      name,
      id: name,
      value: values[name],
      onChange: handleChange,
      onBlur: handleBlur,
      error: Boolean(
        (touched[name] && errors[name]) || (submitCount > 0 && errors[name])
      ),
      helperText:
        (touched[name] && errors[name]) || (submitCount > 0 && errors[name]),

      size: "small",
      variant: "outlined",
      fullWidth: true,
    };
  };

  // async function handleSubmitSupabase() {
  //   try {
  //     const { data, error } = await supabase.auth.signUp({
  //       email: values.username,
  //       password: values.password,
  //       options: {
  //         data: {
  //           pin: values.authPin,
  //         },
  //       },
  //     });

  //     alert("Check your email for verification link");
  //   } catch (error) {
  //     alert(error);
  //   }
  // }

  return (
    <Box component="div" sx={{ my: 2 }}>
      <form onSubmit={handleSubmit}>
        <Grid container direction="column" spacing={3}>
          <Grid item sm={12} md={6}>
            <TextField
              {...getProps("username")}
              label="Username"
              sx={{
                width: "248px",
                height: "42px",
                flexshrink: "0",
              }}
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <TextField
              {...getProps("password")}
              label="Password"
              type="password"
              sx={{
                width: "248px",
                height: "42px",
                flexshrink: "0",
              }}
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <TextField
              {...getProps("confirmPassword")}
              label="Confirm Password"
              type="password"
              sx={{
                width: "248px",
                height: "42px",
                flexshrink: "0",
              }}
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <TextField {...getProps("authPin")} label="PIN" />
          </Grid>
        </Grid>
        <Grid container sx={{ mt: 2 }} justifyContent="right">
          <Grid item sm={12} md={2}>
            <Button
              disabled={isSubmitting || !isValid}
              type="submit"
              size="small"
              color="primary"
              variant="contained"
              fullWidth
              startIcon={
                isSubmitting ? (
                  <CircularProgress size="1rem" className="mr-1" />
                ) : null
              }
            >
              {isSubmitting ? "Submitting" : "Submit"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default SignupForm;
