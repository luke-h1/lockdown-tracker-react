import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const FourOhFour = () => {
  return (
    <Fragment>
      <div className="not-found-container">
      <h1>
        The page you're looking for doesn't exist{' '}
        <span role="img" aria-label="not found emoji">
          🤷‍♂️
        </span>
      </h1>
      </div>
    </Fragment>
  );
};
export default FourOhFour;
