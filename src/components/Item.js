import React from 'react';
import { useState } from 'react';

function Item(item) {
    const [ count, setCount ] = useState(0);
    return (
        <div>
            <h4>Name</h4>
            <p>You clicked {count} times!</p>
            <button onClick={() => setCount( count + 1 )}>Count</button>
        </div>
    )
}

export default Item;
