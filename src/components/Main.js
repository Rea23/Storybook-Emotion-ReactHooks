import React from 'react';
import { useState, useEffect } from 'react';
import { Negative, SomeComp, Positive } from './ItemsMsg';
import Item from './Item';

function Main(props) {
    // console.log(props.list)
    // console.log(typeof(props.list))
    // console.log(typeof(newP))
    return(
        <div>
            <SomeComp>Items:</SomeComp>
            {/* {props.list.length > 0 ? props.list.map(item => <Item p={item} key={item.toString()} />) : <p>none</p>} */}
            {props.list.map(item => <Item p={item} key={item.toString()} />)}
            
        </div>
    );
}

export default Main;