import * as yup from "yup";

export const signupValidationSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
  confirmPassword: yup
    .string()
    .required("Confirm Password")
    .test("passwords-match", "Passwords must match", function (value) {
      return this.parent.password === value;
    }),
  authPin: yup.string().required("Enter PIN"),
});

export const signinValidationSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

export const studentRegistrationValidationSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  middleName: yup.string().required("Middle Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().required("Email is required"),
  phoneNumber: yup.string().required("Phone Number is required"),
  faculty: yup.string().required("Faculty is required"),
  department: yup.string().required("Department is required"),
});
