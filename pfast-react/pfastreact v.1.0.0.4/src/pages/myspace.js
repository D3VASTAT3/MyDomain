import "../css/myspace.css"
import { Button, Modal } from "react-bootstrap"
import Login from "./login";

import Navbar from "./nav";
import {Account,Auth} from "./account";
import supabase from "../config/supabaseClient";

import React, { createRef, useEffect, useRef, useState } from "react";
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

  const myspaceslistRef = useRef()
  const cardref = useRef([])
  const rmvRef = useRef()
  const [spaceList, setSpaceList] = useState([])

  const [rbtnStatus,setrbtnStatus] = useState(false)
  const [rbtnOpen,setrbtnOpen] = useState(false)



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  useEffect(() => {
    try{
      Auth(setsession)
      Account(setuser)
      showSpace()

      const ParkingDetails = async () => {
        supabase.channel('custom-all-channel')
          .on(
            'postgres_changes',
            { event: '*', schema: 'public', table: 'ParkingDetails' },
            (payload) => {
              console.log('Change received!', payload)
            }
          )
          .subscribe()

      }

      ParkingDetails()

    }catch(error){
      console.log(error)
    }
    

  },[Auth,myspaceslistRef])

  const addSpace = async (e) => {
    e.preventDefault()
    
        try {
          setLoading(true)
          
          const { error } = await supabase.from('ParkingDetails')
            .insert({ UserID: user, ParkingName: parkingname, ParkingLocation: plocation, ParkingStatus: false, ParkingOpen: false })
          if (error) throw error
          alert('Space created!')
          window.location.reload();
        } catch (error) {
          alert(error.error_description || error.message)
        } finally {
          setLoading(false)
          document.getElementById('addspace-form-container').reset()
          
        }
  }

 
  const removeSpace = async (id) => {
    
    // console.log("card id: ",id.target.parentNode.parentNode.parentNode.parentNode.id)
    // console.log("button id: ", id.target.id)
    if (id.target.id === id.target.parentNode.parentNode.parentNode.id){
      id.target.parentElement.parentElement.parentElement.remove()
      console.log('deleted')
      const { data, error } = await supabase
        .from('ParkingDetails')
        .delete()
        .eq('ParkingID', id.target.id)

      if(data){
        alert('Space deleted')
        // window.location.reload();
      }
      if(error){
        alert(error.error_description || error.message)
      }
    }
      
  }
  
  

  const showSpace = async () => {
    const spacesList = []
    
    try{
      let { data: user, error } = await supabase
        .from('ParkingDetails')
        .select('*')
      
      if(error){
        console.log(error)
      }

      user.forEach((data,index) => {
          spacesList.push(
            <div id={data.ParkingID} className="card" ref={cardref} key={index}>
            <div className="card-body" style={{background: '#ffff'}}>
                <h4 className="card-title d-flex justify-content-between" style={{fontSize: 32,fontWeight: 'bold'}}>{data.ParkingName}
                  
                </h4>
                <h6 className="text-muted card-subtitle mb-2">{data.ParkingLocation}</h6>
                <div className="d-flex justify-content-center">
                  <div className="btn-group btn-group-toggle" data-bs-toggle="buttons">
                    <label className="form-label btn btn-secondary active">Full<input type="radio" name={"options_".concat(index)} onChange={e=>setrbtnStatus(e.target.value)}/></label>
                    <label className="form-label btn btn-secondary mx-1">Not Full<input type="radio" name={"options_".concat(index)} onChange={e=>setrbtnStatus(e.target.value)}/></label>
                  </div>
                  <div className="btn-group btn-group-toggle mx-3" data-bs-toggle="buttons">
                    <label className="form-label btn btn-secondary active">Close<input type="radio" name={"options1_".concat(index)} onChange={e=>setrbtnOpen(e.target.value)}/></label>
                    <label className="form-label btn btn-secondary mx-1">Open<input type="radio" name={"options1_".concat(index)} onChange={e=>setrbtnOpen(e.target.value)}/></label>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-primary myspaceEdit" type="button" style={{marginRight: 5,marginLeft: 13, width: 75, fontSize: 15}}>Edit</button>
                    <button id={data.ParkingID} onClick={(e) => removeSpace(e)} className="btn btn-primary myspaceRemove" type="button" style={{fontSize: 15,width: 85,background: 'var(--bs-red)',borderColor: 'var(--bs-card-cap-bg)'}}>Remove</button>
                  </div>
            </div>
            </div>)
         })
    return setSpaceList(spacesList)

    }
    catch (error) {
      alert(error.error_description || error.message)
    }
  }



  return (
      
          <>
            {!session ? navigate('/login') : 
              <div className="myspace">
              <div>
                <h2>myspace</h2>
              </div>
              <div className="myspaceslist" ref={myspaceslistRef}>
                  {spaceList}
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