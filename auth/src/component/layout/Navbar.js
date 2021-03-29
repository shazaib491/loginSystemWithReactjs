import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext';
import Logout from '../Logout';

export default function Navbar() {
    const { loggedIn } = useContext(AuthContext)
    console.log(loggedIn);
    return (
        <div>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" to="/" >Home</Link>
                            </li>
                            {
                                loggedIn === false && (<>
                                    <li class="nav-item">
                                        <Link class="nav-link " to="/register" >register</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link " to="/login" >login</Link>
                                    </li>
                                </>)
                            }{
                                loggedIn === true && (<>
                                    <li class="nav-item">
                                        <Link class="nav-link " to="/Customer" >Customer</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Logout />
                                    </li>
                                </>)
                            }


                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
