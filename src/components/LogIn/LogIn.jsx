import { useDispatch, } from 'react-redux';
import { logIn } from 'redux/contact/contactOperations';
import { logOut } from 'redux/contact/contactOperations';
import { useSelector } from 'react-redux';
import { getToken,getUsers } from 'redux/contact/userSelector';
import { Div,UserName,Btn } from './LogInStyled';
import { useNavigate } from 'react-router-dom';
import { UserMenu } from 'components/Components/UsreMenu/UserMenu';
export const LoginForm = () => {
  const dispatch = useDispatch();
  
  const navigate = useNavigate()
  const token = useSelector(getToken);
  const name = useSelector(getUsers)
  
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Div>
      
        <form onSubmit={handleSubmit} autoComplete="off">
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <button type="submit">Log In</button>
        </form>
      
      
        
      
    </Div>
  );
};
