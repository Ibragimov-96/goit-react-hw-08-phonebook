// import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers';
import React, { useState, useEffect } from 'react';
import Form from './Form/Form';
import { nanoid } from 'nanoid';
import Components from './Components/Components';

import { Contacts } from './Contacts/Contacts';
import { Search } from './Search/Search';
export const App =()=>{
 
const [contacts, setContats]=useState(()=>{return JSON.parse(localStorage.getItem('contacts'))||[]})
const [filter, setFilter]=useState('')

useEffect(()=>{
  window.localStorage.setItem('contacts', JSON.stringify(contacts) )
},[contacts])


  
  const addUser = data => {
   
  
    if(contacts.find(item => item.name === data.name)){return alert(data.name+" уже есть")}

   
    const newUser = { id: nanoid(), ...data };
    setContats([...contacts,newUser])
    
  };
 const  deleteUser = (id) =>{
   
      setContats(contacts.filter(
        user=>user.id !==id))
     
    
  }
  const Userfilter = user => {
    setFilter(user)

  };
  const search = () => {
    const filte = filter;
    const contact = contacts;
    if (!filte) {
      return contact;
    }
    return contact.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(filte.toLowerCase()) ||
        number.toLowerCase().includes(filte.toLowerCase())
    );
  };
  return (
    <div
    
      style={{
        fontFamily:"Monospace",
       
      display:'grid',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <Components>
        <Form addForm={addUser} />
        <Search contacts={Userfilter} />
        <h3>Contacts</h3>
        <Contacts deleteContact={deleteUser}contact={search()} />
      </Components>
    </div>
  )
  
}
