import React from "react";
import logo from '../assets/icons/caduceus.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function Sidebar() {
  return (
    <section className="sidebar">
      <div className="sidebar-brand">
          <img src={logo} alt=""/>
          <h1 className="brand">Pharmacy</h1>
      </div>
      <div className="sidebar-menu">
          <ul>
            <li>
              <a href="" ><FontAwesomeIcon icon="fa-coffee" /><span>Dashboard</span></a>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
      </div>
    </section>
  );
}

export default Sidebar;
