import React from 'react';

const AddMoreButton = ({ onClick }) => (
  <button onClick={onClick} className="btn btn--icon btn--add" type="button">
    <i className="icon-plus"></i>
    Adiconar Mais
  </button>
);

export default AddMoreButton;

