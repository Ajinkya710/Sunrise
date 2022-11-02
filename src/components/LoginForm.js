import React , { useEffect } from "react";
import { Link } from 'react-router-dom';
import logo from "../images/sunrise-logo.png";
import headerimg from '../images/CI_Images/CI_header.jpg';
import './LoginForm.css'
const LoginForm = () => {
    useEffect(() => {
        document.title = "Sunrise Login"
     }, []);
    return (
        <>
        <Link to="/">
          <img id='logo_link' src={logo} height="120px" width="330px" alt="Home" />
        </Link>
        <img id='loginheader' src={headerimg} alt="loginheader" />
            <div className="login-form">
                <div className="form-box solid">
                    <form>
                    <h2 className="login-text">Member Access</h2>
                    <div>
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        className="login-box"
                        required 
                    /></div>
                    <div>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        className="login-box" 
                        required
                    /></div>
                    <input type="checkbox" id="checkbox" name="remember" />
                    <label for="checkbox"> Remember me</label>
                    <button type="submit" value="LOGIN" className="login-btn">LOG IN</button>
                    </form>
                </div>
            </div>
        </>
    );
} 

export default LoginForm;