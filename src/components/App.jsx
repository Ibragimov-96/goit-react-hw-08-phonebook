// import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers';
import React, { useState, useEffect } from 'react';
import Form from './Form/Form';
import { nanoid } from 'nanoid';
import Components from './Components/Components';

import { Contacts } from './Contacts/Contacts';
import { Search } from './Search/Search';
export const App = () => {
  const [contacts, setContats] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) || [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addUser = data => {
    if (contacts.find(item => item.name === data.name)) {
      return alert(data.name + 'есть');
    }

    const newUser = { id: nanoid(), ...data };
    setContats(prevState => [...prevState, newUser]);
  };
  const deleteUser = id => {
    setContats(prevState => prevState.filter(user => user.id !== id));
  };
  const userFilter = user => {
    setFilter(user);
  };
  const search = () => {
    if (!filter) {
      return contacts;
    }
    return contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(filter.toLowerCase()) ||
        number.toLowerCase().includes(filter.toLowerCase())
    );
  };
  return (
    <div>
      <h1>Phonebook</h1>
      <Components>
        <Form addForm={addUser} />
        <Search contacts={userFilter} />
        <h3>Contacts</h3>
        <Contacts deleteContact={deleteUser} contact={search()} />
      </Components>
    </div>
  );
};
