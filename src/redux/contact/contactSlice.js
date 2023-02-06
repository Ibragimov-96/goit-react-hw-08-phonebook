import { createSlice } from '@reduxjs/toolkit';
const contactSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
  },
  reducers: {
    addContact: (state, { payload }) => {
      if(state.users.find(item => item.name === payload.name)){return alert(payload.name+" уже есть")}
      
      state.users.push(payload);
    },
    deleteContact: (state, { payload }) => {
      state.users = state.users.filter(user => user.id !== payload);
    },
  },
});
export const { addContact, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;
