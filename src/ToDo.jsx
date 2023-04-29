import React from "react";
import './index.css';
import DeleteIcon from '@material-ui/icons/Delete';




const ToDo = (props) => {

    

    return (
        <>
            <div className="todo_list">
                <button onClick={() => {
                    props.onSelect(props.id);
                }}> <DeleteIcon /> </button>
                <li>{props.text}</li>
            </div>
        </>
    );
};

export default ToDo;