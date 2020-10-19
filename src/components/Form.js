import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import './Form.css';

const Form = ({ title }) => {
  const [value, setValue] = useState('');

  const onChange = (e) => setValue(e.target.value);

  const handleClick = async (text) => {
    const API_URL = `https://cors-anywhere.herokuapp.com/https://www.lockdownapi.com/${text}`;
    const res = await fetch(API_URL);
    const data = await res.json();
    console.log(data);
  };

  return (
    <Fragment>
      <div className="form-container">
        <input
          type="text"
          placeholder="postcode"
          className="form__input"
          onChange={onChange}
        />
        <input
          className="btn"
          type="submit"
          placeholder="submit"
          onClick={handleClick}
        />
      </div>
    </Fragment>
  );
};
export default Form;
