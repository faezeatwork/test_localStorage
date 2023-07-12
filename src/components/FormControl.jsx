import React from "react";
import Inputs from "./Inputs";

export const FormControl = (props) => {
  switch (props.control) {
    case "input":
      return <Inputs {...props} />;
  }
};
