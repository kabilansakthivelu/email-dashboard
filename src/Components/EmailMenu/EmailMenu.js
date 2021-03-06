import React, {useState, useContext, useRef, useEffect} from 'react';
import MailList from '../MailList/MailList';
import {ValuesContext} from '../Dashboard/Dashboard';
import Modal from 'react-modal';
import {user1, user2} from '../../users';
import './EmailMenu.css';

const EmailMenu = () => {

    const {inboxCall, sentItemsCall, mails, setMails, currentUser} = useContext(ValuesContext);

    const [showModal, setShowModal] = useState(false);

    const composeEmail = () =>{
        setShowModal(true);
    }

    const closeModal = () =>{
        setShowModal(false);
    }

    const toRef = useRef();
    const subjectRef = useRef();
    const contentRef = useRef();

    const currentUserEmail = localStorage.getItem("currentUserEmail");

    const allUsers = ["user1", "user2"];

    // Composing new email function
    

     const composeNewMail = (e) =>{
        e.preventDefault();
        const receiver = toRef.current.value;
        const subject = subjectRef.current.value;
        const content = contentRef.current.value;

        // Updating sent items folder

        setMails(m => ({ 
            ...m,
            Sent : [...m.Sent, 
            {
                id : new Date().getTime().toString(),
                user : receiver,
                Subject : subject,
                content,
            }]
        }))

        // If sender and receiver are same

        if(receiver === currentUserEmail){
            setMails(m => ({
            ...m,
            Inbox : [...m.Inbox, 
            {
                id : new Date().getTime().toString(),
                user : receiver,
                Subject : subject,
                content,
                isRead: false,
            }]
        }))
        }

        // If receiver is another user and not same as sender

        else{
            let alternateUser = allUsers.find((item)=>{
                return item !== currentUser;
            })
            if(`test${alternateUser}@gmail.com` === receiver){
            let alternateUserMails = JSON.parse(localStorage.getItem(alternateUser));
            alternateUserMails = {
                ...alternateUserMails,
                Inbox : [...alternateUserMails.Inbox,
                {
                    id : new Date().getTime().toString(),
                user : receiver,
                Subject : subject,
                content,
                isRead: false,
                }]
            }
            localStorage.setItem(alternateUser, JSON.stringify(alternateUserMails))
            }
        }
        setShowModal(false);
    }


    useEffect(()=>{
        if(Object.keys(mails).length > 0){
        localStorage.setItem(currentUser, JSON.stringify(mails))
        }
    }, [mails])
    

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

        {/* Modal for composing a new email */}

        <Modal isOpen={showModal} onRequestClose={()=>{setShowModal(false)}}>
        <div className="modalContent">
        <h1 className="modalHeader">Compose a new mail</h1>

        {/* New email composing form */}

        <form className="newEmailForm" onSubmit={composeNewMail}>
        <input type="email" ref={toRef} required placeholder="To" className="formField" list="usersList"/>
        <datalist id="usersList">
        <option value="testuser1@gmail.com">testuser1@gmail.com</option>
        <option value="testuser2@gmail.com">testuser2@gmail.com</option>
        </datalist>
        <br />
        <input type="email" placeholder="Cc" className="formField"/>
        <br />
        <input type="text" ref={subjectRef} maxLength="25" required placeholder="Email Subject" className="formField"/>
        <br />
        <textarea ref={contentRef} cols="50" rows="5" required placeholder="Please write your content here.." className="formField"></textarea>
        <div>
        <button className="modalBtn">Send</button>
        <button className="modalBtn" onClick={closeModal}>Cancel</button>
        </div>
        </form>
        </div>
        </Modal>
        </>
    )
}

export default EmailMenu
