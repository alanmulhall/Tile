import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import withTests from '../../utils/withTests';
import Tile from './Tile';

const TileStory = () =>
  storiesOf('Tile', module)
    .addDecorator(centered)
    .addDecorator(withTests('Tile'))
    .add('Default', () => <Tile />);

export default TileStory;
