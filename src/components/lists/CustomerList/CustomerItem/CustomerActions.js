import React from 'react';
import PropTypes from 'prop-types';

const CustomerActions = ({ onSendToEdit, onSendToDelete }) => (
  <div className="customer__actions">
    <button onClick={onSendToEdit} className="btn btn--round btn--icon btn--edit" type="button">
      <i className="icon-pencil"></i>
    </button>
    <button onClick={onSendToDelete} className="btn btn--round btn--icon btn--danger" type="button">
      <i className="icon-trash"></i>
    </button>
  </div>
);

CustomerActions.propTypes = {
  onSendToEdit: PropTypes.func,
  onSendToDelete: PropTypes.func
}

export default CustomerActions;
