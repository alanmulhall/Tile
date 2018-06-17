import React from 'react';
import 'jest-styled-components';
import renderer from '../../utils/rendererThemeProviderWrapper.js';
import H2 from './H2';

describe('<H2 />', () => {
  it('renders successfullly', () => {
    const tree = renderer(<H2 />);
    expect(tree).toMatchSnapshot();
  });
});
