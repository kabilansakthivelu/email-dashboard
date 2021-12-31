import React from 'react';
import './Mail.css';

const Mail = ({mailContent}) => {

    return (
        <div className="individualMail">
            {mailContent ? 
            (
                <div className="mailContent">
                <p><b>From: </b>{mailContent.from}</p>
                <p><b>Subject: </b>{mailContent.Subject}</p>
                <p className="content">{mailContent.content}</p>
                </div>
            )
            :
           ""
            }
        </div>
    )
}

export default Mail
