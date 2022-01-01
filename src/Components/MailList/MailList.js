import React, {useState, useContext, useEffect} from 'react';
import Mail from '../Mail/Mail';
import {AiFillDelete} from 'react-icons/ai';
import {ValuesContext} from '../Dashboard/Dashboard';
import './MailList.css';

const MailList = () => {

    const {folderName, deleteMail, inboxData, sentData, viewMail} = useContext(ValuesContext);

    let data = [];

    if(folderName === "Inbox"){
        data = inboxData;
    }
    else{
        data = sentData;
    }

    return (
        <>
        <div className="mailList">
        <h1 className="folderName">{folderName}</h1>
            {folderName ?
            (data.length > 0) ?
            data.map((item)=>{

                let mailClassName;
                if(item.isRead){
                    mailClassName = "singleMailRead";
                }
                else{
                    mailClassName = "singleMailUnRead"
                }

                return (
                    <div key={item.id} className={mailClassName}>
                    <div className="senderAndIcon">
                    <h1 onClick={()=>{viewMail(item.id, folderName)}}><b>{item.from}</b></h1>
                    <AiFillDelete className="deleteIcon" onClick={()=>{deleteMail(folderName, item.id)}}/>
                    </div>
                    <p onClick={()=>{viewMail(item.id, folderName)}}>{item.Subject}</p> 
                    </div>
                )
            })
            :
            <p className="placeHolder">No mails to display</p>
            : 
            <p className="placeHolder">Select a folder (Inbox / Sent items) to view your mails</p>
            }
        </div>
        </>
    )
}

export default MailList
