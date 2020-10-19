import React, { Fragment, useState, useEffect } from 'react';
import './Form.css';
import ResultCard from './ResultCard';
const Form = () => {
  const [text, setText] = useState('');
  const [value, setValue] = useState({});

  const onChange = (e) => {
    setText(e.target.value);
  };

  const getData = async (text) => {
    const API_URL = `https://cors-anywhere.herokuapp.com/https://www.lockdownapi.com/${text}`;
    const res = await fetch(API_URL);
    const data = await res.json();
    setText('');
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (text === '') {
      return;
    } else {
      getData(text);
    }
  };

  return (
    <Fragment>
      <div className="form-container">
        <input
          type="text"
          placeholder="postcode..."
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
      <ResultCard />
    </Fragment>
  );
};
export default Form;
