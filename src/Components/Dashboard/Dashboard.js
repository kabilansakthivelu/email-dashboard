import React, {useContext, useState, useEffect} from 'react';
import Navbar from '../Navbar/Navbar';
import EmailMenu from '../EmailMenu/EmailMenu';
import MailList from '../MailList/MailList';
import Mail from '../Mail/Mail';
import Login from '../Login/Login';

export const ValuesContext = React.createContext();

const Dashboard = () => {

    // Implemented useContext API for sharing data between components

    const currentUser = localStorage.getItem("currentUser");

    const [mails, setMails] = useState({});

    const [folderName, setFolderName] = useState("");

    const [mailContent, setMailContent] = useState();

    useEffect(()=>{
        setMails(JSON.parse(localStorage.getItem(currentUser)));
    }, [])
 
    let inboxData = mails.Inbox;
    let sentData = mails.Sent;

    const inboxCall = () =>{
        setFolderName("Inbox");
        setMailContent();
    }

    const sentItemsCall = () =>{
        setFolderName("Sent");
        setMailContent();
    }

    const deleteMail = (folderNamePassed, id) =>{

        let folder = [];
        if(folderNamePassed === "Inbox"){
            folder = inboxData;
        }
        else{
            folder = sentData;
        }

        setMails({
            ...mails,
            [folderNamePassed] : folder.filter((item)=>{
                return item.id !== id;
            })
        })
    }

    const viewMail = (id, folderName) =>{
        if(folderName === "Inbox"){
        setMails({
            ...mails,
            Inbox : mails.Inbox.map((item)=>{
                if(item.id === id){
                    return {...item, isRead: true}
                }
                else{
                    return item;
                }
            })
        })
        setMailContent(inboxData.find((item)=>{
            return item.id === id;
        }))
        }
        else{
           setMailContent(sentData.find((item)=>{
            return item.id === id;
        })) 
        }
    }

    // If user is in logged in state, then would be displayed with Dashboard or would be displayed with Login page

    if(currentUser){
        return (
        <div>
            <ValuesContext.Provider value={{inboxCall, sentItemsCall, inboxData, sentData, folderName, deleteMail, viewMail, mailContent, setMails, mails, currentUser}}>
            <Navbar />
            <EmailMenu />
            <MailList/>
            <Mail />
            </ValuesContext.Provider>
        </div>
        )
    }
    else{
        return <Login />
    }
}

export default Dashboard
