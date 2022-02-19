import React from "react";
import "../styles/topnav.css";
import fb from '../assets/icons/facebook.png';
import gl from '../assets/icons/google.png';
import ins from '../assets/icons/instagram.png';
import tw from '../assets/icons/twitter.png'
import lg from '../assets/icons/SOSpharma2.png'
import sch from '../assets/icons/search.png'
import hrt from '../assets/icons/heart.png'

function Topnav() {
  return (
    <section className="nav">

      <div className="social">
        <img src={fb} alt ="" />
        <img src={gl} alt ="" />
        <img src={ins} alt ="" />
        <img src={tw} alt ="" />
      </div>

      <div className="logo">
         <img src={lg} alt="" />
      </div>

      <div className="search-area">
        <img src={sch} alt="" />
        <img src={hrt} alt="" />
      </div>
    </section>
  );
}

export default Topnav;
