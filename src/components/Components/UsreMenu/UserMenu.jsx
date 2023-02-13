import { useDispatch } from "react-redux"
import { logOut } from "redux/UserApi/UserApi"; 
import { useNavigate } from 'react-router-dom';
import { getEmail } from "redux/contact/userSelector";
import { useSelector } from "react-redux";
import { Div,Btn} from "./userStyle";
export const UserMenu = ()=>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const email = useSelector(getEmail)
    const handellogOut =()=>{
        dispatch(logOut()).unwrap().then(()=>{navigate('/')})
      }
    return(
<Div>
    <h3>{email}</h3>
    <Btn type="button" onClick={handellogOut}>
      Log Out
    </Btn>
  </Div>)}