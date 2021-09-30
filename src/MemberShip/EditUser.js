import React from 'react'
import APIUserService from '../Services/APIUserService';


class EditUser extends React.Component{

    constructor(props){
        super(props);
        this.state ={
          email:"",
          firstName:"",
          lastName:"",
          password:"",
          mobileNo:""
        }
        this.saveUser = this.saveUser.bind(this);
        this.loadUser = this.loadUser.bind(this);
    }

    componentDidMount() {
        this.loadUser();
    }

    loadUser() {
        APIUserService.fetchUserById(JSON.parse(localStorage.getItem("user")))
            .then((res) => {
                let user = res.data;
                console.log(user);
                this.setState({
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                password:user.password,
                mobileNo: user.mobileNo,
                })
            });
    }

    onChange = (e) =>{
        this.setState({ [e.target.name]: e.target.value });}

    saveUser(e){
        e.preventDefault();
        let user = {email: this.state.email, password: this.state.password, firstName: this.state.firstName, lastName: this.state.lastName, mobileNo: this.state.mobileNo};
        console.log(user);
        APIUserService.editUser(user)
            .then((res) => {
                alert("your data updated successfully!!");
            }).catch((err)=>{
                   console.log(err);
            });
    
        }
    render(){
        return (
            <div class="card mx-5 py-2" style={{"z-index":"1","margin-top":"70px"}} >
            <div class="card-body bg-white rounded"></div>
                <h2 className="text-center">Edit User</h2>
                <div className="container">
                <div class="row mt-5">
                <form className="col align-self-center">

                    <div className="form-group text-left">
                        <label> User Email:</label>
                        <input type="text" placeholder="userName" name="email" className="form-control" readonly="true" defaultValue={this.state.email}/>
                    </div>

                    <div className="form-group text-left">
                        <label>First Name:</label>
                        <input placeholder="First Name" name="firstName" className="form-control" value={this.state.firstName} onChange={this.onChange}/>
                    </div>

                    <div className="form-group text-left">
                        <label>Last Name:</label>
                        <input placeholder="Last name" name="lastName" className="form-control" value={this.state.lastName} onChange={this.onChange}/>
                    </div>

                    <div className="form-group text-left">
                        <label>Password:</label>
                        <input type="password" placeholder="password" name="password" className="form-control" value={this.state.password} onChange={this.onChange}/>
                    </div>

                    <div className="form-group text-left">
                        <label>Mobile Number:</label>
                        <input type="number" placeholder="mobile Number" name="mobileNo" className="form-control" value={this.state.mobileNo} onChange={this.onChange}/>
                    </div>

                    <button className="btn btn-success" onClick={this.saveUser}>Update</button>
                </form>
                </div>
                </div>    
            </div>
            
        )
    }
}

export default EditUser;