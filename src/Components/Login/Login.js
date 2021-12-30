import React, {useRef, useEffect} from 'react';
import {user1, user2, userDetails} from '../../users';
import {useNavigate} from 'react-router-dom';
import './Login.css';

export let currentUser;

const Login = () => {

    const emailRef = useRef();
    const passwordRef = useRef();

    const navigate = useNavigate();

    const login = (e) =>{
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const user = {
            email,
            password,
        }
        if(JSON.stringify(user) === JSON.stringify(user1)){
            currentUser = "user1";
            navigate("/dashboard")
        }
        else if(JSON.stringify(user) === JSON.stringify(user2)){
            currentUser = "user2";
        }
        else{
            alert("Please enter valid credentials")
        }
    }

    useEffect(()=>{
    localStorage.setItem("user1", JSON.stringify(userDetails));
    localStorage.setItem("user2", JSON.stringify(userDetails));
    })

    return (
        <div className="loginPage">

            <div className="logInSection">
            <h1 className="pageTitle">Email Dashboard</h1>

            <form className="logInForm" onSubmit={login}>
            <input className="inputField" type="email" id="email" placeholder="Email address" ref={emailRef}/>
            <br />
            <input className="inputField" type="password" id="password" placeholder="Password" ref={passwordRef}/>
            <br />
            <button className="signInBtn">Sign In</button>
            </form>

            <div className="testCredentialsSection">
            <h1 className="sectionTitle">Test credentials:</h1>
            <p className="userDetails">User 1:</p>
            <p>Email ID: testuser1@gmail.com</p>
            <p>Password: Testuser@1</p>
            <p className="userDetails">User 2:</p>
            <p>Email ID: testuser2@gmail.com</p>
            <p>Password: Testuser@2</p>
            </div>

            </div>
        </div>
    )
}

export default Login
