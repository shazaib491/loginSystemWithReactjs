import axios from 'axios'
import React, { useContext } from 'react'
import { useHistory } from 'react-router';
import AuthContext from './context/AuthContext';

export default function Logout() {
    const history = useHistory();
    const { getLoggedIn } = useContext(AuthContext)
    async function logout() {
        await axios.get("http://localhost:5002/auth/logout");
        await getLoggedIn();
        history.push("/");
    }
    return (
        <div>
            <button className="btn btn-info" onClick={logout} >Logout</button>
        </div>
    )
}
