import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContact } from 'redux/contact/contactOperations';
import { getToken } from 'redux/contact/userSelector';
import { RegisterForm } from '../pages/RegisterForm/Register';
import { LoginForm } from '../pages/LogIn/LogIn';
import { Layout } from './Components/Layout/Layout';
import { PhoneContacts } from './Components/PhoneContacts/PhoneContacts';
import { Home } from '../components/Components/Home/Home';
import PrivateRoute from './Components/UsreMenu/PrivateRote';
import PublicRoute from './Components/UsreMenu/PublickRoute';
export const App = () => {
  const token = useSelector(getToken);
  const dispatch = useDispatch();

  useEffect(() => {
    token && dispatch(fetchContact());
  }, [dispatch, token]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route element={<PrivateRoute/>}>
            <Route path='contacts' element={<PhoneContacts />}/>
          </Route>
          <Route element={<PublicRoute />}>
            <Route path="register" element={<RegisterForm />} />
          </Route>
          <Route element={<PublicRoute />}>
            <Route path="logIn" element={<LoginForm />} />
          </Route>
        
         
          <Route path="*" element={token?<PhoneContacts/>:<Home />} />
        </Route>
      </Routes>
    </div>
  );
};
