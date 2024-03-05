import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Signup.css"

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            await axios.post('https://backend-finalproject-fb9a.onrender.com/api/client/register', { email, password, confirmPassword, phoneNumber, address });
            navigate('/Login'); // Redirect to login page on successful registration
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container1">
        <div className='aaa'>
            <form onSubmit={handleSubmit} className="form-signup">
                <h2 className="form-signup-heading">Please sign up</h2>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="password" id="inputConfirmPassword" className="form-control" placeholder="Confirm Password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <input type="text" id="inputPhoneNumber" className="form-control" placeholder="Phone Number" required value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                <input type="text" id="inputAddress" className="form-control" placeholder="Address" required value={address} onChange={(e) => setAddress(e.target.value)} />
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
            </form>
            </div>
        </div>
    );
}

export default Signup;