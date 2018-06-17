import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Caption, Image, Logo, TileStyled } from './styles/Tile';
import Title from '../../components/H2/H2';
import Overlay from '../Overlay/Overlay';

class Tile extends PureComponent {
  static defaultProps = {
    size: 'small'
  };

  static propTypes = {
    image: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    title: PropTypes.string.isRequired
  };

  render() {
    const { image, onClick, size, title } = this.props;
    return (
      <TileStyled onClick={onClick} size={size}>
        <Image src={image} alt={title} />
        <Overlay fullscreen={false}>
          <Caption>
            <Logo />
            <Title>{title}</Title>
          </Caption>
        </Overlay>
      </TileStyled>
    );
  }
}

export default Tile;
