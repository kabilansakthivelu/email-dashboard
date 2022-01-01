import React, {useContext, useState, useEffect} from 'react';
import Navbar from '../Navbar/Navbar';
import EmailMenu from '../EmailMenu/EmailMenu';
import MailList from '../MailList/MailList';
import Mail from '../Mail/Mail';
import Login from '../Login/Login';

export const ValuesContext = React.createContext();

const Dashboard = () => {

    const currentUser = localStorage.getItem("currentUser");

    const [mails, setMails] = useState({});

    const [folderName, setFolderName] = useState("");

    useEffect(()=>{
        setMails(JSON.parse(localStorage.getItem(currentUser)));
    }, [])
 
    let inboxData = mails.Inbox;
    let sentData = mails.Sent;

    const inboxCall = () =>{
        setFolderName("Inbox");
    }

    const sentItemsCall = () =>{
        setFolderName("Sent");
    }

    const deleteMail = (folderNamePassed, id) =>{

        // let inboxItems = mails.Inbox;
        // let sentItems = mails.Sent;
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

        localStorage.setItem(currentUser, JSON.stringify(mails));

        // if(folderNamePassed === "Inbox"){
        //     inboxCall()
        // }
        // else{
        //     sentItemsCall()
        // }
    }

    const [mailContent, setMailContent] = useState();

    const viewMail = (id, folderName) =>{
        if(folderName === "Inbox"){
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

    if(currentUser){
        return (
        <div>
            <ValuesContext.Provider value={{inboxCall, sentItemsCall, inboxData, sentData, folderName, deleteMail, viewMail, mailContent}}>
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
