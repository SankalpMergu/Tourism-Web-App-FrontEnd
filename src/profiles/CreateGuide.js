import React, { Component } from 'react';
import APIGuideService from '../Services/APIGuideService';
class createGuide extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name:'',
            email:'',
            mobile:'',
            travelLocation:""
        } 
        
    }


    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    changeMobileHandler= (event) => {
        this.setState({mobile: event.target.value});
    }
   
    saveGuide(e){
        e.preventDefault();
        let guide={name:this.state.name,email:this.state.email,mobile:this.state.mobile,locationKnown:this.state.travelLocation};
        APIGuideService.createGuide(guide)
           .then((res)=>{
                console.log(res);
                alert("successfully added the Guide");
           })
           .catch((err)=>{
                console.log(err);
                alert("failed to add guide");
           });
    }


    render() {
        return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="card col">
                        <div className = "card-body">
                            <h3>Add Guide</h3> 
                            <form className="mt-4">
                               <div className="form-group">
                                    <label> Full Name: </label>
                                    <input placeholder="Full Name" name="name" className="form-control"
                                        value={this.state.name} onChange={this.changeNameHandler} required/>
                                </div> 

                                <div className="form-group">
                                    <label> Email Address: </label>
                                    <input placeholder="Email Address" name="email" className="form-control"
                                        value={this.state.email} onChange={this.changeEmailHandler} required/>
                                </div> 

                                <div className="form-group">
                                    <label> Contact Number: </label>
                                    <input placeholder="Contact Number" name="mobile" className="form-control"
                                        value={this.state.mobile} onChange={this.changeMobileHandler} required/>
                                </div> 

                                <div className="form-group">
                                    <label> Travel Location: </label>
                                    <input placeholder="location Your familiar with" name="locationKnown" className="form-control" value={this.state.travelLocation}
                                       onChange={(e)=>this.setState({travelLocation:e.target.value})} required/>
                                </div> 


                                <button className="btn btn-success" onClick={this.saveGuide.bind(this)}>Add Guide</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
        );
    }
}

export default createGuide;