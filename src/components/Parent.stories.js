import React from 'react';
import { storiesOf } from '@storybook/react';
//import { action } from '@storybook/addon-actions';

import Parent from './Parent';

storiesOf('Taskbox|Parent', module)
    .add('without emotion', () => <Parent />)
    .add('with emotion', () => <Parent />)