import { useState } from "react";
import { Form, FormControl, Button, Row, Col, InputGroup } from "react-bootstrap";
import { db } from "../firebase";
import firebase from "firebase/compat/app";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function ChatInput({ email, userId, chatRef, image }) {
    const [input, setInput] = useState("");

    const sendMessage = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        db.collection("users").doc(userId).collection("messages").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: email,
            userImage: image ? image : "/user.jpeg",
        });

        chatRef.current.scrollIntoView({
            behavior: "smooth",
        });

        setInput("");
    };

    return (
        <Form onSubmit={sendMessage}>
            <InputGroup className="mb-3">
                <FormControl
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Message PCM Admin"
                    aria-label="Message input"
                    aria-describedby="basic-addon2"
                    style={{
                        borderRadius: '20px 0 0 20px',
                        borderTopRightRadius: '0',
                        borderBottomRightRadius: '0'
                    }}
                />
                <Button
                    variant="primary"
                    type="submit"
                    id="button-addon2"
                    style={{
                        borderRadius: '0 20px 20px 0',
                        borderTopLeftRadius: '0',
                        borderBottomLeftRadius: '0'
                    }}
                >
                    <FontAwesomeIcon icon={faArrowUp} height={"1.2em"} />
                </Button>
            </InputGroup>
        </Form>
    )
}
