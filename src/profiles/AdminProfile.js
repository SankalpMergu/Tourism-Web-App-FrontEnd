import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Bookingpage from './ManageBookings';
import CreateGuide from "./CreateGuide";
import Guidepage from './Guidepage';
import UpdateBookings from './UpdateBookings';
class AdminProfile extends Component {
    render() {
        return (
            <div>
              <center>
              <marquee direction="right"><h3 style={{"margin-top":"70px"}}>Welcome to Admin Page</h3></marquee>
              <Router>
              <div className="d-flex h5 justify-content-center mt-2">    
              <Link className="nav-link mr-3 text-white text-weight-bold" to="/Bookingpage"><span style={{"background-color":"Blue","padding":"5px"}}>ManageBooking</span></Link>
              <Link className="nav-link mr-3 text-white text-weight-bold" to="/Guidepage"><span style={{"background-color":"Blue","padding":"5px"}}>Guides</span></Link> 
              <Link className="nav-link mr-3 text-white text-weight-bold" to="/CreateGuide"><span style={{"background-color":"Blue","padding":"5px"}}>CreateGuide</span></Link> 
              </div>
              <Route exact path="/Bookingpage">
               <Bookingpage />
             </Route>
             <Route exact path="/Guidepage">
               <Guidepage />
             </Route>
             <Route exact path="/CreateGuide">
               <CreateGuide />
             </Route>
             <Route exact path="/UpdateBookings">
               <UpdateBookings />
             </Route> 
             </Router> 

              </center>
            </div>
        )
    }
}

export default AdminProfile
