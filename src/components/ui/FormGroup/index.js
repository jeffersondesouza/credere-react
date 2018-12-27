import React from 'react';

const FormGroup = (props) => (
  <div className="form-group">
    <label>{props.label}</label>
    {props.children}
  </div>
);

export default FormGroup;