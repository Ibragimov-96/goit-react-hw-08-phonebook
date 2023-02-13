import styled from 'styled-components'
import {Link} from "react-router-dom";
export const StyleLink = styled(Link)`
text-decoration: none;
background-color: blue;
height: 30px;
padding: 10px;
border-radius: 10px;
color: white;
font-size: 20px;
`
export const Div = styled.div`
display:flex;
justify-content: space-between;
align-items:center;
`
export const Container =styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 500px;`
