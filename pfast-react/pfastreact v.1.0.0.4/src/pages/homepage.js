import Navbar from "./nav";
import {Account,Auth} from "./account";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Homepage = () => {
  const [session, setsession] = useState(false)
  const [user, setuser] = useState(null)
  
  const navigate = useNavigate()
  
  useEffect(() => {
    try{
      Auth(setsession)
      Account(setuser)
      
    }catch(error){
      
    }
    
  },[Auth,Account])

  return (
    
    <>
      {!session ? navigate('/login') : 
      
      <div className="homepage-container">
        <h1>Homepage</h1>

        <Navbar />
      </div>
      }
      
    </>
      
  )
  
}

export default Homepage