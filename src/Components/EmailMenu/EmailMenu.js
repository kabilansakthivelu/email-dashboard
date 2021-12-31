import React, {useState, useEffect} from 'react';
import MailList from '../MailList/MailList';
import './EmailMenu.css';

const EmailMenu = () => {

    const [mails, setMails] = useState();

    const [dataToPass, setDataToPass] = useState([]);

    const [folderName, setFolderName] = useState("");

    const currentUser = localStorage.getItem("currentUser");

    useEffect(()=>{
        setMails(JSON.parse(localStorage.getItem(currentUser)));
    }, [])

    const inboxCall = () =>{
        setDataToPass(mails.Inbox);
        setFolderName("Inbox");
    }

    const sentItemsCall = () =>{
        setDataToPass(mails.sentItems);
        setFolderName("Sent");
    }

    const deleteMail = (folderName, id) =>{
        setMails({
            ...mails,
            folderName : mails.folderName.filter((items)=>{
                return items.id !== id;
            })
        })
        localStorage.setItem(currentUser, mails);
    }

    return (
        <>
        <div className="emailMenu">
            <button className="compose">Compose Mail</button>
            <div className="folderNames">
            <h1 onClick={inboxCall} className="links">Inbox</h1>
            <h1 onClick={sentItemsCall} className="links">Sent</h1>
            <h1 className="links">Drafts</h1>
            <h1 className="links">Trash</h1>
            <h1 className="links">Important</h1>
            </div>
        </div>
        <MailList data={dataToPass} folderName={folderName} deleteMail={deleteMail}/>
        </>
    )
}

export default EmailMenu
