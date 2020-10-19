import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';
import {FiCode} from 'react-icons/fi';
const Navbar = ({ title, iconStyles, navLinkStyles }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <Link
          to="/"
          className="navbar-logo"
          onClick={closeMobileMenu}
          onBlur={closeMobileMenu}
        >
          <FiCode className={iconStyles} />
          <p className="lead">{title}</p>
        </Link>
        <div className="menu-icon" onClick={handleClick} onBlur={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link
              to="/"
              className={navLinkStyles}
              onClick={closeMobileMenu}
              onBlur={closeMobileMenu}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="projects"
              className={navLinkStyles}
              onClick={closeMobileMenu}
              onBlur={closeMobileMenu}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'placeholder',
  navLinkStyles: 'nav-links',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  navLinkStyles: PropTypes.string.isRequired,
};

export default Navbar;
