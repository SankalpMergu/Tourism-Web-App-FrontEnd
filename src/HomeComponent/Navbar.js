import{Link} from 'react-router-dom';
import React from 'react';
import '../../src/Navbar.css'
import {Route} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import HomePage from './HomePage';
import About from './About';
import Contact from './Contact';
import Login from '../MemberShip/Login';
import Register from '../MemberShip/Register';
import APIUserService from '../Services/APIUserService';
import AdminProfile from '../profiles/AdminProfile';
import TourPackages from '../Packages/TourPackages';
import PackageDetails from '../Packages/PackageDetails';
import EditUser from "../MemberShip/EditUser"
import BookingForm from '../Packages/BookingForm';
import Bookings from '../Packages/Bookings';

class Navbar extends React.Component{

  constructor(props){
    super(props)
    this.state={
     //showInfo:true,
      user:JSON.parse(localStorage.getItem("user"))
    }
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    if(JSON.parse(localStorage.getItem("user"))==="someone@gmail.com"){
    this.setState({
      showInfo:true,
      loginInfo:false,
      regInfo:false,
      showBookings:false,
      packInfo:false,
      showBook:false
    });
  }else if(JSON.parse(localStorage.getItem("user"))!==null ){
    this.setState({
      showInfo:true,
      loginInfo:false,
      regInfo:false,
      showBookings:true,
      packInfo:true,
      showBook:true
    });
  }else{
    this.setState({
      showInfo:false,
      loginInfo:true,
      regInfo:true,
      showBookings:true,
      packInfo:true,
      showBook:false
    });
  }
  }

  handleLogout(){
    APIUserService.logout();
    this.setState({showInfo:false,
      loginInfo:true,
      regInfo:true,
      showBookings:true,
      packInfo:true,
    });
  }

  viewDetails(){
   window.location.href="/EditUser";
  }
render(){
    return (
      <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <Link className="navbar-brand text-white" to="#">Travelholic</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link mr-3 text-white text-weight-bold"  style={{ display: this.state.showBookings ? "block" : "none" }} to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mr-3 text-white text-weight-bold"  style={{ display: this.state.showBookings ? "block" : "none" }} to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mr-3 text-white text-weight-bold"  style={{ display: this.state.showBookings ? "block" : "none" }}to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mr-3 text-white text-weight-bold" style={{ display: this.state.loginInfo? "block" : "none" }}to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mr-3 text-white text-weight-bold" style={{ display: this.state.regInfo ? "block" : "none" }} to="/register">Register</Link>
          </li>
           <li className="nav-item">
            <Link className="nav-link mr-3 text-white text-weight-bold" style={{ display: this.state.packInfo ? "block" : "none" }} to="/TourPackages">Packages</Link>
          </li> 
          <li className="nav-item">
            <Link className="nav-link mr-3 text-white text-weight-bold active"  style={{ display: this.state.showBook ? "block" : "none" }} to="/Bookings">Bookings</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mr-3 text-white text-weight-bold active" onClick={this.handleLogout} style={{ display: this.state.showInfo ? "block" : "none" }} to="/">Logout</Link>
          </li>
          <li className="nav-item">
            <h6 className="nav-link mr-3 text-white text-weight-bold active" style={{ display: this.state.showInfo ? "block" : "none" }} onClick={this.viewDetails}><a>{this.state.user}<i class="fa fa-user"></i></a></h6>
          </li>
          
        </ul>
      </div>
    </nav>
    
             <Route exact path="/" component={HomePage}>
               <HomePage />
             </Route>
              
             <Route exact path="/about">
               <About />
              </Route>
    
             <Route exact path="/contact">
                <Contact />
              </Route>
    
              <Route exact path="/login" component={Login}>
                <Login />
             </Route>
             <Route exact path="/register" component={Register}>
                <Register />
             </Route>
               <Route exact path="/AdminProfile" component={AdminProfile}>
                <AdminProfile />
             </Route>
             <Route exact path="/PackageDetails" component={PackageDetails}>
                 <PackageDetails />
              </Route>
              <Route exact path="/EditUser" component={EditUser}>
                 <EditUser />
              </Route>  
              <Route exact path="/TourPackages" component={TourPackages}>
                 <TourPackages />
              </Route>
              <Route exact path="/BookingForm" component={BookingForm}>
                 <BookingForm />
              </Route>

              <Route exact path="/Bookings" component={Bookings}>
                 <Bookings/>
              </Route> 
              
              </Router>

           );
        }
}
export default Navbar;