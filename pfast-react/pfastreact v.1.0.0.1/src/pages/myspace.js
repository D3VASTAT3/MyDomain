import "../css/myspace.css"
import Navbar from "./nav";
import { Button, Modal } from "react-bootstrap"

import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import supabase from "../config/supabaseClient"

const Myspace = ({session}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    return (
      <div className="myspace">
        <div>
            <h2>myspace</h2>
        </div>
        <div></div>
        <div className="modal-container">
          
          <Button variant="primary" onClick={handleShow}>
            Launch demo modal
          </Button>

          <Modal className="Modal-dialog Modal-dialog-centered" aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose} style={{display: "block"}}>
            
          <Modal.Header closeButton>
              <Modal.Title>Add Spaces</Modal.Title>
            </Modal.Header>
            
            <Modal.Body>
              <form className="addspace" method="post">
                <label className="form-label">Upload parking lot/space image</label>
                <input id="space-image" className="form-control" type="file" accept="image/*" />
                <label className="form-label">Proof of the lot/space title</label>
                <input id="title-image" className="form-control" type="file" accept="image/*" />
                <input id="parking-name" className="form-control inpt" type="text" placeholder="Parking name" />
                <input id="address" className="form-control inpt" type="text" placeholder="Address" />
              </form>
            </Modal.Body>
            
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
            
          </Modal>

        </div>
        

        <Navbar/>
      </div>
        
    )

    
}

export default Myspace