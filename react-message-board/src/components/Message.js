import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editMessage, likeMessage, dislikeMessage } from "../redux/actions";
import { BiLike, BiDislike, BiMessageEdit } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import { animated } from 'react-spring';

const Message = ({ style, id, name, date, content, like, dislike, isEditing, onRemoveClick, onEditClick }) => {
    const [text, setText] = useState(content);
    const dispatch = useDispatch();
    return (
        <animated.div className="message" style={style} >
            <div className="message__info">
                <div className="name">{name}</div>
                <div className="date">{date}</div>
            </div>
            {
                !isEditing
                    ? (
                        <>
                            <div className="message__content">{content}</div>
                            <div className="message__control">
                                <button className="btn msg-ctl rm-btn" onClick={onRemoveClick}><ImCross /></button>
                                <button className="btn msg-ctl" onClick={() => dispatch(likeMessage(id))}><BiLike /> {like > 100 ? '99+' : like}</button>
                                <button className="btn msg-ctl" onClick={() => dispatch(dislikeMessage(id))}><BiDislike /> {dislike > 100 ? '99+' : dislike}</button>
                                <button className="btn msg-ctl" onClick={onEditClick}><BiMessageEdit /></button>
                            </div>
                        </>
                    )
                    : (
                        <form
                            className="message__editing"
                            onSubmit={e => {
                                e.preventDefault();
                                if (text.length > 0)
                                    dispatch(editMessage(id, text));
                            }}
                        >
                            <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Content ..." required />
                            <button className="btn" type="submit">SUBMIT</button>
                        </form>
                    )
            }
        </animated.div>
    )
}

export default Message;