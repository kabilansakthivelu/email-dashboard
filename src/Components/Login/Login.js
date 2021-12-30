import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className="loginPage">

            <div className="logInPage">
            <h1 className="pageTitle">Email Dashboard</h1>

            <form className="logInForm">
            <input className="inputField" type="email" id="email" placeholder="Email address"/>
            <br />
            <input className="inputField" type="password" id="password" placeholder="Password"/>
            <br />
            <button className="signInBtn">Sign In</button>
            </form>

            </div>
        </div>
    )
}

export default Login
