import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './Form.css';

const Form = ({ title }) => {
  return (
    <Fragment>
      <div className="form-container">
        <input type="text" placeholder="postcode" className="form__input" />
        <input className="btn" type="submit" placeholder="submit" />
      </div>
    </Fragment>
  );
};
export default Form;
