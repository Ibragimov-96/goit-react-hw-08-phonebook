import { createSlice } from '@reduxjs/toolkit';
import { fetchContact, addContact, deleteContact } from './contactOperations';
const contactSlice = createSlice({
  name: 'user',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
    
        state.items = [...payload];
      })
      .addCase(fetchContact.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(addContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(payload);
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items=state.items.filter(contact=> contact.id !== payload.id);
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export default contactSlice.reducer;
