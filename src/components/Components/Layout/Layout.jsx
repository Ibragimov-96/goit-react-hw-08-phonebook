
import { Outlet } from "react-router-dom"
import { StyleLink,Div,Container } from "./StyleLyout";

import { useSelector } from "react-redux";
import { getToken } from "redux/contact/userSelector";
import Navigate from '../../Navigate/navigate'
import { UserMenu } from "../UsreMenu/UserMenu";

export const Layout =()=>{
    const token = useSelector(getToken)
    return( <Container><Div>
       
        <StyleLink to='/contacts'>PhoneBook</StyleLink>
       {token?<UserMenu/>:<Navigate/>}
        
        
    </Div><Outlet/></Container>)
}