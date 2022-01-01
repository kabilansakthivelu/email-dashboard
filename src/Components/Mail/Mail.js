import React, {useContext} from 'react';
import {AiFillMail} from 'react-icons/ai';
import {useNavigate} from 'react-router-dom';
import {ValuesContext} from '../Dashboard/Dashboard';
import './Mail.css';

const Mail = () => {

    const navigate = useNavigate();

    const logOut = () =>{
        localStorage.removeItem("currentUser");
        navigate("/");
    }

    const {mailContent} = useContext(ValuesContext);

    return (
        <>
        <div className="header">
        <AiFillMail className="mailIcon"/>
        <button className="logOutBtn" onClick={logOut}>Log out</button>
        </div>
        <div className="individualMail">
            {mailContent ? 
            (
                <div className="mailContent">
                <p><b>From: </b>{mailContent.from}</p>
                <p><b>Subject: </b>{mailContent.Subject}</p>
                <p className="content">{mailContent.content}</p>
                </div>
            )
            :
           ""
            }
        </div>
        </>
    )
}

export default Mail
