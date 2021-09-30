import React from 'react'
import { useState } from 'react';
import { useHistory} from 'react-router-dom';
import APIUserservice from '../Services/APIUserService';
import Loginimg2 from "../images/Loginimg2.jpg"
function Login() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [role,setRole]=useState("ADMIN");
  const [checked,setChecked]=useState(false);
  const [valid,setEmailerr]=useState(true);
  const [validpass,setPasserr]=useState(true);
  const history=useHistory();
  function emailValue(event){
    var email=event.target.value;
    if(email.indexOf("@")<1 || email.lastIndexOf(".")<email.indexOf("@")+2){
      setEmailerr(false);
    }else{
      setEmailerr(true);
    }
      setEmail(email);
  };
  function passwordValue(event){
    var password=event.target.value;
    if(password.length < 5){
      setPasserr(false);
    }else{
      setPasserr(true);
    }
      setPassword(password);
};
function roleValue(event){

  var role=event.target.value;
  setRole(role);
  console.log(role);
}
function setCheckedValue(event){
   if(checked === false){
     setChecked(true);
   }
}
function loginInfo(e){
   e.preventDefault();
 let userdata={userEmail:email,userPassword:password,userRole:role};
 APIUserservice.login(userdata)
            .then((res)=>{
              console.log(res.data);
              if(res.data.role === "ADMIN"){
                localStorage.setItem("user", JSON.stringify(res.data.email));
                 history.push("/AdminProfile");
                window.location.reload();
              }else{
                localStorage.setItem("user", JSON.stringify(res.data.email));
                history.push("/");
                window.location.reload();
              }
             
             
            }).catch((err)=>{
              alert("Account does not exists!!Please Register");
              history.push("/Register");
            });   
}
    return (
    <form  onSubmit={loginInfo} style={{"margin-top":"110px"}}>
    <div class="card m-5" style={{"z-index":"3"}} >
      <div class="card-body shadow-lg bg-white rounded"> 
        <div className="Container my-4 ">
             <h1 className="mb-5">Login</h1>
             <hr/>
             <div className="row justify-content-lg-center mx-auto ">
             <div class="col-lg-4"   style={{"margin-right":"150px"}}>
                 <img src={Loginimg2}   width="100%" height="100%" /> 
              </div>
               <div className="col-lg-4 mt-2"> 
              {/* <select value={role} name="userRole" onChange={roleValue}class="form-select form-select-sm" aria-label=".form-select-sm example">
                <option value="ADMIN">Admin</option>
                <option value="CUSTOMER">Customer</option>
              </select> */}
              <div className="row justify-content-lg-center">
               <div className=" col form-check form-check-inline">
                  <input type="radio" name="userRole" onChange={roleValue} id="inlineRadio1" value="ADMIN"/>
                  <h5 className="form-check-label">Admin</h5>
               </div>
               <div className="col form-check form-check-inline" style={{"margin-left":"140px"}}>
                  <input  type="radio" name="userRole" onChange={roleValue} id="inlineRadio2" value="CUSTOMER" />
                  <h5 className="form-check-label">Customer</h5>
               </div>
               </div>
                <div className="form-group mt-4">
                    <h5>Email address</h5>
                    <input type="email" className="form-control" name="userEmail" value={email} onChange={emailValue} id="email"   placeholder="Enter email" required/>
                    {valid?<span><h5>{null}</h5></span>:<span><h6 style={{"color":"red"}} >email is not valid</h6></span>}
                </div>
                <div className="form-group">
                    <h5>Password</h5>
                    <input type="password" className="form-control" name="userPassword" value={password} onChange={passwordValue} id="password" placeholder="Enter Password" required/>
                    {validpass?<span><h5>{null}</h5></span>:<span><h6 style={{"color":"red"}}>password is not valid</h6></span>}
                </div>
                <div className="form-group form-check">
                    <input nput type="checkbox" checked={checked} onChange={setCheckedValue} className="form-check-input" id="exampleCheck1" required/>
                    <label className="form-check-label" for="exampleCheck1">Accept terms and conditons</label>
                </div>  
                <button type="submit" className="btn btn-primary" >Submit</button>
                </div>
              </div>
        </div>
       </div> 
      </div> 
    </form>
    )
}
export default Login; 