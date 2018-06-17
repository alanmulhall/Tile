import styled from 'styled-components';

export const OverlayStyled = styled.div`
  background: rgba(0, 0, 0, 0.65);
  box-sizing: border-box;
  color: white;
  left: 0;
  bottom: 0;
  padding: ${props => props.theme.spacing.xm} ${props => props.theme.spacing.m};
  position: absolute;
  height: ${props => props.fullscreen ? '100%' : 'auto'};
  width: 100%;
  z-index: ${props => props.theme.zIndex[0]};
`;
