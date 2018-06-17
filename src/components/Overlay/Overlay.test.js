import React from 'react';
import 'jest-styled-components';
import renderer from '../../utils/rendererThemeProviderWrapper';
import shallow from '../../utils/shallowThemeProviderWrapper';
import Overlay from './Overlay';

describe('<Overlay />', () => {
  it('renders successfullly', () => {
    const tree = renderer(<Overlay />);
    expect(tree).toMatchSnapshot();
  });

  it('renders its children', () => {
    const wrapper = shallow(
      <Overlay>
        <p>Solo</p>
      </Overlay>
    );
    expect(wrapper.find('Overlay').children().length).toEqual(1);
  });

  describe('fullscreen prop is true', () => {
    it('fullscreen prop is true by default', () => {
      const wrapper = shallow(<Overlay />);
      expect(wrapper.find('Overlay').props().fullscreen).toEqual(true);
    });

    it('Text color is white', () => {
      const tree = renderer(<Overlay />);
      expect(tree).toHaveStyleRule('color', 'white');
    });

    it('has transparent background color', () => {
      const tree = renderer(<Overlay />);
      expect(tree).toHaveStyleRule('background', 'rgba(0,0,0,0.65)');
    });

    it('height is 100%', () => {
      const tree = renderer(<Overlay />);
      expect(tree).toHaveStyleRule('height', '100%');
    });
  });

  describe('fullscreen prop is false', () => {
    it('height is auto', () => {
      const tree = renderer(<Overlay fullscreen={false} />);
      expect(tree).toHaveStyleRule('height', 'auto');
    });
  });
});
