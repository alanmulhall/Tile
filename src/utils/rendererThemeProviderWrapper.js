import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import theme from '../styled/theme';

const rendererThemeProviderWrapper = children =>
  renderer
    .create(<ThemeProvider theme={theme}>{children}</ThemeProvider>)
    .toJSON();

export default rendererThemeProviderWrapper;
