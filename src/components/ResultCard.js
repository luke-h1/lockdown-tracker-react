import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './ResultCard.css'




const ResultCard = (props) => {
  return (
    <Fragment>
      <div className="card">
        <ul className="list">
          <li className="collection-item">{props.admindistrictname}</li>
          <li className="collection-item"></li>
          <li className="collection-item">this is item one</li>
        </ul>
      </div>
    </Fragment>
  );
};
export default ResultCard;