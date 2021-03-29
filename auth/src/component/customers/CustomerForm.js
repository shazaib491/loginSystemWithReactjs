import axios from 'axios';
import React, { useState } from 'react'

export default function CustomerForm({getCustomers}) {
    const [name, Setname] = useState();
    const savedCustomers = async (e) => {
        e.preventDefault();
        const customers = {
            name
        }
            await axios.post("http://localhost:5002/customer", customers)
            getCustomers();
    }       
    return (
        <div>
            <form onSubmit={savedCustomers}>
                <div className="form-group">
                    <label>Customer Name</label>
                    <input type="text" onChange={(e) => Setname(e.target.value)} className="form-control" placeholder="Enter Customer Name" />
                </div>
                <input type="submit" className="btn btn-primary" />
            </form>
        </div>
    )
}
