import axios from "axios";
import swal from "sweetalert";
import * as Yup from "yup";

export const initialValues = {
  phone: "",
  password: "",
};

export const validationSchema = Yup.object({
  phone: Yup.number()
    .typeError("you must specify a number")
    .required("It is required"),

  password: Yup.string().required("It is required"),
});

export const onSubmit = (values) => {
  axios
    .post("http://authservice.azhadev.ir/api/auth/login", values)
    .then((res) => {
      if (res.status == 200) {
        console.log(res.data);
        swal("", "Login was successful!", "success");
      } else if (res.status == 202) {
        console.log(res.data);
        console.log("datas are not true");
        swal("", "The entered information is not correct!", "error");
      } else {
        console.log(res.data);
        console.log("something went wrong");
        swal("", "The entered information is not correct!", "error");
      }
    })
    .catch(() => {
      console.log("error");
    });
};
