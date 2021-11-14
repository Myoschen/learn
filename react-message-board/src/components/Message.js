import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editMessage } from "../redux/actions";
import { BiLike, BiDislike, BiMessageEdit } from "react-icons/bi";
import { ImCross } from "react-icons/im";

const Message = ({ id, name, date, content, isEditing, onRemoveClick, onEditClick }) => {
    const [text, setText] = useState(content);
    const dispatch = useDispatch();
    return (
        <div className="message">
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
                                <button className="btn msg-ctl"><BiLike /></button>
                                <button className="btn msg-ctl"><BiDislike /></button>
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
                            <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Content ..." />
                            <button className="btn" type="submit">SUBMIT</button>
                        </form>
                    )
            }
        </div >
    )
}

export default Message;