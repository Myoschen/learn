import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeMessage } from "../redux/actions";

import Message from "./Message";
const MessageContainer = () => {
    const messages = useSelector(state => state.messages);
    const dispatch = useDispatch();

    return (
        <div className="message-container">
            {
                messages.map(m => {
                    return (
                        <Message key={m.id} img={m.img} name={m.name} date={m.date} content={m.content} func={() => dispatch(removeMessage(m.id))} />
                    );
                })
            }
        </div>
    );
}

export default MessageContainer;