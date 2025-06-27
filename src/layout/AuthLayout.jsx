import React from "react";
import { Outlet } from "react-router";
import authImage from "../assets/authImage.png";
import Logo from "../components/Logo";

const AuthLayout = () => {
  return (
    <div className="w-full min-h-screen bg-base-200 p-12">
      <div className="mb-8">
        <Logo />
      </div>

      <div className="flex flex-col lg:flex-row items-center space-x-10 justify-center gap-10 p-6 mx-auto">
        {/* Form Section */}
        <div className="flex-1 w-md">
          <Outlet />
        </div>
        {/* Image Section */}
        <div className="flex-1">
          <img src={authImage} alt="Auth" className="rounded-lg w-md shadow-2xl " />
        </div>

        
      </div>
    </div>
  );
};

export default AuthLayout;
