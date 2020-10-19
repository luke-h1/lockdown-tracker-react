import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './About.css';
const About = ({ title, description }) => {
  return (
    <Fragment>
      <div className="about-container">
        <h1>{title}</h1>
        <div className="description-container">
          <p className="about__description">
            This App uses the{' '}
            <a
              href="https://www.lockdownapi.com/index.html"
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              Lockdown API
            </a>
            {description}
          </p>
        </div>
      </div>
    </Fragment>
  );
};

About.defaultProps = {
  title: 'About This App',
  description:
    ' to get data & statistics about the lockdown status across the UK. Consult with your local council, government or health authority website to verify the accuracy of the information provided on this site',
};

About.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default About;
