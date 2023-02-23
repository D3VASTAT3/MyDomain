import "../css/login-registration.css"
import React, {useState} from "react"
import supabase from "../config/supabaseClient"
import { useNavigate } from "react-router-dom";

const Registration = () => {
    const [loading, setLoading] = useState(false)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [contact, setContact] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
    
        try {
          setLoading(true)
          const { error } = await supabase.auth.signUp({ email: email, password: pass  })
          if (error) throw error
          alert('Account created!')
        } catch (error) {
          alert(error.error_description || error.message)
        } finally {
          document.getElementById('signup-container').reset()
          setLoading(false)
          navigate('/homepage')
        }
    }

    return (
      <div className="signup">
        <section id="hero">
            <form onSubmit={handleSubmit} id="signup-container" className="d-flex flex-column" method="post">
                <h1 className="text-center">PFASt Registration</h1>
                <label id="label" className="form-label">Username</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} className="form-control frm-input" type="text" required name="username" />
                <label id="label" className="form-label">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} className="form-control frm-input" type="password" required name="password" />
                <label id="label" className="form-label">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="form-control frm-input" type="email" required name="email" />
                <label id="label" className="form-label">Contact No</label>
                <input value={contact} onChange={(e) => setContact(e.target.value)} className="form-control frm-input" type="tel" required name="contactno" />
                <button id="signup" className="btn btn-success bttn" type="submit" name="signup">{loading ? ('Creating...') : ('Sign Up')}</button>
                <div style={{marginTop: 16,marginBottom: 16,border: '.1px solid var(--bs-gray-600)'}}> </div>
                <a className="btn btn-primary bttn" role="button" name="login" onClick={() => navigate("/login")}>Log In</a>
            </form>
        </section>
      </div>
        
        
    )
}

export default Registration