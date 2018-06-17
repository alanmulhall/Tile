import React from 'react';
import 'jest-styled-components';
import renderer from '../../utils/rendererThemeProviderWrapper.js';
import shallow from '../../utils/shallowThemeProviderWrapper';
import mount from '../../utils/mountThemeProviderWrapper';
import Tile from './Tile';
import Overlay from '../Overlay/Overlay';
import { Caption, Image } from './styles/Tile';
import Title from '../H2/H2';
import tileImage from '../../images/tile.jpg';

describe('<Tile image={tileImage} />', () => {
  it('renders successfully', () => {
    const tree = renderer(<Tile image={tileImage} title="Home and Away" onClick={() => {}} />);
    expect(tree).toMatchSnapshot();
  });

  it('calls "onClick" handler', () => {
    const spy = jest.fn();
    const wrapper = shallow(<Tile image={tileImage} title="Home and Away" onClick={spy} />);
    wrapper.simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  it('has a <Image /> component', () => {
    const wrapper = mount(<Tile image={tileImage} title="Home and Away" onClick={() => {}} />);
    expect(wrapper.find(Image).length).toEqual(1);
  });

  it('has a <Overlay /> component', () => {
    const wrapper = mount(<Tile image={tileImage} title="Home and Away" onClick={() => {}} />);
    expect(wrapper.find(Overlay).length).toEqual(1);
  });

  it('has a <Caption /> component', () => {
    const wrapper = mount(<Tile image={tileImage} title="Home and Away" onClick={() => {}} />);
    expect(wrapper.find(Caption).length).toEqual(1);
  });

  it('has a <Title /> component', () => {
    const wrapper = mount(<Tile image={tileImage} title="Home and Away" onClick={() => {}} />);
    expect(wrapper.find(Title).length).toEqual(1);
  });

  describe('size', () => {
    describe('small', () => {
      it('renders successfully', () => {
        const tree = renderer(<Tile image={tileImage} size="small" title="Home and Away" onClick={() => {}} />);
        expect(tree).toMatchSnapshot();
      });
    });

    describe('medium', () => {
      it('renders successfully', () => {
        const tree = renderer(<Tile image={tileImage} size="medium" title="Home and Away" onClick={() => {}} />);
        expect(tree).toMatchSnapshot();
      });
    });

    describe('large', () => {
      it('renders successfully', () => {
        const tree = renderer(<Tile image={tileImage} size="large" title="Home and Away" onClick={() => {}} />);
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
