import "../css/myspace.css"
import { Button, Modal } from "react-bootstrap"
import Login from "./login";

import Navbar from "./nav";
import {Account,Auth} from "./account";
import supabase from "../config/supabaseClient";

import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Myspace = () => {

  const [session, setsession] = useState(false)
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const [user,setuser] = useState('')
  const [parkingname, setParkingname] = useState('')
  const [plocation, setPlocation] = useState('')

  const [showparkingname, setShowparkingname] = useState('')
  const [showplocation, setShowplocation] = useState('')


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  

  const addSpace = async (e) => {
    e.preventDefault()
    
        try {
          setLoading(true)
          
          const { error } = await supabase.from('user')
            .insert({ id: user, ParkingName: parkingname, ParkingLocation: plocation  })
          if (error) throw error
          alert('Space created!')
        } catch (error) {
          alert(error.error_description || error.message)
        } finally {
          setLoading(false)
          document.getElementById('addspace-form-container').reset()
          
        }
  }

  const showSpace = async () => {

    try{
      const {data,error} = await supabase
        .from('user')
        .select()
        .single()

        if (error){
          alert(error)
        }

        if (data){
          setShowparkingname(data.ParkingName)
          setShowplocation(data.ParkingLocation)
        }
    }
    catch (error) {
      alert(error.error_description || error.message)
    }
  }

  useEffect(() => {
    try{
      Auth(setsession)
      Account(setuser)
      showSpace()
    }catch(error){

    }
    

  },[Auth])

  return (
      
          <>
            {!session ? navigate('/login') : 
              <div className="myspace">
              <div>
                <h2>myspace</h2>
              </div>
              <div className="myspaceslist">
                  <div className="card">
                      <div className="card-body">
                          <h4 className="card-title">{showparkingname}</h4>
                          <h6 className="text-muted card-subtitle mb-2">{showplocation}</h6>
                          <p className="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                          <a className="card-link" href="#">Link</a>
                          <a className="card-link" href="#">Link</a>
                      </div>
                  </div>
              </div>
              
              <div className="modal-container">
                  
                <Button variant="primary" onClick={handleShow}>
                  Launch demo modal
                </Button>

                <Modal className="Modal-dialog Modal-dialog-centered" aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose} style={{display: "block"}}>
                    
                  <Modal.Header closeButton>
                      <Modal.Title>Add Spaces</Modal.Title>
                  </Modal.Header>
                  
                  <Modal.Body>
                      <form id="addspace-form-container" className="addspace" method="post" onSubmit={addSpace}>
                        <label className="form-label">Upload parking lot/space image</label>
                        <input id="space-image" className="form-control" type="file" accept="image/*" />
                        <label className="form-label">Proof of the lot/space title</label>
                        <input id="title-image" className="form-control" type="file" accept="image/*" />
                        <input id="parking-name" onChange={(e) => setParkingname(e.target.value)} className="form-control inpt" type="text" placeholder="Parking name" required/>
                        <input id="address" onChange={(e) => setPlocation(e.target.value)} className="form-control inpt" type="text" placeholder="Address" required/>
                        
                      </form>                   
                  </Modal.Body>
                    
                  <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" form="addspace-form-container" type="submit" onSubmit={addSpace}>
                        {loading ? <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> : 'Save Changes'}
                        
                      </Button>
                  </Modal.Footer>
                </Modal>
              </div> 

              <Navbar/>
            </div>
            }
              
          </>
  
  )

    
}

export default Myspace