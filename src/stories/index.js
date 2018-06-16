import React from 'react';
import { ThemeProvider } from 'styled-components';
import { addDecorator, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import theme from '../styled/theme';
import Tile from '../components/Tile/Tile.story';

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);

Tile();
