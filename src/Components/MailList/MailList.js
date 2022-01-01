import React, {useContext} from 'react';
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

    // Sorting emails in the order where last received will be on top of the list

    if(data){
    data = data.sort(function (a,b){ return b.id - a.id })
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
                    <h1 className="sender" onClick={()=>{viewMail(item.id, folderName)}}><b>{item.user}</b></h1>
                    <AiFillDelete className="deleteIcon" onClick={()=>{deleteMail(folderName, item.id)}}/>
                    </div>
                    <p className="subject" onClick={()=>{viewMail(item.id, folderName)}}>{item.Subject}</p> 
                    </div>
                )
            })
            :

            // Placeholder text when folder is empty

            <p className="placeHolder">No mails to display</p>

            // Placeholder text when none of the folder was chosen

            : 
            <p className="placeHolder">Select a folder (Inbox / Sent items) to view your mails</p>
            }
        </div>
        </>
    )
}

export default MailList
