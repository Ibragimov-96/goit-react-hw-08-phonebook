import { createSlice } from '@reduxjs/toolkit';
import { fetchContact,logIn, logOut,addContact, deleteContact } from './contactOperations';

const contactSlice = createSlice({
  name: 'user',
  initialState: {
    contact:[],
    user: {name:null, email:null},
    token: null,
    filter:'',
    isLoading:false
  },
  reducers: {
    contactFilter: (state,  {payload} ) => {state.filter = payload}
    
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.contact = payload;
      })
      .addCase(fetchContact.rejected, (state,{payload})=>{
        
        state.error = null
       
      })
      .addCase(logIn.pending, state => {
        state.isLoading = true;
      })
      .addCase(logIn.fulfilled, (state,{payload})=>{
        state.user.name = payload.user.name
        state.user.email = payload.user.email
        state.token = payload.token
      })
      .addCase(logIn.rejected, (state,{payload})=>{
        
        state.error = null
       
      })
      .addCase(logOut.pending, state => {
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, (state,{payload})=>{
        state.user.name = null
        state.user.email = null
        state.contact = []
        state.token = null
      }).addCase(logOut.rejected, (state,{payload})=>{
        
        state.error = null
       
      })
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state,{payload})=>{
        
        state.contact = state.contact.filter(contacts => contacts.id !== payload.id)
      })
      .addCase(deleteContact.rejected, (state,{payload})=>{
        
        state.error = null
       
      })
  },
});

export default contactSlice.reducer;
export const {contactFilter}= contactSlice.actions