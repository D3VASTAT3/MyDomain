import Navbar from "./nav";
import {Account,Auth} from "./account";

import { useEffect, useState } from "react";


const Homepage = () => {
  const [auth, setauth] = useState(false)


  const [user, setuser] = useState(null)
  

  useEffect(()=>{
    Auth(setauth)

  },[])
  
  return (

    <>
      
      <div className="homepage-container">
        <h1>Homepage</h1>

        <Navbar />
      </div>
      
    </>
      
  )
  
  
    
  

  
  
}

export default Homepage