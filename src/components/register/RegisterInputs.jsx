import React from "react";
import { FormControl } from "../FormControl";
import { Form, Formik } from "formik";
import axios from "axios";
import { useState } from "react";
import { initialValues, onSubmit, validationSchema } from "./registerAttribute";

export const RegisterInputs = () => {
  const [data, setData] = useState({
    phone: "",
    password: "",
    c_password: "",
  });

  const handleGetUserData = () => {
    axios
      .get("http://authservice.azhadev.ir/api/auth/user", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then(() => {
        const savedData = JSON.parse(localStorage.getItem("savedData"));
        console.log(savedData);
        setData(savedData);
      })
      .catch();
  };

  return (
    <Formik
      initialValues={data || initialValues}
      enableReinitialize
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        //  console.log(formik);
        return (
          <Form>
            <div className="registerInputsDiv">
              {/*div of all inputs*/}
              {/* ====== phone input ===== */}

              <FormControl
                value="phone"
                formik={formik}
                control="input"
                type="text"
                name="phone"
                placeholder="phone"
                inputStyle="registerInputStyle"
              />

              {/* ===== password , confirmation inputs ======= */}
              <div className="d-flex row ">
                <FormControl
                  formik={formik}
                  control="input"
                  type="password"
                  name="password"
                  placeholder="password"
                  inputStyle="registerInputStyle"
                  errMsg="divErrMsg"
                />
                <FormControl
                  formik={formik}
                  control="input"
                  type="password"
                  name="c_password"
                  placeholder="confirm password"
                  inputStyle="registerInputStyle"
                />
              </div>
            </div>

            {/* ================= register , data recovery btn ================== */}
            <div className="p-3 d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-success w-75 rounded-pill mt-2"
              >
                Register
              </button>
              <button
                type="button"
                className="ms-2 btn btn-info w-75 rounded-pill mt-2"
                onClick={handleGetUserData}
              >
                data recovery
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
