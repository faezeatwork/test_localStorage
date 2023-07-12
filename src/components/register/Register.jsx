import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { RegisterInputs } from "./RegisterInputs";

export const Register = () => {
  return (
    <div className="">
      <div className="customForm  ">
        <div className="w-100 text-center">
          <img
            src="../assets/images/user-image.png"
            alt="user"
            className="formIcon"
          />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <RegisterInputs />
        </div>
      </div>
      <div className=" mt-1 customRegisterLink ">
        <div className="pointer h-100 d-flex justify-content-center align-items-center fs-4">
          <AiOutlineArrowLeft /> Login
        </div>
      </div>
    </div>
  );
};
