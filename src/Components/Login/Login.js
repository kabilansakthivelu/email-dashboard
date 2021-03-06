import React, {useRef, useEffect} from 'react';
import {user1, user2, userDetails} from '../../users';
import {useNavigate} from 'react-router-dom';
import './Login.css';

const Login = () => {

    const emailRef = useRef();
    const passwordRef = useRef();

    const navigate = useNavigate();

    //Login function where logged in user details are stored in local storage

    const login = (e) =>{
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const user = {
            email,
            password,
        }
        if(JSON.stringify(user) === JSON.stringify(user1)){
            localStorage.setItem("currentUser", "user1");
            localStorage.setItem("currentUserEmail", "testuser1@gmail.com");
            navigate("/dashboard");
        }
        else if(JSON.stringify(user) === JSON.stringify(user2)){
            localStorage.setItem("currentUser", "user2");
            localStorage.setItem("currentUserEmail", "testuser2@gmail.com");
             navigate("/dashboard");
        }
        else{
            alert("Please enter valid credentials")
        }
    }

    // Setting data to local storage when logged in for the first time

    useEffect(()=>{
        if((localStorage.getItem("user1") === null) && (localStorage.getItem("user2") === null)){
            localStorage.setItem("user1", JSON.stringify(userDetails));
            localStorage.setItem("user2", JSON.stringify(userDetails));
        }
    })

    return (
        <div className="loginPage">

            <div className="logInSection">
            <h1 className="pageTitle">Email Dashboard</h1>

            {/* Login form */}

            <form className="logInForm" onSubmit={login}>
            <input className="inputField" type="email" id="email" placeholder="Email address" ref={emailRef}/>
            <br />
            <input className="inputField" type="password" id="password" placeholder="Password" ref={passwordRef}/>
            <br />
            <button className="signInBtn">Sign In</button>
            </form>

            {/* Test Credentials section */}

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
