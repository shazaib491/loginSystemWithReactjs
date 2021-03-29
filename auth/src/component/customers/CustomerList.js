import React from 'react';
export default function CustomerList({ Customers }) {
    
 function renderCustomers(){
    return Customers.map((customers,index)=>(
        <li class="list-group-item"  key={index} >{customers.name}</li>
    ))
}
    return (
        <div>
            <ul class="list-group mt-5">
                {Customers && ( renderCustomers())}        
            </ul>
        </div>
    )
}
