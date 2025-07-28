import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import '../css/Login.css';
import { t } from 'i18next';


const API_URL = process.env.REACT_APP_URL;

const Login = ({ isLoggedIn, onLoginSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // Redirect if the user is already logged in
    useEffect(() => {
        if (isLoggedIn) {
            navigate('/');
        }
    }, [isLoggedIn, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
             
            const response = await axios.post(`${API_URL}/login123`, { username, password });
            console.log(process.env.REACT_APP_URL);
            console.log('Response:', response);
            // Ensure response.data exists
            if (response && response.data) {
                const { token, user } = response.data; // Get token and user object
                const { username, role } = user; // Extract username and role from user object
                onLoginSuccess(token, { username, role }); // Pass token and user info
                navigate('/'); // Redirect after successful login
            } else {
                alert('Unexpected response format');
            }
        } catch (error) {
            // Handle errors and ensure accessing error.response
            if (error.response) {
                alert('Login failed: ' + error.response.data);
            } else {
                alert('Login failed: ' + error.message);
            }
        }
    };

    return (
        <form id="login_form" onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
             <br /> <br />
            <div> 
                <Link to='/forget'>{t('Forgot Password')}</Link>
            </div>
        </form>
    );
};

export default Login;