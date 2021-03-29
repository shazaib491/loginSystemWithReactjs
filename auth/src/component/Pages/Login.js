import React, { useContext, useState } from 'react'
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import { useHistory } from 'react-router';
export default function Login() {
    const [email, setEmail] = useState()
    const [password, setpassword] = useState()
    const { getLoggedIn } = useContext(AuthContext)
const history=useHistory();
    const login = async (e) => {
        try {
            e.preventDefault();
            const loginData = {
                email,
                password,
            }
            await axios.post("http://localhost:5002/auth/login", loginData)
            await getLoggedIn();
            history.push("/Customer");
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-6 m-auto">
                    <form onSubmit={login}>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" name="email" value={email} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" onChange={(e) => setpassword(e.target.value)} placeholder="*******" name="email" className="form-control" value={password} />
                        </div>

                        <input type="submit" className="btn btn-primary" value="submit" />
                    </form>
                </div>
            </div>
        </div>
    )
}
