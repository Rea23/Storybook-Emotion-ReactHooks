import React from 'react';
import { useState, useEffect } from 'react';
import Main from './Main';

function Parent() {
    const [ count, setCount ] = useState(5);
    return(
        <div>
            <Main count={count} />
        </div>
    );
}

export default Parent;