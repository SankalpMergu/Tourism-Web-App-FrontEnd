import React, { Component } from 'react'
import APIPackageService from '../Services/APIPackageService';
import {withRouter} from "react-router-dom";
 class ManageBookings extends Component {
    constructor(props){
        super(props);
        this.state={
          tourBookings:[],
          guideName:"NotAssigned"
        }
       
      }


    componentDidMount(){
        APIPackageService.getBookings()
                 .then((res)=>{
                   console.log(res.data);
                this.setState({tourBookings:res.data});
                 })
                 .catch((err)=>{
                    console.log(err);
                 });
    }

    updateBooking(bookingid){
           this.props.history.push({pathname:"/UpdateBookings",state:bookingid});
    }



    render() {
        return (
            <div>
                <h3 style={{"margin-top":"100px"}}>Your Bookings</h3>
                <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">Srno</th>
      <th scope="col">Tour</th>
      <th scope="col">fromDate</th>
      <th scope="col">ToDate</th>
      <th scope="col">Guide</th>
      <th scope="col">bookingStatus</th>
    </tr>
  </thead>
  <tbody>
  {this.state.tourBookings.map(item => (  
    <tr>
      <th scope="row">{item.id}</th>
      <td>{item.packageId.location}</td>
      <td>{item.fromDate}</td>
      <td>{item.toDate}</td>
      {(!item.guideId ? (<td >{this.state.guideName}</td>) : (<td >{item.guideId.name}</td>))}
      <td>{item.status}</td>
      <td><button className="btn btn-success" onClick={()=>this.updateBooking(item.id)}>Update</button></td>
    </tr>
    ))}
  </tbody>
</table>
            </div>
        )
    }
}

export default withRouter(ManageBookings)
