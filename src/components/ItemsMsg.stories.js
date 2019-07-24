import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Negative, Positive } from './ItemsMsg';

export const actions = {
    onmouseOver: action('on mouse over'),
    onClick: action('onmouseclick')
}

storiesOf('Taskbox|ItemsMsg', module)
    .addDecorator(DecFn => <div style={{textAlign: 'center', color:'white', padding:'20px'}}>{DecFn()}</div>)
    .add('Negative', () => <Negative {...actions}>Negative</Negative>)
    .add('Positive', () => <Positive {...actions}>Positive</Positive>)