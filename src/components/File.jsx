import { ErrorMessage, FastField } from "formik";
import React, { useEffect } from "react";

export const File = ({ name, type, placeholder, formik }) => {
  //   useEffect(() => {
  //     console.log(formik);
  //   }, []);

  const handleSetFileValue = (e) => {
    formik.setFieldValue(name, e.target.files[0]);
    console.log(e.target.files[0]);

    // metod setFieldValue yeki az state ha ro mitone taqir bede
    // metod setVales hame state ha ro mitoone taqir bede
  };

  return (
    <div>
      <div className="position-relative">
        <input
          value={formik.values[name] ? formik.values[name].name : ""}
          onChange={() => null}
          type="text"
          placeholder={placeholder}
          className={`bg-light input-group-text rounded-pill shadow-lg w-100`}
        />
        <input
          type={type}
          className="pointer chooseFile"
          onChange={(e) => handleSetFileValue(e)}
        />
      </div>

      <ErrorMessage
        name={name}
        render={(d) => <small className="smallFont">{d}</small>}
      />
    </div>
  );
};
