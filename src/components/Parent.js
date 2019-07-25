import React from 'react';
import { useState, useEffect } from 'react';
import Main from './Main';
import { Negative, Positive, Button } from './ItemsMsg';

function Parent(props) {
    const [ itemsList, setItemsList ] = useState([]);
    const [ buffer, setBuffer ] = useState('');
    const mode = props.mode;

    function setInputBuffer(value) {
        setBuffer(value);
    }

    function putInItemsList() {
        setItemsList([...itemsList, buffer]);
    }

    useEffect(() => {
        document.title = "Online";
        return () => document.title = "Offline";
    });

    return(
        <div>
            {itemsList.length ? <Positive>You have items in your list</Positive> : <Negative>Your list is empty</Negative>}
            <input onChange={event =>
                 setInputBuffer(event.target.value)} />
            <Button bcg={mode} onClick={() =>
                 putInItemsList()}>Add to list</Button>
            <Main list={itemsList} />
        </div>
    );
}

export default Parent;