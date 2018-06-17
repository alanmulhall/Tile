import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered';
import withTests from '../../utils/withTests';
import Overlay from './Overlay';

const OverlayStory = () =>
  storiesOf('Overlay', module)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .addDecorator(withTests('Overlay'))
    .add('Default', () => <Overlay fullscreen={boolean('Fullscreen', true)} />);

export default OverlayStory;
