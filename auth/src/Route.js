import React, { useContext } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthContext from './component/context/AuthContext';
import CustomerForm from './component/customers/CustomerForm';
import CustomerList from './component/customers/CustomerList';
import Customers from './component/customers/Customers';

import Navbar from './component/layout/Navbar';
import Logout from './component/Logout';
import Login from './component/Pages/Login';
import Register from './component/Pages/Register';

export default function Router() {
    const { loggedIn } = useContext(AuthContext)
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <div class="jumbotron col-md-4 m-auto border p-4 shadow mt-5">
                        <h1 class="display-4 text-center">Hello User</h1>
                        <p class="lead text-center">Hello user Please Login to Continue....</p>
                        <hr class="my-4" />
   
                        </div>
                        </Route>
                    {
                        loggedIn === false && (<>
                            <Route path="/register">
                                <Register />
                            </Route>
                            <Route path="/login">
                                <Login />
                            </Route>
                        </>)
                    }
                    {
                        loggedIn === true && (<>

                            <Route path="/Customer">
                                <Customers />
                            </Route>
                            <Route path="/logout">
                                <Logout />
                            </Route>
                        </>)
                    }

            </Switch>
        </BrowserRouter>
    )
}
