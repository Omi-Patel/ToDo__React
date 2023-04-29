import React, { useState } from 'react';
import ToDo from './ToDo';
import './index.css';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import Input from '@material-ui/core/Input';



const App = () => {

  const [itemList, setItemList] = useState("");
  const [item, setItem] = useState([]);

  const itemEvents = (e) => {
    setItemList(e.target.value);
  }

  const listOfItem = () => {
    if (itemList === "") {
      alert('Please Enter the Data !');
    } else {
      setItem((oldVal) => {
        return [...oldVal, itemList];
      });
      setItemList("");
    }

  }

  const deleteItems = (id) => {
    console.log("Deleted");

    setItem((oldVal) => {
      return oldVal.filter((arrayElem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      {/* <h1>Hello World</h1> */}

      <div className='mainDiv'>
        <div className='container'>
          <br />

          <h1> ToDo List </h1>
          <br />

          {/* <input type='text' placeholder='Add Items' onChange={itemEvents}
            value={itemList}
          /> */}

          <Input type='text' placeholder="Add Items" onChange={itemEvents} value={itemList} inputProps={{ 'aria-label': 'description' }} className='ip' />

          <Tooltip title="Add">
          <Button className="add" onClick={listOfItem}> <AddIcon /> </Button>
          </Tooltip>

          <ol>
            {/* <li>
              {itemList}
            </li> */}

            {
              item.map((itemVal, index) => {
                return <ToDo
                  key={index}
                  id={index}
                  text={itemVal}
                  onSelect={deleteItems} />
              })
            }


          </ol>

        </div>
      </div>

    </>
  );

};

export default App;