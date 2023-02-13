import Form from '../../Form/Form';
import Components from '../Components';
import { Contacts } from '../../../pages/Contacts/Contacts';
import { Search } from '../../Search/Search';
import { useDispatch,useSelector } from 'react-redux';
import React, {useEffect } from 'react';
import { getFilter, getContact,getToken } from 'redux/contact/userSelector';
import { fetchContact } from 'redux/contact/contactOperations';
export const PhoneContacts= ()=>{
    const user = useSelector(getContact);
    const filter = useSelector(getFilter)
    const token = useSelector(getToken)
    const dispatch = useDispatch()
    const search = () => {
        if (!filter) {
          
          return user;
        }
        return user.filter(
          ({ name}) =>
            name.toLowerCase().includes(filter.toLowerCase())
           
        )
      };
   
  
    useEffect(() => {
      token&&
      dispatch(fetchContact())
    }, [dispatch, token]);
    return(<Components>
        <h1>Phonebook</h1>  
        <Form  />
        <Search />
        <h3>Contacts</h3>
        {user.length !== 0&&<Contacts contact={search()} />}
   
        </Components>)
}