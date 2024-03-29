import { useDispatch, } from 'react-redux';
import { logIn } from 'redux/UserApi/UserApi'; 
import { useNavigate } from 'react-router-dom';

import { Div,} from './LogInStyled';


export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    ).unwrap().then(()=>{navigate('/contacts')});
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
