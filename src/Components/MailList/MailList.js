import React, {useState} from 'react';
import Mail from '../Mail/Mail';
import {AiFillDelete} from 'react-icons/ai';
import './MailList.css';

const MailList = ({data, folderName, deleteMail}) => {

    const [mailContent, setMailContent] = useState();

    const viewMail = (id) =>{
        setMailContent(data.find((item)=>{
            return item.id === id;
        }))
    }

    return (
        <>
        <div className="mailList">
        <h1 className="folderName">{folderName}</h1>
            {folderName ?
            data.map((item)=>{

                let mailClassName;
                if(item.isRead){
                    mailClassName = "singleMailRead";
                }
                else{
                    mailClassName = "singleMailUnRead"
                }

                return (
                    <div key={item.id} className={mailClassName} onClick={()=>{viewMail(item.id)}}>
                    <div className="senderAndIcon">
                    <h1><b>{item.from}</b></h1>
                    <AiFillDelete className="deleteIcon" onClick={()=>{deleteMail(folderName, item.id)}}/>
                    </div>
                    <p>{item.Subject}</p> 
                    </div>
                )
            })
            : 
            <p className="placeHolder">Select a folder (Inbox / Sent items) to view your mails</p>
            }
        </div>
        <Mail mailContent={mailContent}/>
        </>
    )
}

export default MailList
