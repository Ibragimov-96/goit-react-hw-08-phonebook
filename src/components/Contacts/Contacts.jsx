import { List, Btn } from './ContactStyle';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { deleteContact } from 'redux/contact/contactSlice';

import { getFilter, getUsers } from 'redux/contact/userSelector';
export const Contacts = () => {
  const user = useSelector(getUsers);
  const filter = useSelector(getFilter);
  const filterContacts = user.filter(user =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  const dispatch = useDispatch();

  return (
    <>
      <ul>
        {filterContacts.map(user => {
          return (
            <List key={user.id}>
              Name:{user.name} Tel:{user.number}
              <Btn onClick={() => dispatch(deleteContact(user.id))}>Delete</Btn>
            </List>
          );
        })}
      </ul>
    </>
  );
};
