import React, { Component } from 'react'
import APIGuideService from '../Services/APIGuideService';
import APIUserService from '../Services/APIUserService';

 class Guidepage extends Component {
    constructor(props){
        super(props);
        this.state={
            guides:[]
        }
    }

    componentDidMount(){
        APIGuideService.getGuides()
           .then((res)=>{
               console.log(res);
               this.setState({guides:res.data});
           })
           .catch((err)=>{
               console.log(err)
           });
    }


    deleteUser(guideId) {
        APIGuideService.deleteGuide(guideId)
           .then(res => {
               alert("sucessfully deleted the guide");
               this.setState({guides: this.state.guides.filter(guide => guide.id !== guideId)});
            //    window.location.reload();
           })

    }


    render() {
        return (
            <div>
                <table class="table table-dark">
                <thead>
                    <tr>
                    <th scope="col">srno</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">MobileNo</th>
                    <th>Location Known</th>
                    </tr>
                </thead>
                <tbody>
                {
                            this.state.guides.map( 
                        guide =>
                                    <tr key={guide.id}>
                                        <td>{guide.id}</td>
                                        <td>{guide.name}</td>
                                        <td>{guide.email}</td>
                                        <td>{guide.mobile}</td>
                                        <td>{guide.locationKnown}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.deleteUser(guide.id)}> Delete</button>
                                        </td>
                                    </tr>
                            )
                        }
                </tbody>
                </table>
            </div>
        )
    }
}

export default Guidepage
