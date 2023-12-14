import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function LogIn() {
    let navigate=useNavigate()
  const [logInfo, setLogInfo] = useState({
    email: "",
    password: "",
  });
  const { email, password } = logInfo;

  const BASE_URL="https://foododeringwebappserver-production.up.railway.app/"

  const onInputChange = (e) => {
    setLogInfo({ ...logInfo, [e.target.name]: e.target.value });
    // console.log(email);
    // console.log(password);
  };
  
  const onSubmitHandler= async(e)=>{
    e.preventDefault();
    
    try {
      const result = await axios.get(`${BASE_URL}getUserByEmail/${email}`);
    
    
    if(result.data.password===password){
        
        console.log("lOG IN sUCCESS")
        
        navigate("/mainPage")
    }
    else{
      alert("Invalid Email")
    }
    } catch (error) {
      console.log(error)
      alert("Enter Valid Creadintial..!")
    }
    


  }

  return (
    <>
      <div>LogIn Page</div>

      <div className="container">
      <form  onSubmit={(e)=>onSubmitHandler(e)}>
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt2 shadow">
          
            <div className="mb-3">
            
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter Your Email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="pass" className="form-label">
                Password
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Password"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
              ></input>
            </div>
           
            <button type="submit" className="btn btn-primary">
              Log In
            </button>
            <Link className="btn btn-outline-danger mx-2"   to={"/"}>Cancel</Link>
          </div>
        </div>
        </form>
      </div>
    </>
  );
}

export default LogIn;
