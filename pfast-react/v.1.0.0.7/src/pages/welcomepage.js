import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import AuthConsumer from "../Auth"
import supabase from "../config/supabaseClient"


const Welcomepage = () => {
    const [authed,dispatch] = AuthConsumer()
    const [session,setsession] = useState(null)
    const navigate = useNavigate()
    
    const loggedin = async () => {
        if(session){
            dispatch({type:'login'})
            console.log(authed)
            navigate('/homepage')
        }else{
            dispatch({type:'logout'})

            console.log(authed)
            console.log('laa')
            navigate('/login')
        }
    }
    
     useEffect(() => {
    
    supabase.auth.getSession().then(({ data: { session } }) => {
      setsession(session)
    })
    supabase.auth.onAuthStateChange((event, session) => {
      setsession(session)
    })
      
  },[])

    return (
        <div className="welcomepage-container">
            <button className="btn btn-primary" 
            onClick={loggedin}>Sign in</button>
        </div>
    )
}

export default Welcomepage