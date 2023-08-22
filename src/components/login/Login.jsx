import React from "react";
import { LoginInputs } from "./LoginInputs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export const Login = () => {
  return (
    <div className="p-2">
      <div className="customForm d-flex flex-column justify-content-center align-items-center ">
        <div className="w-100 text-center">
          <img
            src="../assets/images/login.png"
            className="formIcon"
            alt="login"
          />
        </div>
        <LoginInputs />
      </div>
      <div className=" mt-1 customRegisterLink ">
        <div className="pointer h-100 d-flex justify-content-center align-items-center fs-4">
          <NavLink to={'/register'} className='text-decoration-none text-dark haver_switch'>
            <AiOutlineArrowLeft /> register
          </NavLink>
        </div>
      </div>
    </div>
  );
};
