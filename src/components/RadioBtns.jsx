import { FastField } from "formik";
import React, { Fragment } from "react";

export const RadioBtns = (props) => {
  const { type, name, nameOfItem, label } = props;
  return (
    <div className="d-flex mt-3">
      <label htmlFor={name} className="me-4">
        {label}:
      </label>
      <FastField id={name} name={name}>
        {({ field }) => {
          // console.log(field);
          return nameOfItem.map((i) => (
            <div className="form-check me-2" key={i.id}>
              <Fragment>
                <label className="form-check-label" htmlFor={i.id}>
                  {i.name}
                </label>
                <input
                  className="form-check-input"
                  type="radio"
                  name={name}
                  id={i.id}
                  {...field}
                  value={i.id}
                  checked={field.value == i.id}
                 
                />
              </Fragment>
            </div>
          ));
        }}
      </FastField>
    </div>
  );
};
