import React from "react";
import { Image } from "react-bootstrap";

export default function Message({ userImage, user, timestamp, message }) {
    const formattedTimestamp = timestamp?.toDate()?.toUTCString();

    // Remove "@gmail.com" from the user email
    const userNameWithoutEmail = user.replace(/@gmail\.com$/, '');

    return (
        <div className="message-container d-flex p-3 mb-3">
            <div className="mx-2">
                <Image src={userImage} alt="" rounded height={50} className="mr-5" />
            </div>
            <div className="message-content">
                <h4 className="m-0 user-name">
                    {userNameWithoutEmail} <span className="text-muted timestamp">{formattedTimestamp}</span>
                </h4>
                <p className="m-0 mt-1 message-text">{message}</p>
            </div>
        </div>
    );
}
