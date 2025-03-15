import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarContainer, Logo, NavLink } from './styled/NavbarStyles';

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Logo>Todo</Logo>
      </Link>
      <Link to="/changelog" style={{ textDecoration: 'none' }}>
        <NavLink as="span">Changelog</NavLink>
      </Link>
    </NavbarContainer>
  );
};

export default Navbar; 