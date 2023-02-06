import { ADD_CONTACT, DELETE_CONTACT, FILTER_CONTACT } from './userType';

export const contactReduser = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      return [...state, payload];
    case DELETE_CONTACT:
      return state.filter(user => user.id !== payload.id);
    case FILTER_CONTACT:
      return state.filter(user => user.name !== payload.name);
    default:
      return state;
  }
};
