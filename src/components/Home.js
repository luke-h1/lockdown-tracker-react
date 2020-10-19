import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { FaReact } from 'react-icons/fa';

const Home = ({ title, iconStyle }) => {
  return (
    <div className="container">
      <div className="title">
        <h1>{title}</h1>
        <FaReact className={iconStyle} />
      </div>
      {/* put results from props form here */}
    </div>
  );
};

Home.defaultProps = {
  title: 'Lockdown checker react',
  iconStyle: 'icon',
};

Home.propTypes = {
  title: PropTypes.string.isRequired,
  iconStyle: PropTypes.string.isRequired,
};

export default Home;
