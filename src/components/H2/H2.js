import styled from 'styled-components';

const H2 = styled.h2`
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.fontScale.m};
  line-height: ${props => props.theme.lineHeight.s};
  margin: 0;
`;

export default H2;
