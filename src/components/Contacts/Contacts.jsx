import { List, Btn } from './ContactStyle';
import {  useDispatch } from 'react-redux/es/exports';
import { deleteContact } from 'redux/contact/contactOperations';
import PropTypes from 'prop-types';

export const Contacts = ({contact}) => {
  



  const dispatch = useDispatch();

  return (
    <>
      <ul>
        {contact.map(user => {
          return (
            <List key={user.id}>
              Name:{user.name} Tel:{user.number}
              <Btn onClick={()=>dispatch(deleteContact(user.id))}>Delete</Btn>
            </List>
          );
        })}
      </ul>
    </>
  );
};
Contacts.propTypes = {
  contact:PropTypes.array
}