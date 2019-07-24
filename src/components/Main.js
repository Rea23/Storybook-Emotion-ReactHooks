import React from 'react';
import { useState, useEffect } from 'react';
import { Negative, SomeComp, Positive } from './ItemsMsg';

function Main(sent) {
    const getCount = sent.count;
    const [ count, setCount ] = useState(getCount);
    const [ itemsList, setItemsList ] = useState([]);
    const [ buffer, setBuffer ] = useState('');

    useEffect(() => {
        document.title = "Online";
        return () => document.title = "Offline";
    });

    function setInputBuffer(value) {
        setBuffer(value);
    }
    return(
        <div>
            <h4>{getCount}</h4>
            <p>You clicked {count} times!</p>
            <button onClick={() => setCount( count + 1 )}>Count</button>
            {itemsList.length ? <Positive>Has items</Positive> : <Negative>Empty</Negative>}
            <h4>Items:</h4>
            <p>{itemsList.toString()}</p>
            <input onChange={event =>
                 setInputBuffer(event.target.value)} />
            <button onClick={() =>
                 setItemsList([...itemsList, buffer])}>Add to list</button>
            <SomeComp>somecomp text</SomeComp>
        </div>
    );
}

export default Main;