import React, { useContext, useState } from 'react'
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import { useHistory } from 'react-router';
export default function Register() {
    const [email, setEmail] = useState()
    const [password, setpassword] = useState()
    const [passwordVerfiy, setpasswordVerfiy] = useState()
    const history=useHistory();
    const { getLoggedIn } = useContext(AuthContext)
    const registered = async (e) => {
        e.preventDefault();
        try {
            const registerData = {
                email,
                password,
                passwordVerfiy
            }
            await axios.post("http://localhost:5002/auth/register", registerData)
            await getLoggedIn();
            history.push("/");
        } catch (error) {

        }
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-6 m-auto">
                    <form onSubmit={registered}>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" name="email" value={email} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" onChange={(e) => setpassword(e.target.value)} placeholder="*******" name="email" className="form-control" value={password} />
                        </div>
                        <div className="form-group">
                            <label>PasswordVerfiy</label>
                            <input type="password" onChange={(e) => setpasswordVerfiy(e.target.value)} placeholder="*******" value={passwordVerfiy} name="email" className="form-control" />
                        </div>
                        <input type="submit" className="btn btn-primary" value="submit" />
                    </form>
                </div>
            </div>
        </div>
    )
}
