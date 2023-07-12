import React from "react";

import { Login } from "./login/Login";
import { Register } from "./register/Register";

export default function Form() {
  return (
    <div className="container h-100 d-flex flex-column justify-content-center align-items-center ">
      {/* <Login /> */}
      <Register />
    </div>
  );
}
