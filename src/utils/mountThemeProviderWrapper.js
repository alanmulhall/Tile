import React from 'react';
import { ThemeProvider } from 'styled-components';
import { mount } from 'enzyme';
import theme from '../styled/theme';

const mountThemeProviderWrapper = children => (
  mount(
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
);

export default mountThemeProviderWrapper;