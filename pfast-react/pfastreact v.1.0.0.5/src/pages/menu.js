import Navbar from "./nav";
import '../css/menu.css'

import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import supabase from "../config/supabaseClient";
import { Auth,Logged } from "./account";
import AuthConsumer from "../Auth";



const Menu = () => {
  const [auth,setauth] = useState(false)
  const navigate = useNavigate()
  const [authed,dispatch ]= AuthConsumer()

  useEffect(()=>{
    Auth(setauth)
    
  },[])


  const signOut = async () => {
    
    await supabase.auth.signOut()
      .then(navigate('/login'))
    dispatch({type:"logout"})
    console.log('you signed out')

  } 

  return (
    <>
      <div className="menu-container">
        <div>
          <h2>Menu</h2>
        </div>
        
        <div>
          <div className="container img-logo" style={{width: 120,height: 120,padding: 0}}>
            <img src={require("../img/pfastlogo.png")} style={{width: 120,height: 120}} />
          </div>
          <div style={{width: '100%',marginTop: 25}}>
            <p className="text-center" style={{marginBottom: 25}}>user #213</p>
            <div className="text-center align-items-center menu-buttons">
              <button className="btn btn-primary menu-button-select" type="button">Account Information</button>
              <button className="btn btn-primary menu-button-select" type="button">Account Settings</button>
              <button className="btn btn-primary menu-button-select" type="button">Vehicle</button>
              <button className="btn btn-primary menu-button-select" type="button">My Spaces</button>
            </div>
          </div>
          <div className="d-flex justify-content-center logout-btn-container" style={{marginTop: 18,marginBottom: 18,marginLeft: 9,marginRight: 9}}>
            <button className="btn btn-danger menu-buttons-logout" type="button" onClick={signOut}>Sign Out</button>
          </div>
        </div>

        <Navbar/>
      </div>
    </>
    
      
  )

    
}

export default Menu