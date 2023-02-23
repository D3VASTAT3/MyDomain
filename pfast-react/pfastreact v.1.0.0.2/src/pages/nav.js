import "../css/nav.css"
import { useNavigate } from "react-router-dom";
import Homepage from "./homepage";
import Myspace from "./myspace";
import { useEffect } from "react";



const Navbar = () => {


  const navigate = useNavigate()   
    
    return (
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a id="link-dashboard" className="nav-link nav-link" href="homepage">
              <i className="material-icons">dashboard</i>
              <span className="nav-text">Home Page</span>
            </a>
          </li>
          <li className="nav-item">
            <a id="link-profile" className="nav-link nav-link" href="myparking">
              <i className="material-icons">account_circle</i>
              <span className="nav-text">My Parking</span>
            </a>
          </li>
          <li className="nav-item">
            <a id="link-devices" className="nav-link nav-link" href="myspace" >
              <i className="material-icons">devices</i>
              <span className="nav-text">My Spaces</span>
            </a>
          </li>
          <li className="nav-item">
            <a id="link-settings" className="nav-link nav-link" href="menu">
              <i className="material-icons">settings</i>
              <span className="nav-text">Menu</span>
            </a>
          </li>
        </ul>
    )
}

export default Navbar