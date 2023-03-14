import "../css/login-registration.css"
import React, {useEffect, useState} from "react"
import supabase from "../config/supabaseClient"
import { Navigate, useNavigate } from "react-router-dom";
import AuthConsumer from "../Auth";
import { Auth } from "./account";


const Login = () => {
    // console.log(supabase)
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const navigate = useNavigate()
    const [authed,dispatch ]= AuthConsumer()

    const [items,setitems] = useState(false)
 

    useEffect(()=>{
      localStorage.setItem('auth',JSON.stringify(items))
    },[items])

    const handleSubmit = async (e) => {
        e.preventDefault();
        

        try {
            setLoading(true)
            const { data, error } = await supabase.auth.signInWithPassword({ email: email, password: pass })
            if (error) throw error
            alert('Welcome!') 
            
            navigate("/homepage", {replace: true})
        } catch (error) {
          alert(error.error_description || error.message)
        } finally {
          setLoading(false)
          setitems(true)
          dispatch({type:"login"})
        }
    }

    return (
      <div className="login">
        {/* {session ?  :  */}
          <section id="hero">
            <form onSubmit={handleSubmit} className="d-flex flex-column loginForm" method="get">
                <h1 className="text-center">Login</h1>
                <label id="label-1" className="form-label">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="form-control frm-input" type="email" required name="email" />
                <label id="label-2" className="form-label">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} className="form-control frm-input" type="password" required name="password" />
                <button id="login" className="btn btn-primary bttn" type="submit" name="login">
                  {loading ? 'Loading...' : 'Log In'}</button>
                <div style={{marginTop: 16,marginBottom: 16,border: '.1px solid var(--bs-gray-600)'}}> </div>
                <a id="signup" className="btn btn-success bttn" role="button" name="signup" onClick={() => navigate("/signup")}>Sign Up</a>
            </form>
          </section>
        {/* } */}
        
      </div>
        
        
    )
}

export default Login