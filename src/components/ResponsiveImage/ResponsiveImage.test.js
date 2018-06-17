import React from 'react';
import 'jest-styled-components';
import renderer from '../../utils/rendererThemeProviderWrapper.js';
import ResponsiveImage from './ResponsiveImage';

describe('<ResponsiveImage />', () => {
  it('renders successfullly', () => {
    const tree = renderer(<ResponsiveImage />);
    expect(tree).toMatchSnapshot();
  });
});
