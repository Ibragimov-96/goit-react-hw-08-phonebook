import { List, Btn } from './ContactStyle';
import PropTypes from 'prop-types';
export const Contacts = ({ contact, deleteContact }) => {
  return (
    <>
      <ul>
        {contact.map(user => {
          return (
              <List key={user.id}>
                Name:{user.name} Tel:{user.number}
                <Btn onClick={() => deleteContact(user.id)}>Delete</Btn>
              </List>
            
          );
        })}
      </ul>
    </>
  );
};
PropTypes.propTypes = {
  deleteContact: PropTypes.func,
  contact: PropTypes.array,
};
