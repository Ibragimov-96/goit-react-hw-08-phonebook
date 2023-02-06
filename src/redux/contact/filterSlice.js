import { createSlice } from '@reduxjs/toolkit';
const contactsFilter = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    contactFilter: (_, { payload }) => payload,
  },
});

export const { contactFilter } = contactsFilter.actions;
export default contactsFilter.reducer;
