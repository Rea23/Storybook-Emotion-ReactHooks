import React from 'react';
import { useState, useEffect } from 'react';
import Main from './Main';
import { Negative, Positive } from './ItemsMsg';

function Parent() {
    const [ itemsList, setItemsList ] = useState([]);
    const [ buffer, setBuffer ] = useState('');

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
            <button onClick={() =>
                 putInItemsList()}>Add to list</button>
            <Main list={itemsList} />
        </div>
    );
}

export default Parent;