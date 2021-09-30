import React, { Component } from 'react'
import APIPackageService from '../Services/APIPackageService';
export class Bookings extends Component {

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
                this.setState({guideName:res.data.guideId.name})

                 })
                 .catch((err)=>{
                    console.log(err);
                 });
    }

   cancelBooking(bookingId){
     APIPackageService.cancelBooking(bookingId)
       .then(res=>{
             alert("successfully cancelled booking")
             window.location.reload();
       })
       .catch(err=>{
             alert("failed to cancel the booking");
       });
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
      <th scope="col">Cancel</th>
    </tr>
  </thead>
  <tbody>
  {this.state.tourBookings.map(item => ( 
    <tr>
      <th scope="row">1</th>
      <td>{item.packageId.location}</td>
      <td>{item.fromDate}</td>
      <td>{item.toDate}</td>
      {(!item.guideId ? (<td >{this.state.guideName}</td>) : (<td >{item.guideId.name}</td>))}
      <td>{item.status}</td>
      <button className="btn btn-danger my-1 p-2" onClick={()=>this.cancelBooking(item.id)}>Cancel</button>
    </tr>
    ))}
  </tbody>
</table>
            </div>
        )
    }
}

export default Bookings
