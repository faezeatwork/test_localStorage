import { ErrorMessage, FastField } from "formik";
import React from "react";

const Inputs = (props) => {
  const { type, name, placeholder, iconStyle, inputStyle, errMsg } = props;
  return (
    <div className=" col-12">
      <label htmlFor=""></label>
      <FastField
        type={type}
        name={name}
        placeholder={placeholder}
        className={`${iconStyle} input-group-text rounded-pill shadow-lg ${inputStyle} w-100`}
      />

      <div className={`${errMsg}`}>
        <ErrorMessage
          name={name}
          render={(d) => <small className="smallFont">{d}</small>}
        />
      </div>
    </div>
  );
};

export default Inputs;
