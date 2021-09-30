import React, { Component } from 'react'
import {withRouter} from "react-router-dom";
import APIGuideService from '../Services/APIGuideService';
import APIPackageService from '../Services/APIPackageService';
class UpdateBookings extends Component {
   constructor(props){
       super(props);
       this.state={
           guides:[],
           status:"PENDING",
           guideid:""
       }
   }
   
   componentDidMount(){
    APIGuideService.getGuides()
       .then((res)=>{
           console.log(res);
           this.setState({guides:res.data});
       })
       .catch((err)=>{
           console.log(err)
       });
}
  
       saveUpdate(e){
           e.preventDefault();
           let updateBookingDetails={bookingId:this.props.location.state,guideId:parseInt(this.state.guideid),bookingStatus:this.state.status}
           console.log(updateBookingDetails);
           APIPackageService.updateBooking(updateBookingDetails)
               .then(res=>{
                   alert("successfully updated the details");
               })
               .catch(err=>{
                      
                   console.log(err);
                   alert("failed to update the details!!! try Again");
               });
       }

    render() {
        console.log(this.props.location.state)
        console.log(this.state.guideid+" "+this.state.status);
        
        return (
            <div class="card mx-5 py-2" style={{"z-index":"1","margin-top":"70px"}} >
            <div class="card-body bg-white rounded"></div>
                <h2 className="text-center">Edit User</h2>
                <div className="container">
                <div class="row mt-5">
                <form className="col align-self-center">

                    <div className="form-group text-left">
                        <label>BookingId</label>
                        <input type="text" placeholder="userName" name="bookingId" value={this.props.location.state}className="form-control" readonly="true"/>
                    </div>

                    <div className="form-group text-left">
                    <label>Guides</label>
                    <select value={this.state.guideid} name="guideId" onChange={(e)=>this.setState({guideid:e.target.value})}  class="form-select form-select-sm" aria-label=".form-select-sm example">
                   { this.state.guides.map( guide=>(
                            
                           <option value={guide.id}>{guide.name}</option>
                   ))}
                     </select>
                     </div>
                     <div className="form-group text-left">
                    <label>Status</label>
                     <select value={this.state.status} name="bookingStatus" onChange={(e)=>this.setState({status:e.target.value})}class="form-select form-select-sm" aria-label=".form-select-sm example">
                           <option value="PENDING">PENDING</option>
                           <option value="APPROVED">APPROVED</option>
                           <option value="CANCELLED">CANCELLED</option>
                     </select> 
                      </div>
                      

                    <button className="btn btn-success" onClick={this.saveUpdate.bind(this)} >Update</button>
                </form>
                </div>
                </div>    
            </div>
        )
    }
}

export default withRouter(UpdateBookings)
