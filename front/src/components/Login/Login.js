import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Login.css"

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('https://backend-finalproject-fb9a.onrender.com/api/client/auth/login', { email, password });
            console.log('HAYDA',response.data.clientId);
            navigate('/'); // Redirect to homepage on successful login
            localStorage.setItem('test', response.data.clientId)
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="containerlogin">
        <div className='eee'>
            <form onSubmit={handleSubmit} className="form-signin">
                <h2 className="form-signin-heading">Please sign in</h2>
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                <p>Don't have an account? <a href="/Signup">Create one</a></p>

            </form>
        </div>
        </div>
    );
}

export default Login;