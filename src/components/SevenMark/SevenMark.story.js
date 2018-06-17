import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import withTests from '../../utils/withTests';
import SevenMark from './SevenMark';

const SevenMarkStory = () =>
  storiesOf('SevenMark', module)
    .addDecorator(centered)
    .addDecorator(withTests('SevenMark'))
    .add('Default', () => (
      <SevenMark />
    ));

export default SevenMarkStory;
