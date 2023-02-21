
import React, { useEffect, useState } from "react"
import supabase from "./config/supabaseClient"

//css
import "bootstrap/dist/css/bootstrap.min.css"
import {} from "react-bootstrap"
import "./css/body.css"

//pages
import Login from "./pages/login"
import Registeration from "./pages/registration"
import Myspace from "./pages/myspace"


function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])


  return (
    <div className="App">
      {!session ? <Login /> : <Myspace key={session.user.id} session={session} /> }
    </div>
  )
}

export default App;
