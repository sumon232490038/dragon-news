import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const LoginWith = () => {
  return (
    <div>
      <h1 className="font-bold">Login With</h1>
      <div className="flex flex-col *:w-full space-y-2 mt-2">
        <button className="btn">
          {" "}
          <FaGoogle></FaGoogle> Logiin With Google
        </button>
        <button className="btn">
          <FaGithub></FaGithub> Logiin With Github
        </button>
      </div>
    </div>
  );
};

export default LoginWith;
