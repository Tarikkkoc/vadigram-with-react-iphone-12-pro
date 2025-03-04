import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Home from "../img/Home2.svg";
import Search from "../img/Search2.svg";
import Add from "../img/add.svg";
import HeartPlus from "../img/Heartplus.svg";
import Profile from "../img/Profile.svg";
import Indicator from "../img/HomeIndicator.svg";

const footer = () => {
  return (
    <div className="reelsFooter w-full h-20 bg-white max-w-3xl mx-auto px-auto fixed bottom-0">
      <ul className="flex items-end justify-around h-12">
        <Link to="/">
          <li className="cursor-pointer">
            <img src={Home} alt="" />
          </li>
        </Link>
        <Link to="/search">
          <li className="cursor-pointer">
            <img src={Search} alt="" />
          </li>
        </Link>
        <li className="cursor-pointer">
          <img src={Add} alt="" />
        </li>
        <Link to="/likes">
          <li className="cursor-pointer">
            <img src={HeartPlus} alt="" />
          </li>
        </Link>
        <Link to="/profile/ahmet_tarik">
          <li className="cursor-pointer">
            <img src={Profile} alt="" />
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default footer;
