import React from 'react';
import { useState, useEffect } from 'react';
import Main from './Main';
import { Negative, SomeComp, Positive } from './ItemsMsg';

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
            {itemsList.length ? <Positive>Has items</Positive> : <Negative>Empty</Negative>}
            <h4>Items:</h4>
            <p>{itemsList.toString()}</p>
            <input onChange={event =>
                 setInputBuffer(event.target.value)} />
            <button onClick={() =>
                 putInItemsList()}>Add to list</button>
            <Main list={itemsList} />
        </div>
    );
}

export default Parent;