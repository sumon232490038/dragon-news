import React from "react";
import { Link } from "react-router-dom";
import user from "../assets/user.png";

const Navber = () => {
  return (
    <div className="flex justify-between my-5">
      <div className=""></div>
      <div className="space-x-5">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/"> Career</Link>
      </div>
      <div>
        <div className="flex gap-2">
          <img src={user} alt="" />
          <button className="btn btn-neutral rounded-none px-10 font-bold">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navber;
