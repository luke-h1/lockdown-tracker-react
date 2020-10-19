import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { FcNext } from 'react-icons/fc';
import './Footer.css';

const Footer = ({ title, copyright }) => {
  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <FcNext className="navbar-icon" />
              {title}
            </Link>
          </div>
          <div className="social-icons">
            <a
              className="social-icon-link"
              href="https://github.com/luke-h1/lockdown-tracker-react"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              <FaGithub test-id="github" />
            </a>
            <p className='copyright'>{copyright}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

Footer.defaultProps = {
  title: 'Lockdown Checker App ',
  copyright: 'MIT License',
};

Footer.propTypes = {
  title: PropTypes.string.isRequired,
  copyright: PropTypes.string.isRequired,
};

export default Footer;
