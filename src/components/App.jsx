// import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers';
import React, {useEffect } from 'react';
import Form from './Form/Form';

import Components from './Components/Components';
import { useDispatch,useSelector } from 'react-redux';
import { Contacts } from './Contacts/Contacts';
import { Search } from './Search/Search';
import { fetchContact } from 'redux/contact/contactOperations';
import { getFilter, getUsers } from 'redux/contact/userSelector';


export const App = () => {
  const user = useSelector(getUsers);
  const filter = useSelector(getFilter)
  const dispatch = useDispatch()
 
 

  useEffect(() => {
    dispatch(fetchContact())
  }, [ dispatch]);

 
  
  // const userFilter = user => {
  //   setFilter(user);
  // };
  const search = () => {
    if (!filter) {
      return user;
    }
    return user.filter(
      ({ name}) =>
        name.toLowerCase().includes(filter.toLowerCase())
       
    )
  };
  return (
    <div>
      <h1>Phonebook</h1>
      <Components>
        <Form  />
        <Search />
        <h3>Contacts</h3>
        {user.length !== 0&&<Contacts contact={search()} />}
   
      
      </Components>
    </div>
  );
};
