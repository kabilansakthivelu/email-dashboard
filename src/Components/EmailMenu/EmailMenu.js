import React from 'react';
import './EmailMenu.css';

const EmailMenu = () => {
    return (
        <div className="emailMenu">
            <button className="compose">Compose Mail</button>
            <div className="folderNames">
            <h1>Inbox</h1>
            <h1>Sent items</h1>
            <h1>Drafts</h1>
            <h1>Trash</h1>
            <h1>Important</h1>
            </div>
        </div>
    )
}

export default EmailMenu
