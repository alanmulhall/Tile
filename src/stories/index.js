import React from 'react';
import { ThemeProvider } from 'styled-components';
import { addDecorator } from '@storybook/react';
import theme from '../styled/theme';
import Tile from '../components/Tile/Tile.story';
import H2 from '../components/H2/H2.story';
import Overlay from '../components/Overlay/Overlay.story';
import ResponsiveImage from '../components/ResponsiveImage/ResponsiveImage.story';
import SevenMark from '../components/SevenMark/SevenMark.story';

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);

Tile();
H2();
Overlay();
ResponsiveImage();
SevenMark();
