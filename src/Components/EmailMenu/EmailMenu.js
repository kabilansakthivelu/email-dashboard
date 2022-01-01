import React, {useState, useEffect, useContext} from 'react';
import MailList from '../MailList/MailList';
import {ValuesContext} from '../Dashboard/Dashboard';
import './EmailMenu.css';

const EmailMenu = () => {

    const {inboxCall, sentItemsCall} = useContext(ValuesContext);

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
        </>
    )
}

export default EmailMenu
