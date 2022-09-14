import * as yup from "yup";
import YupPassword from "yup-password";
YupPassword(yup);

const requireField = () => yup.string().required("Password is required");

export const schemaRegister = yup
  .object({
    fullname: yup
      .string()
      .required("This field is required")
      .matches(/^[a-zA-Zs\s]*$/, "Numbers are not permitted"),
    email: yup
      .string()
      .email("Email must be a valid email")
      .required("Email is required"),
    birthdate: yup.string().required("Date is required"),
    username: yup.string().required("Username is required"),
    password: requireField()
      .min(8, "The password must be at least 8 characters")
      .minLowercase(1, "Must have 1 lowercase letter")
      .minUppercase(1, "Must have 1 uppercase letter")
      .minNumbers(1, "Must have 1 number")
      .minSymbols(1, "Must have 1 special character"),
    passwordRepeat: yup
      .string()
      .oneOf([yup.ref("password"), null], "Incorrect password")
      .required("Password is required"),
  })
  .required()
  .strict();

export const schemaUpdate = yup
  .object({
    fullname: yup
      .string()
      .required("This field is required")
      .matches(/^[a-zA-Zs\s]*$/, "Numbers are not permitted"),
    birthdate: yup.string().required("Date is required"),
    username: yup.string().required("Username is required"),
    password: requireField()
      .min(8, "The password must be at least 8 characters")
      .minLowercase(1, "Must have 1 lowercase letter")
      .minUppercase(1, "Must have 1 uppercase letter")
      .minNumbers(1, "Must have 1 number")
      .minSymbols(1, "Must have 1 special character"),
    passwordRepeat: yup
      .string()
      .oneOf([yup.ref("password"), null], "Incorrect password")
      .required("Password is required"),
  })
  .required()
  .strict();
