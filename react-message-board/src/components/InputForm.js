import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "../redux/actions";

const InputForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const handleName = (e) => setName(e.target.value);
    const handleContent = (e) => setContent(e.target.value);

    return (
        <form
            className="message__input-form"
            onSubmit={e => {
                e.preventDefault();
                if (content.length > 0)
                    dispatch(addMessage(name || '匿名', content));
                setName('');
                setContent('');
            }}
        >
            <input type="text" value={name} onChange={handleName} placeholder="Your name ..." maxLength="15" />
            <textarea value={content} onChange={handleContent} placeholder="Content ..." required />
            <button className="btn" type="submit">SUBMIT</button>
        </form>
    );
}

export default InputForm;