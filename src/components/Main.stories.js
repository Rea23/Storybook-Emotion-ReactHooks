import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Main from './Main';

export const mockList = ['item1', 'item2']

export const actions = {
    onmouseover: action('on mouse over'),
    onmouseout: action('on mouse over'),
    onclick: action('onmouseclick')
}

storiesOf('Taskbox|Main', module)
    .add('without emotion', () => <Main list={mockList} {...actions} />)
    .add('with emotion', () => <Main list={mockList} />)