import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { FaReact } from 'react-icons/fa';
import './Home.css';
const Home = ({ title, iconStyle }) => {
  return (
    <div className="container">
      <div className="title">
        <h1>{title}</h1>
        <p>Enter your postcode into the Form below to get details such as:</p>
        <ul className="list">
          <li className="collection-item">What lockdown level you're in</li>
          <li className="collection-item">Whether gyms are open</li>
          <li className="collection-item">What shops are open</li>
        </ul>
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
