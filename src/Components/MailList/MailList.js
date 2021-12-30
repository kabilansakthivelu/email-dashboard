import React from 'react';
import Mail from '../Mail/Mail';
import {AiFillDelete} from 'react-icons/ai';
import './MailList.css';

const MailList = ({data}) => {

    return (
        <>
        <div className="mailList">
            {data.length ?
            data.map((item)=>{
                return (
                    <div key={item.id} className="singleMail">
                    <div className="senderAndIcon">
                    <h1><b>{item.from}</b></h1>
                    <AiFillDelete className="deleteIcon"/>
                    </div>
                    <p>{item.Subject}</p> 
                    </div>
                )
            })
            : 
            <p className="placeHolder">Select a folder (Inbox / Sent items) to view your mails</p>
            }
        </div>
        <Mail/>
        </>
    )
}

export default MailList
