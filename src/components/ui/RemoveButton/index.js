import React from 'react';

const RemoveButton = ({ onClick }) => (
  <button onClick={onClick} className="btn btn--icon btn--remove" type="button">
    <i className="icon-trash"></i>
  </button>
);

export default RemoveButton;
