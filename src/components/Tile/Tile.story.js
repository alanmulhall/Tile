import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { action } from '@storybook/addon-actions';
import { select, withKnobs } from '@storybook/addon-knobs';
import tileImage from '../../images/tile.jpg';
import withTests from '../../utils/withTests';
import Tile from './Tile';

const TileStory = () =>
  storiesOf('Tile', module)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .addDecorator(withTests('Tile'))
    .add('Default', () => (
      <Tile
        image={tileImage}
        onClick={action('clicked')} 
        size={select('Size', ['small', 'medium', 'large'], 'small')}
        title="Home and Away"
      />
    ));

export default TileStory;
