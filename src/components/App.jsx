
import React, {useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';

import { useDispatch,useSelector } from 'react-redux';


import { fetchContact } from 'redux/contact/contactOperations';
import {getToken } from 'redux/contact/userSelector';

import { RegisterForm } from './RegisterForm/Register';
import { LoginForm } from './LogIn/LogIn';
import { Layout } from './Components/Layout/Layout';
import { PhoneContacts } from './Components/PhoneContacts/PhoneContacts';
import { Home } from '../components/Components/Home/Home';

export const App = () => {

  const token = useSelector(getToken)
  const dispatch = useDispatch()
 
 

  useEffect(() => {
    token&&
    dispatch(fetchContact())
  }, [dispatch, token]);

 
  
 
  return (
    <div>
     
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='/contacts' element={<PhoneContacts/>}/>
          <Route path='/register' element={<RegisterForm/>}/>
          <Route path='/logIn' element={<LoginForm/>}/>
          <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      
    </div>
  );
};
