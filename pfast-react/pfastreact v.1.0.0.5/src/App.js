
import React, { useEffect, useState } from "react"
import supabase from "./config/supabaseClient"
import { Navigate, Outlet, useLocation, useRoutes } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"
import {} from "react-bootstrap"
import "./css/body.css"

import {Account,Auth} from "./pages/account"


//pages
import Login from "./pages/login"

import Myspace from "./pages/myspace"
import Myparking from "./pages/myparking"
import Menu from "./pages/menu"
import Homepage from "./pages/homepage"
import AuthConsumer, { RequireAuth, AuthProvider } from "./Auth"
import Welcomepage from "./pages/welcomepage"


function App() {
  // const [session, setsession] = useState(null)
  // const [auth, setauth] = useState(null)
  // const [dispatch]= AuthConsumer()
  const location = useLocation()

  // if(auth){
  //   setsession(true)
  // }<Welcomepage></Welcomepage>

  const routes = useRoutes([
    {
      path: "/",
      element: <main><Outlet></Outlet></main>,
      children: [
        {index:true, element:<Login></Login>},
        {path: "/login", element: <Login></Login>},
        {path: "/homepage", element: <RequireAuth><Homepage /></RequireAuth>},
        {path: "/myspace", element: <RequireAuth><Myspace /></RequireAuth>},
        {path: "/myparking", element: <RequireAuth> <Myparking /> </RequireAuth>},
        {path: "/menu", element: <RequireAuth> <Menu /> </RequireAuth>}
      ]
    }
  ])

  // useEffect(() => {
    
  //   supabase.auth.getSession().then(({ data: { session } }) => {
  //     setsession(session)
  //   })
  //   supabase.auth.onAuthStateChange((event, session) => {
  //     setsession(session)
  //   })
      
  // },[])

  return (
    <AuthProvider>{routes}</AuthProvider>
    
    
    // <div className="App">
    //   {!session ? <Login /> : 
    //     <Navigate to={"/homepage"} replace state={{path: location.pathname}}></Navigate>
    //   }
    // </div>
    
    
  )
}

export default App;
