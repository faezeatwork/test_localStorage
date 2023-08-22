import React from "react";

import { Login } from "./login/Login";
import { Register } from "./register/Register";
import { Route, Routes } from "react-router-dom";

export default function Form() {
  return (
    <div className="container h-100 d-flex flex-column justify-content-center align-items-center ">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </div>
  );
}
