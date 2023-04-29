import React from "react";
import './index.css';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';




const ToDo = (props) => {

    return (
        <>
            <div className="listDiv">
                <div className="todo_list">
                    <Tooltip title="Delete">
                        <Button className="del" onClick={() => {
                            props.onSelect(props.id);
                        }}> <DeleteIcon /> </Button>
                    </Tooltip>
                    <li>{props.text}</li>
                </div>
            </div>
        </>
    );
};

export default ToDo;
