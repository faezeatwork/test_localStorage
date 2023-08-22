import { Form, Formik } from "formik";
import React from "react";
import { FormControl } from "../FormControl";
import { initialValues, onSubmit, validationSchema } from "./loginAttribute";

export const LoginInputs = () => {
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {(formik) => {
        // console.log(formik);
        return (
          <Form>
            <FormControl
              value="phone"
              formik={formik}
              control="input"
              type="text"
              name="phone"
              placeholder="phone"
              inputStyle="registerInputStyle"
            />
            <FormControl
              control="input"
              type="password"
              name="password"
              placeholder="&#xe167;  password"
              inputStyle="loginInputStyle"
            />
            <div className="p-3 d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-success w-75 rounded-pill me-3"
              >
                login
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
