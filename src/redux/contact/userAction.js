import { ADD_CONTACT, DELETE_CONTACT, FILTER_CONTACT } from './userType';
export const addContact = user => ({
  type: ADD_CONTACT,
  payload: user,
});
export const deleteContact = id => ({
  type: DELETE_CONTACT,
  payload: id,
});
export const filterContact = user => ({
  type: FILTER_CONTACT,
  payload: user,
});
