// import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers';
import React, { Component } from 'react';
import Form from './Form/Form';
import { nanoid } from 'nanoid';
import Components from './Components/Components';

import { Contacts } from './Contacts/Contacts';
import { Search } from './Search/Search';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    
  };

  addUser = data => {
   
    // repeatUser.map(user => {
    //   if (user.name === data.name) {
    //     return alert(user.name);
    //   }
    // });
    if(this.state.contacts.find(item => item.name === data.name)){return alert(data.name+" уже есть")}

   
    const newUser = { id: nanoid(), ...data };
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, newUser] };
    });
  };
  deleteUser = (id) =>{
    this.setState((prevState)=>{
     
      return{
        contacts:  prevState.contacts.filter(
          user=>user.id !==id)
      }
    })
  }
  filter = user => {
    this.setState({
      filter: user,
    });
  };
  search = () => {
    const filter = this.state.filter;
    const contact = this.state.contacts;
    if (!filter) {
      return contact;
    }
    return contact.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(filter.toLowerCase()) ||
        number.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    return (
      <div
      key={nanoid()}
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
          <Form addForm={this.addUser} />
          <Search contacts={this.filter} />
          <h3>Contacts</h3>
          <Contacts deleteContact={this.deleteUser}contact={this.search()} />
        </Components>
      </div>
    );
  }
}
