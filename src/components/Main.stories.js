import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Main from './Main';

export const actions = {
    onmouseover: action('on mouse over'),
    onmouseout: action('on mouse over'),
    onclick: action('onmouseclick')
}

storiesOf('Taskbox|Main', module)
    .add('without emotion', () => <Main {...actions} />)
    .add('with emotion', () => <Main />)