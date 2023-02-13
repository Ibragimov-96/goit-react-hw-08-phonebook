import { createSlice } from '@reduxjs/toolkit';
const contactsFilter = createSlice({
  name: 'filter',
  initialState: '',
 
});

export const { contactFilter } = contactsFilter.actions;
export default contactsFilter.reducer;
