import React from "react";
import "../styles/navbar.css";

function Navb() {
  return (
    <nav>
      <div className="menu">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navb;
