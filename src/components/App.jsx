
import React, {useEffect } from 'react';
import Form from './Form/Form';
import { Route, Routes } from 'react-router-dom';
import Components from './Components/Components';
import { useDispatch,useSelector } from 'react-redux';
import { Contacts } from './Contacts/Contacts';
import { Search } from './Search/Search';
import { fetchContact } from 'redux/contact/contactOperations';
import { getFilter, getContact,getToken } from 'redux/contact/userSelector';
import Navigate  from './Navigate/navigate';
import { RegisterForm } from './RegisterForm/Register';
import { LoginForm } from './LogIn/LogIn';
import { Layout } from './Components/Layout/Layout';
import { PhoneContacts } from './Components/PhoneContacts/PhoneContacts';
import { Home } from '../components/Components/Home/Home';
import { Outlet } from "react-router-dom"
export const App = () => {
  const user = useSelector(getContact);
  const filter = useSelector(getFilter)
  const token = useSelector(getToken)
  const dispatch = useDispatch()
 
 

  useEffect(() => {
    token&&
    dispatch(fetchContact())
  }, [dispatch, token]);

 
  
 
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
     
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='/contacts' element={<PhoneContacts/>}/>
          <Route path='/register' element={<RegisterForm/>}/>
          <Route path='/logIn' element={<LoginForm/>}/>
          <Route path="*" element={<Navigate />} />
          </Route>
        </Routes>
      
    </div>
  );
};
