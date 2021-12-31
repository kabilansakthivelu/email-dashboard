import React from 'react';
import Navbar from '../Navbar/Navbar';
import EmailMenu from '../EmailMenu/EmailMenu';
import Login from '../Login/Login';

const Dashboard = () => {

    const currentUser = localStorage.getItem("currentUser");

    if(currentUser){
        return (
        <div>
            <Navbar />
            <EmailMenu />
        </div>
        )
    }
    else{
        return <Login />
    }
}

export default Dashboard
