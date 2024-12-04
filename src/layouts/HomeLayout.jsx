import React from "react";
import Headar from "../components/Headar";
import Navber from "../components/Navber";
import LeftNavbar from "../components/layout-components/LeftNavbar";

const HomeLayout = () => {
  return (
    <div className=" mx-auto font-poppins">
      <header>
        <Headar></Headar>
      </header>
      <nav className="w-11/12 mx-auto">
        <Navber></Navber>
      </nav>
      <main className="w-11/12 mx-auto grid md:grid-cols-12">
        <aside className="col-span-3">
          <LeftNavbar></LeftNavbar>
        </aside>
        <section className="col-span-6">
          <h1>context</h1>
        </section>
        <aside className="col-span-3">Right aside</aside>
      </main>
    </div>
  );
};

export default HomeLayout;
