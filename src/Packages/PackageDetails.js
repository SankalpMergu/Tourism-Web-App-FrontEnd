import React from 'react'
import { useLocation,withRouter} from 'react-router-dom';
import Kerala from "../images/Kerala.jpg"
import Manali from "../images/Manali.jpg"
import Goa from "../images/Goa.jpg"
import "../Packages/Packagedetails.css";
function PackageDetails(props) {
    const myArr = props.location.state[0].placesToBeVisited.split(",");
const location=useLocation();    
    return (
        <div className="container-fluid">
        <div class="row justify-content-lg-center bg-white" style={{"margin-top":"50px","padding-bottom":"180px"}}>
    <div class="col-lg-6  mt-4">
     <img src={Manali} alt=" package img" width="400" height="400" />
     <h5 className="mt-5">Highlights:</h5>
    </div>

    <div class="col-lg-6 mt-5">
      <h1 class="text-center">{props.location.state[0].location}</h1><br/>
      <h5 class=" text-left">Package Type:{props.location.state[0].packageType}</h5>
      <p class="text-justify">{props.location.state[0].packageDetails}</p>
      <div className="row mt-5">
        <div className="col-lg-6 text-center">
            <h5>Price:{props.location.state[0].price}</h5>
        </div>
        <div  className="col-lg-6 text-center">
             <button className="btn btn-primary"> Book Now</button>
        </div>
      </div>
    </div>
    <div className="container">
        <div className="row ml-5">
            <div className="col-lg-6">
   { myArr.map((i)=>(
    <h6 className="text-justify">{i}</h6>
    ))}
    </div>
    <div className="col-lg-6 text-left">
       <h3>Inclusions:</h3> 
        <ul>
        <li class="item"><i class="fas fa-hotel"></i>Hotels</li>
        <li class="item"><i class="fa fa-cutlery"></i>Food</li>
        <li class="item"><i class="fa fa-car"></i>Transport</li>
        <li class="item"><i class="fa fa-eye" ></i>SightSee</li>
        </ul>
        </div>   
    </div>
    
    </div>
  </div>
  </div>
    
    )
}

export default withRouter(PackageDetails)
