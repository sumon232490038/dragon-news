import React from "react";
import Headar from "../components/Headar";
import Navber from "../components/Navber";
import LeftNavbar from "../components/layout-components/LeftNavbar";
import RightNavber from "../components/layout-components/RightNavber";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className=" mx-auto font-poppins">
      <header className="">
        <Headar></Headar>
      </header>
      <nav className="w-11/12 mx-auto">
        <Navber></Navber>
      </nav>
      <main className="w-11/12 mx-auto grid md:grid-cols-12 gap-2">
        <aside className="left col-span-3">
          <LeftNavbar></LeftNavbar>
        </aside>
        <section className="col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <RightNavber></RightNavber>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
