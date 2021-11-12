import React from "react";

function Button(props) {
    const setColor = () => {
        if (props.color === 'green')
            return '#3DDC97';
        else if (props.color === 'red')
            return '#FF495C';
        else
            return props.color;
    }
    const style = {
        backgroundColor: setColor()
    }
    return (
        <>
            <button className={props.className} type='button' style={style} onClick={props.func}>
                {props.children}
            </button>
        </>
    );
}

export default Button;