import React, {useState, useEffect} from 'react';
import MailList from '../MailList/MailList';
import './EmailMenu.css';

const EmailMenu = () => {

    const [mails, setMails] = useState();

    const [dataToPass, setDataToPass] = useState([]);

    const currentUser = localStorage.getItem("currentUser");

    useEffect(()=>{
        setMails(JSON.parse(localStorage.getItem(currentUser)));
    }, [])

    const inboxCall = () =>{
        setDataToPass(mails.Inbox);
    }

    const sentItemsCall = () =>{
        setDataToPass(mails.sentItems);
    }

    return (
        <>
        <div className="emailMenu">
            <button className="compose">Compose Mail</button>
            <div className="folderNames">
            <h1 onClick={inboxCall} className="links">Inbox</h1>
            <h1 onClick={sentItemsCall} className="links">Sent items</h1>
            <h1 className="links">Drafts</h1>
            <h1 className="links">Trash</h1>
            <h1 className="links">Important</h1>
            </div>
        </div>
        <MailList data={dataToPass}/>
        </>
    )
}

export default EmailMenu
