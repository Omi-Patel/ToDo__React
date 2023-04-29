import React from "react";
import './index.css';


const ToDo = (props) => {

    

    return (
        <>
            <div className="todo_list">
                <button onClick={() => {
                    props.onSelect(props.id);
                }}> x </button>
                <li>{props.text}</li>
            </div>
        </>
    );
};

export default ToDo;