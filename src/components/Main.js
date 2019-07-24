import React from 'react';
import { useState, useEffect } from 'react';
import { Negative, SomeComp, Positive } from './ItemsMsg';
import Item from './Item';

function Main(props) {
    return(
        <div>
            <SomeComp>somecomp text</SomeComp>
            <Item />
        </div>
    );
}

export default Main;