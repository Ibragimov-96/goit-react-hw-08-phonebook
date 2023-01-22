import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Forma, ButtonAdd } from './FormStyle.js';
class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  handelChange = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addForm({ ...this.state });

    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <Forma onSubmit={this.handleSubmit}>
        <label>
          Name:
          <br />
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handelChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <br />
        <label>
          Number:
          <br />
          <input
            type="tel"
            name="number"
            onChange={this.handelChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            value={this.state.number}
            required
          />
        </label>
        <br />
        <ButtonAdd type="submit">Add contact</ButtonAdd>
      </Forma>
    );
  }
}
export default Form;
Form.propTypes = {
  addForm: PropTypes.func,
};
