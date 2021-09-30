import React from 'react';
import { useState } from 'react';
import { useLocation,withRouter } from 'react-router-dom';
import APIPackageService from '../Services/APIPackageService';

function BookingForm(props) {
    const email=JSON.parse(localStorage.getItem("user"));
  
   const [fromDate, setFromDate] = useState("");
   const [toDate, setToDate] = useState("");
   const [address, setaddress] = useState("");
   const location=useLocation();
  function bookRequest(e){
       e.preventDefault();
       //console.log("fromDate"+fromDate+" "+"toDate"+toDate+" "+"address"+address+"packageId"+JSON.stringify(location.state))
       let bookingDetails={packageId:location.state,fromDate:fromDate,toDate:toDate,pickUpLocation:address,userEmail:JSON.parse(localStorage.getItem("user"))}
       APIPackageService.bookTourPackage(bookingDetails)
              .then((res)=>{
                   console.log(res);
                   alert("you will be notified once the booking done");
              })
              .catch((err)=>{
                  console.log(err);
                  alert("booking Failed!!!!please try Again");
              });
   }

    return (
        <div class="card mx-5 py-2" style={{"z-index":"1","margin-top":"70px"}} >
        <div class="card-body bg-white rounded"></div>
            <h2 className="text-center">Book Your Tour</h2>
            <div className="container">
            <div class="row mt-5">
            <form  onSubmit={bookRequest}   className="col align-self-center">

                <div className="form-group text-left">
                    <label> User Email:</label>
                    <input type="text" placeholder="userName" name="email" className="form-control" readonly="true" defaultValue={email} />
                </div>

                <div className="form-group text-left">
                    <label>From Date</label>
                    <input type="date" value={fromDate} name="fromDate" className="form-control" onChange={(e)=>{setFromDate(e.target.value)}} required/>
                </div>

                <div className="form-group text-left">
                    <label>To Date</label>
                    <input type="date" value={toDate} placeholder="select the Date" name="toDate" className="form-control" onChange={(e)=>{setToDate(e.target.value)}} required/>
                </div>

                <div className="form-group text-left">
                    <label>PickUp Address</label>
                    <input type="text" value={address} placeholder="userName" name="pickUpLocation" onChange={(e)=>setaddress(e.target.value)} className="form-control" required/>
                </div>


                <button type="submit"  className="btn btn-success" >Book</button>
            </form>
            </div>
            </div>    
        </div>
    )
}
export default BookingForm