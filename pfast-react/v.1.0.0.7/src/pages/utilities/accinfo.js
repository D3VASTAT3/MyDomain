import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import supabase from '../../config/supabaseClient'
import '../../css/accinfo.css'

const AccInfo = () => {

    const navigate = useNavigate()
    const [username,setusername] = useState('')
    const [lastname,setlastname] = useState('')
    const [firstname,setfirstname] = useState('')
    const [middlename,setmiddlename] = useState('')
    const [suffix,setsuffix] = useState('')
    const [date,setdate] = useState(Date)
    const [contactnum,setcontactnum] = useState('')
    const [email,setemail] = useState('')

    const updateInfo = async (e) => {
        e.preventDefault()
        
        const { data: { user } } = await supabase.auth.getUser()
        
        const { data, error } = await supabase
            .from('UserInfo')
            .insert([
            { 
                userid: user.id, 
                username: username,
                LastName: lastname,
                FirstName: firstname,
                MiddleName: middlename,
                NameSuffix: suffix,
                Birthdate: date,
                Email: user.email,
                ContactNum: contactnum 
            },
            ])
        
        if(error) alert('fail')
        else {
            alert('success')
            localStorage.setItem('user',username)
        }

    }

    const getInfo = async () =>{
        
        const { data, error } = await supabase
            .from('UserInfo')
            .select('*')

        setusername(data[0].username)
        setlastname(data[0].LastName)
        setfirstname(data[0].FirstName)
        setmiddlename(data[0].MiddleName)
        setsuffix(data[0].NameSuffix)
        setdate(data[0].Birthdate)
        setemail(data[0].Email)
        setcontactnum(data[0].ContactNum)

    }

    useEffect(()=>{
        getInfo()
    },[])

    return (
        <div className="accinfo-container">
            <div>
                <button className='btn btn-primary mx-auto' onClick={()=>navigate('/menu')}>
                    <i className="bi bi-chevron-left"></i>
                </button>
            </div>
            <form className="rf-register-form">
                <h2>Account Information</h2>
                <div className="rf-input-container"><i className="fa fa-star bi bi-person-circle rf-icon"></i>
                    <input value={username} className="form-control rf-input-field" type="text" placeholder="Username" 
                        onChange={(e) => setusername(e.target.value.trim())}
                    />
                </div>
                <div className="rf-input-container"><i className="fa fa-star bi bi-person-circle rf-icon"></i>
                    <input value={lastname} className="form-control rf-input-field" type="text" placeholder="LastName" 
                        onChange={(e) => setlastname(e.target.value.trim())}
                    />
                </div>
                <div className="rf-input-container"><i className="fa fa-star bi bi-person-circle rf-icon"></i>
                    <input value={firstname} className="form-control rf-input-field" type="text" placeholder="FirstName" 
                        onChange={(e) => setfirstname(e.target.value.trim())}
                    />
                </div>
                <div className="rf-input-container"><i className="fa fa-star bi bi-person-circle rf-icon"></i>
                    <input value={middlename} className="form-control rf-input-field" type="text" placeholder="MiddleName" 
                        onChange={(e) => setmiddlename(e.target.value.trim())}
                    />
                </div>
                <div className="rf-input-container"><i className="fa fa-star bi bi-person-circle rf-icon"></i>
                    <input value={suffix} className="form-control rf-input-field" type="text" placeholder="Suffix. leave it blank if none." 
                        onChange={(e) => setsuffix(e.target.value.trim())}
                    />
                </div>
                <div className="rf-input-container"><i className="fa fa-star bi bi-calendar rf-icon"></i>
                    <input value={date} className="form-control rf-input-field" placeholder="Birthdate" type="date" 
                        onChange={(e) => setdate(e.target.value)}
                    />
                </div>
                <div className="rf-input-container"><i className="fa fa-star bi bi-info rf-icon"></i>
                    <input value={contactnum} className="form-control rf-input-field" type="tel" placeholder="ContactNumber" inputMode='tel' 
                        onChange={(e) => setcontactnum(e.target.value.trim())}
                    />
                </div>
                <button className="btn btn-primary rf-btn" type="button" onClick={(e)=>updateInfo(e)}>Apply</button>
            </form>
            
        </div>
    )
}

export default AccInfo