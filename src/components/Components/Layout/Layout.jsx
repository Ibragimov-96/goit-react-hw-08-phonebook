import {Link} from "react-router-dom";
import { Outlet } from "react-router-dom"

import { Nav,Div } from '../../Navigate/NavigateStyle';
import { useSelector } from "react-redux";
import { getToken } from "redux/contact/userSelector";
import Navigate from '../../Navigate/navigate'
import { UserMenu } from "../UsreMenu/UserMenu";

export const Layout =()=>{
    const token = useSelector(getToken)
    return( <div>
       
        <Link to='/contacts'>PhoneBook</Link>
       {token?<UserMenu/>:<Navigate/>}
        
    
        <Outlet/>
    </div>)
}