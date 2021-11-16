import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeMessage, editMessage } from "../redux/actions";
import { useTransition, config } from "react-spring";
import Message from "./Message";
const MessageContainer = () => {
    const messages = useSelector(state => state.messages);
    const dispatch = useDispatch();
    const transitions = useTransition(messages, {
        keys: item => item.id,
        from: { opacity: 0, x: -10 },
        enter: { opacity: 1, x: 0 },
        leave: { opacity: 0, x: -10 },
        config: config.stiff
    })
    return (
        <div className="message-container">
            {
                // messages.map(m => {
                //     return (
                //         <Message
                //             key={m.id}
                //             {...m}
                //             onRemoveClick={() => dispatch(removeMessage(m.id))}
                //             onEditClick={() => dispatch(editMessage(m.id, ''))}
                //         />
                //     );
                // })
                transitions((style, item) => (
                    item && (<Message style={style} key={item.id} {...item} onRemoveClick={() => dispatch(removeMessage(item.id))} onEditClick={() => dispatch(editMessage(item.id, ''))} />)
                ))
            }
        </div>
    );
}

export default MessageContainer;