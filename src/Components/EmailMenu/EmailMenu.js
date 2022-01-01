import React, {useState, useContext} from 'react';
import MailList from '../MailList/MailList';
import {ValuesContext} from '../Dashboard/Dashboard';
import Modal from 'react-modal';
import './EmailMenu.css';

const EmailMenu = () => {

    const {inboxCall, sentItemsCall} = useContext(ValuesContext);

    const [showModal, setShowModal] = useState(false);

    const composeEmail = () =>{
        setShowModal(true);
    }

    const composeNewMail = (e) =>{
        e.preventDefault();
    }

    return (
        <>
        <div className="emailMenu">
            <button className="compose" onClick={composeEmail}>Compose Mail</button>
            <div className="folderNames">
            <h1 onClick={inboxCall} className="links">Inbox</h1>
            <h1 onClick={sentItemsCall} className="links">Sent</h1>
            <h1 className="links">Drafts</h1>
            <h1 className="links">Trash</h1>
            <h1 className="links">Important</h1>
            </div>
        </div>

        <Modal isOpen={showModal} onRequestClose={()=>{setShowModal(false)}}>
        <div className="modalContent">
        <h1 className="modalHeader">Compose a new mail</h1>

        <form className="newEmailForm" onSubmit={composeNewMail}>
        <input type="text" placeholder="To" className="formField"/>
        <br />
        <input type="text" placeholder="Cc" className="formField"/>
        <br />
        <input type="text" placeholder="Email Subject" className="formField"/>
        <br />
        <textarea id="" cols="50" rows="5" placeholder="Please write your content here.." className="formField"></textarea>
        <div>
        <button className="modalBtn">Send</button>
        <button className="modalBtn">Cancel</button>
        </div>
        </form>
        </div>
        </Modal>
        </>
    )
}

export default EmailMenu
