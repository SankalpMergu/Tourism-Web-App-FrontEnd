 import React, { Component } from 'react'
 import Loginimg2 from "../images/Loginimg2.jpg";
 import { withRouter,Link,Router} from 'react-router-dom';
 import APIPackageService from '../Services/APIPackageService';
 import Kerala from "../images/Kerala.jpg"
import Manali from "../images/Manali.jpg"
import Goa from "../images/Goa.jpg"
 class TourPackages extends Component {
    constructor(props){
      super(props);
      this.state={
        tours:[]
      }
    }
    viewDetails(id){
      const selectedtour = this.state.tours.filter(t => t.id === id);
     //console.log(selectedtour[0]);
     this.props.history.push({pathname:"/PackageDetails",state:selectedtour});
    } 
   
    bookTour(id){
      if(localStorage.getItem("user")!==null){
        this.props.history.push({pathname:"/BookingForm",state:id});
      }else{
       alert("Please Login to Book"); 
      }
    }

    componentDidMount(){
        APIPackageService.getAllPackages()
                 .then((res)=>{
                   this.setState({tours:res.data});
                   // console.log(res);
                 })
                 .catch((err)=>{
                    console.log(err);
                 })
    }
     render() {
         return (
        <div className="container-fluid" style={{"margin-top":"50px"}}>
            <div className="row mx-2 justify-content-center">
             {this.state.tours.map((item)=>(     
            <div class="card mr-3" style={{"width": "18rem","margin-top":"100px"}}>
             {(Manali !== item.location) ? <img class="card-img-top" src={Manali} alt="Card image cap" /> : null}
            <div class="card-body">
             
              <h6 className="text-left" style={{"font-size":"13px","color":"Red"}}>{item.packageType}</h6>
              <h5 class="card-title">{item.location}</h5>
              <p>price:{item.price}</p>
              <p>{item.daysAndNights}</p>
              <a  class="btn btn-primary mr-5" onClick={()=>this.bookTour(item.id)}>BOOK</a> 
              <button class="btn alert-danger" onClick={()=>this.viewDetails(item.id)} >More</button>
            </div>
          </div>
           ))} 
          </div>
        </div>
         )
     }
 }
 
 export default withRouter(TourPackages)
