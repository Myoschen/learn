import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeMessage, editMessage } from "../redux/actions";

import Message from "./Message";
const MessageContainer = () => {
    const messages = useSelector(state => state.messages);
    const dispatch = useDispatch();

    return (
        <div className="message-container">
            {
                messages.map(m => {
                    return (
                        <Message
                            key={m.id}
                            id={m.id}
                            name={m.name}
                            date={m.date}
                            content={m.content}
                            isEditing={m.isEditing}
                            onRemoveClick={() => dispatch(removeMessage(m.id))}
                            onEditClick={() => dispatch(editMessage(m.id, ''))}
                        />
                    );
                })
            }
        </div>
    );
}

export default MessageContainer;