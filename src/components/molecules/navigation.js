import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Nav = styled.nav((props) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  cursor: 'pointer',
  zIndex: 5,
  background: 'rgba(255, 255, 255,.8)',
  width: '40px',
  height: '40px',
  borderBottomRightRadius: '10px',
  borderTopRightRadius: '10px',
  '@media (min-width: 998px)': {
    width: '60px',
    height: '60px',
  },
}))

const Navigation = ({ onNav, children }) => {
  return <Nav onClick={onNav}>{children}</Nav>
}

Navigation.defaultProps = {
  children: '',
  onNav: () => {},
}

Navigation.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  onNav: PropTypes.func,
}

export default Navigation
