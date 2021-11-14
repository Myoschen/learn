import React from "react";
import { BiLike, BiDislike } from "react-icons/bi";

const Message = ({ img, name, date, content, func }) => {
    return (
        <div className="message">
            <div className="message__img">
                <img src={img} />
            </div>
            <div className="message__wrapper">
                <div className="message__info">
                    <div className="name">{name}</div>
                    <div className="date">{date}</div>
                </div>
                <div className="message__content">{content}</div>
                <div className="message__control">
                    <button className="btn message__remove-btn" onClick={func}>X</button>
                    <button className="btn msg-ctl"><BiLike /></button>
                    <button className="btn msg-ctl"><BiDislike /></button>
                </div>
            </div>
        </div >
    )
}

export default Message;