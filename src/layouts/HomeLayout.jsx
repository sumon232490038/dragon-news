import React from "react";
import Headar from "../components/Headar";
import Navber from "../components/Navber";

const HomeLayout = () => {
  return (
    <div className=" mx-auto font-poppins">
      <header>
        <Headar></Headar>
      </header>
      <nav className="w-11/12 mx-auto">
        <Navber></Navber>
      </nav>
      <main></main>
    </div>
  );
};

export default HomeLayout;
