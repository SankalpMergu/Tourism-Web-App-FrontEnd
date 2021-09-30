import React from 'react';
import ApiContactService from '../Services/ApiContactService';
import "../HomeComponent/Contact.css";
class Contact extends React.Component{
    
    constructor(props){
        super(props);
        this.state ={
            name:'',
            email:'',
            subject:''   
        }
        //this.saveContact = this.saveContact.bind(this);
    }
      userValue(event){
              this.setState({name:event.target.value});
              console.log(this.state.name);     
       }
       userEmail(event){
            this.setState({email:event.target.value});
            console.log(this.state.email);     
        }
        userSubject(event){
            this.setState({subject:event.target.value});
            console.log(this.state.subject);     
        }
    saveContact = (e) => {
        e.preventDefault();
        let enquiryData = {name: this.state.name, email:this.state.email,subject:this.state.subject};
        ApiContactService.addContactUs(enquiryData)
            .then(res => {
                alert("Enquiry details sent successfully ! we will contact you soon !");
            })
            .catch(err => {
                alert("data post failed ");
            });
    }
  

    render(){
    return(
    <div style={{"margin-top":"100px"}}>
        <section className="contact">
             <div className="grid d-flex text-center" style={{"marginLeft":"350px"}}>
                <div>
                <h4>Phone</h4>
                <p>
                +91 7058 749 226<br></br>
                +91 8788 011 663
                </p>
                </div>

                <div>
                <h4>Email</h4>
                <p>
                swapnildhanawate@gmail.com
                </p>
                <p>
                sankalpmergu97@@gmail.com
                </p>
                </div>

                <div>
                <h4>Address</h4>
                <p>
                Pune, MH, India.
                </p>
                </div>
            </div>


            <div>
                <h1 className="text-center">Get in Touch</h1>
                <form className="form"> 
                <div className="form-group">
                    <input type="text" 
                        placeholder="Enter your full name" 
                        name="name"
                        className="form-control" value={this.state.name} 
                        onChange={this.userValue.bind(this)}/>
                </div>  
                <div className="form-group">
                    <input type="email" 
                        placeholder="Enter your email" 
                        name="email"
                        className="form-control" 
                        value={this.state.email} 
                        onChange={this.userEmail.bind(this)}/>
                </div>
                <div className="form-group">
                    <textarea type="text" 
                        placeholder="Enter your subject" 
                        name="subject"
                        className="form-control" 
                        value={this.state.subject} 
                        onChange={this.userSubject.bind(this)}/>
                </div>

                <button className="btn btn-success" onClick={this.saveContact}>SUBMIT</button>
            </form>        
    </div>
    </section>
    </div>
    );
    }
}
export default Contact;