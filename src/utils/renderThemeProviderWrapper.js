import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from 'enzyme';
import theme from '../styled/theme';

const renderThemeProviderWrapper = (children, theme) =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);

export default renderThemeProviderWrapper;
