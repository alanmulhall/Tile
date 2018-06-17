import React from 'react';
import { ThemeProvider } from 'styled-components';
import { shallow } from 'enzyme';
import theme from '../styled/theme';

const shallowThemeProviderWrapper = children =>
  shallow(<ThemeProvider theme={theme}>{children}</ThemeProvider>);

export default shallowThemeProviderWrapper;
