import React from 'react';
import PropTypes from 'prop-types';
import { OverlayStyled } from './styles/Overlay';

const defaultProps = {
  children: null,
  className: null,
  fullscreen: true
};

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fullscreen: PropTypes.bool
};

const Overlay = ({ children, className, fullscreen }) => (
  <OverlayStyled className={className} fullscreen={fullscreen}>
    {children}
  </OverlayStyled>
);

Overlay.defaultProps = defaultProps;
Overlay.propTypes = propTypes;

export default Overlay;
