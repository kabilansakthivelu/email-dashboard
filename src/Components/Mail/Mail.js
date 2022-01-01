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

    const {mailContent, inboxData} = useContext(ValuesContext);

    let unreadCount;
    
    if(inboxData){
    unreadCount = inboxData.reduce((total, item)=>{
        if(item.isRead === false){
            total += 1;
        }
        return total;
    }, 0)
    }

    console.log(unreadCount);

    return (
        <>
        <div className="header">
        <div className="unreadMails">
        <AiFillMail className="mailIcon"/> <sup className="unreadMailCount">{unreadCount}</sup>
        </div>
        <button className="logOutBtn" onClick={logOut}>Log out</button>
        </div>
        <div className="individualMail">
            {mailContent ? 
            (
                <div className="mailContent">
                <p><b>From: </b>{mailContent.user}</p>
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
