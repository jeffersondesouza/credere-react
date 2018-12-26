import React from 'react';
import PropTypes from 'prop-types';

const Fieldset = (props) => (
  <fieldset className="fieldset">
    <legend className="legend">
      <div className="legend__title">{props.legend}</div>
      <div className="legend__subtitle">{props.sublegend}</div>
    </legend>
    {props.children}
  </fieldset>
);

Fieldset.propTypes = {
  legend: PropTypes.string.isRequired,
  sublegend: PropTypes.string
}


export default Fieldset;