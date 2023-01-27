import React, { useState} from 'react';
import PropTypes from 'prop-types';
import { Forma, ButtonAdd } from './FormStyle.js';
const Form =({addForm})=> {
 
  const [name,setName]=useState('')
  const [number, setNumber]=useState('')
  const handleChangeName = e=>{
    setName(e.currentTarget.value)
  }
  const handleChangeNumber = e=>{
    setNumber(e.currentTarget.value)
  }
 
  const handleSubmit = e => {
    e.preventDefault();
   addForm({ name, number });

    reset();
  };
 const reset = () => {
    setName('')
    setNumber('')
  };
  return (
    <Forma onSubmit={handleSubmit}>
      <label>
        Name:
        <br />
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChangeName}
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
          onChange={handleChangeNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          value={number}
          required
        />
      </label>
      <br />
      <ButtonAdd type="submit">Add contact</ButtonAdd>
    </Forma>
  );
}
export default Form;
Form.propTypes = {
  addForm: PropTypes.func,
};
