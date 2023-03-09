import Navbar from "./nav";
import AuthConsumer from "../Auth";


const Myparking = () => {
    const [authed,dispatch ]= AuthConsumer()

    console.log(authed)
    // const auth = AuthConsumer()
  
    return (
      <>
        <div>
            <h2>Myparking</h2>
        </div>
        <button className="btn btn-primary" onClick={()=>{
          dispatch({type:"login"})
        }}>CLICK to login</button>
        <button className="btn btn-primary mx-5" onClick={()=>{
          dispatch({type:"logout"})
        }}>CLICK to logout</button>
        <Navbar/>
      </>
        
    )

    
}

export default Myparking