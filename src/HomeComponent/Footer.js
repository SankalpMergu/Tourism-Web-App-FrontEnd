import React from 'react'

function Footer() {
    return (
        <div>
            <footer class="page-footer font-small  bg-dark pt-4 ">       
    <div class="container">
       <div class="row  ">
        <div class=" col-lg-3 text-center text-white mt-4 mb-3 mx-auto">
           <a href="https://in.linkedin.com/ " class="icon-link linkedin fill p-3"style={{"background-color":"#fba80c","color":" white","border-radius": "50%"}}><i class="fa fa-linkedin"></i></a>
           <h4 class="mt-4 font-weight-bold">Linkedin</h4>
        </div>
        <div class=" col-lg-3 text-center text-white mt-4 mb-3 mx-auto">
            <a href=" https://twitter.com/" class="icon-link  fill p-3" style={{"background-color":"#fba80c","color":" white","border-radius": "50%"}}><i class="fa fa-twitter"></i></a>
           <h4 class="mt-4 font-weight-bold">twitter</h4>
        </div>
        <div class=" col-lg-3 text-center text-white mt-4 mb-3 mx-auto">
            <a href="https://accounts.google.com/login/signinchooser?flowName=GlifWebSignIn&flowEntry=ServiceLogin " class="icon-link  fill p-3" style={{"background-color":"#fba80c","color":" white","border-radius": "50%"}}><i class="fa fa-envelope"></i></a>
            <h4 class="mt-4 font-weight-bold">Email</h4>     
        </div>
        <div class=" col-lg-3 text-center text-white mt-4 mb-3 mx-auto">
            <a href="https://accounts.google.com/login/signinchooser?flowName=GlifWebSignIn&flowEntry=ServiceLogin " class="icon-link fill p-3" style={{"background-color":"#fba80c","color":" white","border-radius": "50%"}}><i class="fa fa-facebook fa-1x"></i></a>
            <h4 class="mt-4 font-weight-bold">facebook</h4>     
        </div>
      </div> 
    </div> 
    <div class="footer-copyright text-center py-3 text-white" style={{"font-size":"20px","font-weight":"bold"}} >Design by Sankalp Mergu
     
  </div> 
 
 </footer>
        </div>
    )
}

export default Footer
