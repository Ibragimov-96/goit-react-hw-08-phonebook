import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from 'redux/UserApi/UserApi'; 
import { Div } from './RegisterStyle';

export const RegisterForm = () => {
  const dispatch = useDispatch();
const navigate = useNavigate()
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    ).unwrap().then(()=>{navigate('/logIn')});
    form.reset();
  };

  return (<Div>
     <form  onSubmit={handleSubmit} autoComplete="off">
      <label >
        Username
        <input type="text" name="name" />
      </label>
      <label >
        Email
        <input type="email" name="email" />
      </label>
      <label >
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  </Div>
   
  );
};