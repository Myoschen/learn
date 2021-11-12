import React from "react";

const Title = React.memo((props) => {
    return (
        <div className="todo__title">
            <h1>{props.children}</h1>
        </div>
    );
});

export default Title;