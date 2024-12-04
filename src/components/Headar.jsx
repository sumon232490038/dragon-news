import React from "react";
import logo from "./../assets/logo.png";
import moment from "moment";
import LatestNews from "./LatestNews";

const Headar = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 w-11/12 mx-auto">
      <div>
        <img className="w-300px" src={logo} alt="" />
      </div>
      <h1 className="text-gray-500 ">Journalism Without Fear or Favour</h1>
      <h1>{moment().format("dddd, MMMM Do YYYY")}</h1>
      <section>
        <LatestNews></LatestNews>
      </section>
    </div>
  );
};

export default Headar;
