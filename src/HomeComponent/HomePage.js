import React from 'react';
import { useHistory } from 'react-router-dom';
import homeimg1 from "../images/homeimg1.jpeg";
import homeimg5 from "../images/homeimg5.jpeg";
import homeimg6 from "../images/homeimg6.jpeg";
import Goa from "../images/Goa.jpg";
import Munnar_Cochin from "../images/Munnar_Cochin.jpg"
import Mysore from "../images/Mysore.jpg"
import OurServices from './OurServices';
import Footer from './Footer';
function HomePage(){
  const history=useHistory();
    return(
      <div>
        <div className="container-fluid">
          <div id="carouselExampleIndicators h-20" class="carousel slide mx-4" style={{"marginTop":"70px"}} data-ride="carousel" >
  <ol class="carousel-indicators">
    <li  data-slide-to="0" class="active"></li>
    <li  data-slide-to="1"></li>
    <li  data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner ">
    <div class="carousel-item active">
      <img class="d-block w-100 " style={{"height":"450px"}} src={homeimg1} alt="First slide" />
      <div class="carousel-caption d-none d-md-block" style={{"margin-bottom":"130px"}}>
    <h2>Explore Your Journey</h2>
    <button className="btn btn-primary">Book</button>
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" style={{"height":"450px"}} src={homeimg5} alt="Second slide" />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" style={{"height":"450px"}} src={homeimg6} alt="Third slide" />
    </div>
  </div>
  <a class="carousel-control-prev"  role="button" data-slide="prev">
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" role="button" data-slide="next">
    <span class="sr-only">Next</span>
  </a>
</div>
</div>
<h1 className="text-center mt-5">Popular Tours</h1>
<div className="container mt-2">
            <div className="row  justify-content-center" style={{"margin-left":"50px"}}> 
            <div className="col-lg-4">  
            <div class="card mr-3" style={{"width": "18rem","margin-top":"30px"}}>
            <img class="card-img-top" src={Munnar_Cochin} alt="Card image cap" />
            <div class="card-body">
             
              <h6 className="text-left" style={{"font-size":"13px","color":"Red"}}>Couples</h6>
              <h5 class="card-title">Munnar Cochin</h5>
              <p>price:30000</p>
              <p>6 Days 3 Cities</p>
              <a  class="btn btn-primary mr-5">BOOK</a> 
              <button class="btn alert-danger">More</button>
            </div>
          </div>
          </div>
          <div className="col-lg-4">  
            <div class="card mr-3" style={{"width": "18rem","margin-top":"30px"}}>
            <img class="card-img-top" src={Mysore} alt="Card image cap" />
            <div class="card-body">
             
              <h6 className="text-left" style={{"font-size":"13px","color":"Red"}}>packgetype:Couples</h6>
              <h5 class="card-title">Mysore</h5>
              <p>price: 40000</p>
              <p>7 Days 3 Cities</p>
              <a  class="btn btn-primary mr-5">BOOK</a> 
              <button class="btn alert-danger">More</button>
            </div>
          </div>
          </div>
          <div className="col-lg-4">  
            <div class="card mr-3" style={{"width": "18rem","margin-top":"30px"}}>
            <img class="card-img-top" src={Goa} alt="Card image cap" />
            <div class="card-body">
             
              <h6 className="text-left" style={{"font-size":"13px","color":"Red"}}>Solo</h6>
              <h5 class="card-title">Goa</h5>
              <p>price: 8000</p>
              <p>6Days and 5Night</p>
              <a  class="btn btn-primary mr-5">BOOK</a> 
              <button class="btn alert-danger">More</button>
            </div>
          </div>
          </div>
          </div>
        </div>
        <h1 className="text-center mt-5">Our Services</h1>
       <OurServices />
       <Footer />
      </div>    
    );
  }
  export default HomePage;