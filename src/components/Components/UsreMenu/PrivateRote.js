import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getToken } from 'redux/contact/userSelector';


const PrivatRoute = () => {
  const isToken = useSelector(getToken);
  if (!isToken) return <Navigate to={'/'} />;
  return <Outlet/>;
};

export default PrivatRoute;