import * as Yup from "yup";

const personalInfoSchema = Yup.object().shape({
  first_name: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  last_name: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  phone: Yup.string().matches(/^[6-9]\d{9}$/,"Please enter valid number").required('Required'),
});

export default personalInfoSchema;