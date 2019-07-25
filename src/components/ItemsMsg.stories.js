import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Negative, Positive, Button } from './ItemsMsg';

export const actions = {
    onmouseOver: action('on mouse over'),
    onClick: action('onmouseclick')
}

storiesOf('Taskbox|ItemsMsg/Messages', module)
    .addDecorator(DecFn => <div style={{textAlign: 'center', color:'white', padding:'20px'}}>{DecFn()}</div>)
    .add('Negative', () => <Negative prop {...actions}>Negative</Negative>)
    .add('Positive', () => <Positive {...actions}>Positive</Positive>)

storiesOf('Taskbox|ItemsMsg/Button', module)
    .add('Dark mode', () => <Button bcg={true} >Add to list</Button>)
    .add('Light mode', () => <Button bcg={false} >Add to list</Button>)