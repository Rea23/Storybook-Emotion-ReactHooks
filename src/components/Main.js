import React from 'react';
import { SomeComp } from './ItemsMsg';
import Item from './Item';

function Main(props) {
    return(
        <div>
            <SomeComp>Items:</SomeComp>
            {props.list.map(item => <Item p={item} key={item.toString()} />)}
        </div>
    );
}

export default Main;