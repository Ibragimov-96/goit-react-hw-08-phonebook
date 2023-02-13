import { useSelector } from 'react-redux';
import { Navigate,Outlet } from 'react-router-dom';
import { getToken } from 'redux/contact/userSelector';
import {  useLocation } from 'react-router-dom';


const PublicRoute = () => {
  const { state } = useLocation();
  const isToken = useSelector(getToken);
  if (isToken) return <Navigate to={state ? state : '/'} />;
  return <Outlet />;
};

export default PublicRoute;