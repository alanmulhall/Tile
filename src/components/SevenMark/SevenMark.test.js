import React from 'react';
import 'jest-styled-components';
import renderer from '../../utils/rendererThemeProviderWrapper.js';
import SevenMark from './SevenMark';

describe('<SevenMark />', () => {
  it('renders successfullly', () => {
    const tree = renderer(<SevenMark />);
    expect(tree).toMatchSnapshot();
  });
});
