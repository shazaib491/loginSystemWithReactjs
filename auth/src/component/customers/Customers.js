import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CustomerForm from './CustomerForm'
import CustomerList from './CustomerList'

export default function Customers() {
    const [Customers, setCustomer] = useState();
    const getCustomers = async () => {
        const customeRes = await axios.get("http://localhost:5002/customer");
        setCustomer(customeRes.data)
    }
    useEffect(() => {
        getCustomers();
    }, [])
    return (
        <div>
            <div className="row">
                <div className="col-md-6 m-auto p-3">
                    <CustomerForm getCustomers={getCustomers} />
                    <CustomerList Customers={Customers} />

                </div>
                <div className="col-md-10">

                </div>
            </div>
        </div>
    )
}
