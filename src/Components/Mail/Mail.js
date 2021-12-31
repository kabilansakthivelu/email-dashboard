import React from 'react';
import {AiFillMail} from 'react-icons/ai';
import {useNavigate} from 'react-router-dom';
import './Mail.css';

const Mail = ({mailContent}) => {

    const navigate = useNavigate();

    const logOut = () =>{
        localStorage.removeItem("currentUser");
        navigate("/");
    }

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
