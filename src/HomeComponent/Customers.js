import React from 'react';
import data from '../data/orders.json';
 
const Customers = () =>{
   var customers=data;
    return(
        
        <div>
            
            <table class="table table-dark">
                    <thead>
                        <tr>
                        <th scope="col">id</th>
                        <th scope="col">customer</th>
                        <th scope="col">orderdate</th>
                        <th scope="col">amount</th>
                        <th scope="col">status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        customers.map((item)=>( 
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.customer}</td>
                                    <td>{item.orderdate}</td>
                                    <td>{item.amount}</td>
                                    <td>{item.status}</td>
                                    
                                     
                                </tr>
                        ))
                        }
                    </tbody>
            </table>             
                
        </div>
    );
}

export default Customers;