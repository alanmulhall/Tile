import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import withTests from '../../utils/withTests';
import H2 from './H2';

const H2Story = () =>
  storiesOf('H2', module)
    .addDecorator(centered)
    .addDecorator(withTests('H2'))
    .add('Default', () => (
      <H2>That’s been one of my mantras - focus and simplicity.</H2>
    ));

export default H2Story;
