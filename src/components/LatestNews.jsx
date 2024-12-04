import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex justify-center items-center gap-2 p-2 bg-base-200">
      <h1 className="bg-red-500 text-white p-2 px-4">Latest</h1>
      <Marquee pauseOnHover={true} className="space-x-10">
        <Link to="/news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, amet?
        </Link>
        <Link to="/news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, amet?
        </Link>
        <Link to="/news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, amet?
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
