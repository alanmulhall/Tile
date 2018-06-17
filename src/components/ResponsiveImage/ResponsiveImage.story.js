import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import styled from 'styled-components';
import withTests from '../../utils/withTests';
import ResponsiveImage from './ResponsiveImage';
import logo from '../../images/logo.png';

const Container = styled.div`
  align-items: center;
  display: flex;
`;

const SmallImage = styled.figure`
  height: 50px;
`;

const MediumImage = styled.figure`
  height: 100px;
`;

const LargeImage = styled.figure`
  height: 150px;
`;

const ResponsiveImageStory = () =>
  storiesOf('ResponsiveImage', module)
    .addDecorator(centered)
    .addDecorator(withTests('ResponsiveImage'))
    .add('Default', () => (
      <Container>
        <SmallImage>
          <ResponsiveImage src={logo} alt="7" />
        </SmallImage>
        <MediumImage>
          <ResponsiveImage src={logo} alt="7" />
        </MediumImage>
        <LargeImage>
          <ResponsiveImage src={logo} alt="7" />
        </LargeImage>
      </Container>
    ));

export default ResponsiveImageStory;
