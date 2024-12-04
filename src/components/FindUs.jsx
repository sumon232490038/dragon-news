import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const FindUs = () => {
  return (
    <div className="my-5">
      <h1 className="font-bold">Find Us On</h1>
      <div className="join flex  *:justify-start *:w-full join-vertical *:bg-white mt-2 ">
        <Link className="btn  join-item">
          <FaFacebook></FaFacebook> Facebook
        </Link>
        <Link className="btn join-item">
          <FaSquareTwitter></FaSquareTwitter> Tewitter
        </Link>
        <Link className="btn join-item">
          <FaInstagram></FaInstagram> Instagram
        </Link>
      </div>
    </div>
  );
};

export default FindUs;
