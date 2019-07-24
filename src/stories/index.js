import React from 'react';
import { storiesOf } from '@storybook/react';
//import { action } from '@storybook/addon-actions';

import Main from '../components/Main';

storiesOf('Taskbox|Main', module)
    .add('without emotion', () => <Main />)
    .add('with emotion', () => <Main />)