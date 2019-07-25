import React from 'react';
import { useState } from 'react';

function Item(props) {
    const [ count, setCount ] = useState(0);
    console.log(props.p)
    return (
        <div>
            <h4>{props.p}</h4>
            <p>You clicked {count} times!</p>
            <button onClick={() => setCount( count + 1 )}>Count</button>
        </div>
    )
}

export default Item;
