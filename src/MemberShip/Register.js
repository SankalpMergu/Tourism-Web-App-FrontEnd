import React from 'react'
import { withRouter } from 'react-router-dom';
import Registerimg from "../images/Registerimg.png" ;
import APIUserService from '../Services/APIUserService';

 class Register extends React.Component {
     constructor(props){
         super(props);
         this.state={
          userFirstName:"",
          userLastName:"",
          userEmail:"",
          userPass:"",
          userMobileNo:"",
          valid:true,
          validpass:true,
          validFirstName:true,
          validLastName:true,
          validMobileNo:true

         };
     }

      firstNameValue(event){
         this.setState({userFirstName:event.target.value});
         if(this.state.userFirstName.length < 3){
             this.setState({validFirstName:false});
         }else{
             this.setState({validFirstName:true});
         }
      }

      lastNameValue(event){
        this.setState({userLastName:event.target.value});
        if(this.state.userLastName.length < 3){
            this.setState({validLastName:false});
        }else{
            this.setState({validLastName:true});
        }
      }
     
      emailValue(event){
        this.setState({userEmail:event.target.value});
        if( this.state.userEmail.indexOf("@")<1 || this.state.userEmail.lastIndexOf(".")<this.state.userEmail.indexOf("@")+2 ){
            this.setState({valid:false});
        }else{
            this.setState({valid:true});
        } 
       console.log(this.userEmail);
      }
      passwordValue(event){
        
         this.setState({userPass: event.target.value})
         if( this.state.userPass.length<6){
            this.setState({validpass:false});
        }else{
            this.setState({validpass:true});
        } 
       }
     
       mobileNoValue(event){
        this.setState({userMobileNo: event.target.value});
        if( this.state.userMobileNo.toString().length!==9){
           this.setState({validMobileNo:false});
       }else{
           this.setState({validMobileNo:true});
       } 
       }
       RegisterInfo(e){
         e.preventDefault();
        let registerdata={firstName:this.state.userFirstName,lastName:this.state.userLastName,email:this.state.userEmail,
            password:this.state.userPass,mobileNo:this.state.userMobileNo,"role":"CUSTOMER"
        }
        APIUserService.register(registerdata)
          .then((res)=>{
            console.log(res);
            alert("Successfully Register");
            this.props.history.push("/login");
          }).catch((err)=>{
            console.log(err);
            alert("Register Failed!!! Account with this email already exists");
          });   
       }

      render() {
        
        return (
    <form onSubmit={this.RegisterInfo.bind(this)} style={{"margin-top":"70px"}}> 
     <div class="card m-5" style={{"z-index":"1"}} >
      <div class="card-body shadow-lg bg-white rounded">     
        <div class="container my-3">
        <h1 className="mb-5">Register</h1>
             <hr/>
            <div class="row justify-content-lg-center mx-auto ">
               <div class="col-6 col-md-4">
               <center>    
               <img src={Registerimg}   width="100%" height="100%" /> 
               </center>
               </div>
               <div class="col-12 col-md-8">
               <div class="row">
                    <div class="col">
                        <h5 className="text-left">First Name</h5>
                        <input type="text" name="firstName" class="form-control" value={this.state.userFirstName} onChange={this.firstNameValue.bind(this)} placeholder="First name" required/>
                        {this.state.validFirstName?<span><h5>{null}</h5></span>:<span><h6 style={{"color":"red"}}>must contain 3 characters</h6></span>}
                    </div> 
                    <div class="col">
                        <h5 className="text-left">Last Name</h5>
                        <input type="text" name="lastName" class="form-control" value={this.state.userLastName} onChange={this.lastNameValue.bind(this)} placeholder="Last name" required/>
                        {this.state.validLastName?<span><h5>{null}</h5></span>:<span><h6 style={{"color":"red"}}>must contain 3 characters</h6></span>}
                    </div>
                </div>
                <div class="row">
                    <div class="col form-group mt-4">
                        <h5 className=" text-left">Email</h5>
                        <input type="email" name="email" class="form-control" value={this.state.userEmail} onChange={this.emailValue.bind(this)}placeholder="Email" required/>
                        {this.state.valid?<span><h5>{null}</h5></span>:<span><h6 style={{"color":"red"}}>email is not valid must contain 5 characters ex:sankalp@gmail.com</h6></span>}
                    </div>
                    <div class="col form-group mt-4">
                        <h5 className="text-left">Password</h5>
                        <input type="password" name="password" class="form-control" value={this.state.userPass} onChange={this.passwordValue.bind(this)}placeholder="Password" required/>
                        {this.state.validpass?<span><h5>{null}</h5></span>:<span><h6 style={{"color":"red"}}>Must contain 6 characters,1 digit and 1 special symbol</h6></span>}
                    </div>
                </div>
                    <div class="form-group mt-1 text-left">
                        <h5>Mobile Number</h5>
                        <input type="Number" name="mobileNo" class="form-control" value={this.state.userMobileNo} onChange={this.mobileNoValue.bind(this)}placeholder="Enter the Mobile Number" required/>
                        {this.state.validMobileNo?<span><h5>{null}</h5></span>:<span><h6 style={{"color":"red"}}>Must contain 10 digits</h6></span>} 
                    </div>
                <div className="row">
                <div className=" col form-group form-check text-left">
                    <input  type="checkbox" className="form-check-input" id="exampleCheck1" required/>
                    <label className="form-check-label" for="exampleCheck1">Accept terms and conditons</label>
                </div>
                <div className="col text-right">
                     <a class=" mt-1 small" href="/Login"><h6>Have an account? Sign In</h6></a>
                </div>
                </div>
                <div>  
                <button type="submit" className="btn btn-primary" >Submit</button>
                </div>
              </div> 
            </div>
        </div>
      </div>
     </div>   
    </form>
        )
    }
}

export default withRouter(Register);
