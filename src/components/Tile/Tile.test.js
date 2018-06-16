import React from 'react';
import 'jest-styled-components';
import renderer from '../../utils/rendererThemeProviderWrapper.js';
import Tile from './Tile';

describe('<Tile />', () => {
  it('renders successfullly', () => {
    const tree = renderer(<Tile />);
    expect(tree).toMatchSnapshot();
  });
});
