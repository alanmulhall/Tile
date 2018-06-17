import styled from 'styled-components';
import SevenMark from '../../SevenMark/SevenMark';
import ResponsiveImage from '../../ResponsiveImage/ResponsiveImage';

const sizes = {
  small: 1,
  medium: 1.5,
  large: 2
};

export const Caption = styled.figcaption`
  align-items: center;
  display: flex;
`;

export const Image = styled(ResponsiveImage)`
  &:hover {
    transform: scale(1.1);
  }
`;

export const TileStyled = styled.figure`
  cursor: pointer;
  height: calc(177px * ${props => sizes[props.size]});
  position: relative;
  overflow: hidden;
  width: calc(315px * ${props => sizes[props.size]});
`;

export const Logo = styled(SevenMark)`
  height: 34px;
  margin-right: ${props => props.theme.spacing.m};
`;
