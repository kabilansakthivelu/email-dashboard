import React, {useContext} from 'react';
import {AiFillMail} from 'react-icons/ai';
import {useNavigate} from 'react-router-dom';
import {ValuesContext} from '../Dashboard/Dashboard';
import './Mail.css';

const Mail = () => {

    const navigate = useNavigate();

    // Logout function

    const logOut = () =>{
        localStorage.removeItem("currentUser");
        localStorage.removeItem("currentUserEmail");
        navigate("/");
    }

    const {mailContent, inboxData, folderName} = useContext(ValuesContext);

    // Unread count section

    let unreadCount;
    
    if(inboxData){
    unreadCount = inboxData.reduce((total, item)=>{
        if(item.isRead === false){
            total += 1;
        }
        return total;
    }, 0)
    }

    return (
        <>

        {/* Header section */}

        <div className="header">
        <div className="unreadMails">
        <AiFillMail className="mailIcon"/>{(unreadCount > 0) && <sup className="unreadMailCount">{unreadCount}</sup> }
        </div>
        <button className="logOutBtn" onClick={logOut}>Log out</button>
        </div>


        {/* Individual Email display section */}

        <div className="individualMail">
            {mailContent ? 
            (
                <div className="mailContent">
                <p><b>{(folderName === "Inbox") ? "From: " : "To: " }</b>{mailContent.user}</p>
                <p><b>Subject: </b>{mailContent.Subject}</p>
                <p className="content">{mailContent.content}</p>
                </div>
            )
            :
           <p className="placeHolderInMailPage">Please select a mail from the left panel to view its content</p>
            }
        </div>
        </>
    )
}

export default Mail
