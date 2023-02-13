import { createSlice } from '@reduxjs/toolkit';
import { fetchContact, deleteContact } from './contactOperations';
import { logIn,logOut,register } from 'redux/UserApi/UserApi';

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
        
        state.error = payload
       
      })
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user.name = payload.user.name
        state.user.email = payload.user.email
        state.token = payload.token
      })
      .addCase(register.rejected, (state,{payload})=>{
        
        state.error = payload
       
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
        
        state.error = payload
       
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
        
        state.error = payload
       
      })
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state,{payload})=>{
        
        state.contact = state.contact.filter(contacts => contacts.id !== payload.id)
      })
      .addCase(deleteContact.rejected, (state,{payload})=>{
        
        state.error = payload
       
      })
  },
});

export default contactSlice.reducer;
export const {contactFilter}= contactSlice.actions