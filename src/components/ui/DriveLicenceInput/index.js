import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormGroup from '../FormGroup';
import Input from '../Input';
import RemoveButton from '../RemoveButton';


const INITIAL_STATE = {
  id: '',
  number: '',
  issueAt: '',
  destroy: false
};

class DriveLicenceInput extends Component {

  constructor() {
    super();
    this.state = { INITIAL_STATE };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value) {
      this.setState({
        id: nextProps.value.id,
        number: nextProps.value.number,
        issueAt: nextProps.value.issueAt
      });
    }
  }

  handleChange = ({ name, value }) => {
    this.setState(
      { [name]: value },
      () => this.props.onChange({
        name: this.props.name,
        value: this.state,
        destroy: false
      })
    );
  }


  handleRemoveClick = () => {
    this.setState({
      ...INITIAL_STATE
    },
      () => this.props.onChange({
        name: this.props.name,
        value: this.state,
        destroy: true,
      })
    );
  }

  render() {
    const { number, issueAt } = this.state;
    const { valid } = this.props;

    return (
      <div className="form-license">
        <div className="form-license__inputs">
          <FormGroup>
            <Input
              label="Número"
              name="number"
              value={number || ''}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Input
            label="Data de Emissão"
            type="date"
            name="issueAt"
            value={issueAt || ''}
            valid={valid}
            errorMsg="Por favor informe os dados de Sua Carteira de Motorista"
            onChange={this.handleChange}
          />
        </div>

        <div className="form-license__delete">
          <RemoveButton onClick={this.handleRemoveClick} />
        </div>
      </div>

    );
  }
}



DriveLicenceInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.object,
  errorMsg: PropTypes.string
}

export default DriveLicenceInput;
