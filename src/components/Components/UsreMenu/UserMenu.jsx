import { useDispatch } from "react-redux"
import { logOut } from "redux/contact/contactOperations"
import { useNavigate } from 'react-router-dom';
import { getEmail } from "redux/contact/userSelector";
import { useSelector } from "react-redux";
export const UserMenu = ()=>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const email = useSelector(getEmail)
    const handellogOut =()=>{
        dispatch(logOut()).unwrap().then(()=>{navigate('/')})
      }
    return(
<div>
    <p>{email}</p>
    <button type="button" onClick={handellogOut}>
      Log Out
    </button>
  </div>)}