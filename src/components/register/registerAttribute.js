import axios from "axios";
import swal from "sweetalert";
import * as Yup from "yup";

export const initialValues = {
  phone: "",
  password: "",
  c_password: "",
};

export const validationSchema = Yup.object({
  phone: Yup.number()
    .typeError("you must specify a number")
    .required("It is required"),

  password: Yup.string().required("It is required"),

  c_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("It is required"),
});

export const onSubmit = (values) => {
  // const result = { submit: "Done", value: { value } };
  console.log("result");

  axios
    .post("http://authservice.azhadev.ir/api/auth/register", values)
    .then((res) => {
      console.log(res);
      console.log(values);
      localStorage.getItem("token", JSON.stringify("token"));
      localStorage.setItem("savedData", JSON.stringify(values));
      if (res.status == 200) {
        localStorage.setItem("token", res.data.token);
        console.log("Registration was successful");
        swal("", "Your registration was successful!", "success");
      } else if (res.status == 202) {
        swal("This user exists!");
        console.log("This user exists");
      }
    })
    .catch((err) => {
      console.log(err);
      swal("Oops...", "Something went wrong!", "error");
    });
};
