import Navbar from "./nav";

import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const Homepage = () => {
    return (
      <>
        <div>
            <h2>Dashboard</h2>
        </div>

        <Navbar />
        
      </>
        
    )

    
}

export default Homepage