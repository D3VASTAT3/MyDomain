
import React, { useEffect, useState } from "react"
import supabase from "./config/supabaseClient"

import "bootstrap/dist/css/bootstrap.min.css"
import {} from "react-bootstrap"
import "./css/body.css"

import {Account,Auth} from "./pages/account"


//pages
import Login from "./pages/login"
import Registeration from "./pages/registration"
import Myspace from "./pages/myspace"
import Homepage from "./pages/homepage"
import Navbar from "./pages/nav"


function App() {
  const [session, setsession] = useState(null)
  const [event, setevent] = useState('')


  useEffect(() => {
    // supabase.auth.getSession().user.then(({ data: { session } }) => {
    //   setSession(session)
    // })

    // supabase.auth.onAuthStateChange((_event, session) => {
    //   setSession(session)
    // })
    // const fetchData = async () => {
    //   const { data: { user } } = await supabase.auth.getUser()
    //   setSession(user)
    // }
    // fetchData()
    Auth(setsession)
      
  })


  return (
    <div className="App">
      {!session ? <Login /> : <Homepage />}
    </div>
  )
}

export default App;
