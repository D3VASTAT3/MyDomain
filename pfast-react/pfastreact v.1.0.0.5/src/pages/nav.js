import "../css/nav.css"
import { NavLink } from "react-router-dom";



const Navbar = () => {
  
  return (
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink to={"/homepage"} id="link-dashboard" className="nav-link nav-link" style={({ isActive }) => ({ 
            color: isActive ? 'lime' : 'black' })}>
            <i className="material-icons">dashboard</i>
            <span className="nav-text">Home Page</span>
          </NavLink>
        </li>
        <li className="nav-item" >
          <NavLink to={"/myparking"} id="link-profile" className="nav-link nav-link" style={({ isActive }) => ({ 
            color: isActive ? 'lime' : 'black' })}>
            <i className="material-icons">account_circle</i>
            <span className="nav-text">My Parking</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/myspace"} id="link-devices" className="nav-link nav-link" style={({ isActive }) => ({ 
            color: isActive ? 'lime' : 'black' })}>
            <i className="material-icons">devices</i>
            <span className="nav-text">My Spaces</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/menu"} id="link-settings" className="nav-link nav-link" style={({ isActive }) => ({ 
            color: isActive ? 'lime' : 'black' })}>
            <i className="material-icons">settings</i>
            <span className="nav-text">Menu</span>
          </NavLink>
        </li>
      </ul>
  )
}

export default Navbar