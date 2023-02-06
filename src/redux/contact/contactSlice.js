import { createSlice } from '@reduxjs/toolkit';
const contactSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
  },
  reducers: {
    addContact: (state, { payload }) => {
      state.users.push(payload);
    },
    deleteContact: (state, { payload }) => {
      state.users = state.users.filter(user => user.id !== payload);
    },
  },
});
export const { addContact, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;
