import axios from "axios";
import {createAsyncThunk}from '@reduxjs/toolkit'

axios.defaults.baseURL='https://connections-api.herokuapp.com/' 

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

  const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
  };

  export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
      try {
        const res = await axios.post('/users/signup', credentials);
        // After successful registration, add the token to the HTTP header
       
        return res.data;
      } catch (error) {console.log(error)
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
      try {
        const res = await axios.post('/users/login', credentials);
        // After successful login, add the token to the HTTP header
        setAuthHeader(res.data.token);
        return res.data;
      } catch (error) {
        alert('Проверте введенные данные')
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  export const NewContact = createAsyncThunk(
    'contact/newContact',
    async (contact, thunkAPI) => {
      try {
        const res = await axios.post('/contacts', contact);
        // After successful registration, add the token to the HTTP header
        
        thunkAPI.dispatch(fetchContact())
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
export const fetchContact = createAsyncThunk('contacts/fetch',
async(_,{rejectWithValue})=>{
    try{
      
        const {data} = await axios('/contacts')
       
        return data
    
    }catch(error){
        return rejectWithValue(error)
    }
    
})
export const addContact = createAsyncThunk('contacts/add',
async(contact,{rejectWithValue})=>{
    
    try{
        const{data}=await axios.post('/contacts',contact)
      
        return data
    }catch(error){
        return rejectWithValue(error)
    }
})

export const deleteContact = createAsyncThunk('contacts/delete',
async(id,{rejectWithValue})=>{
  
    try{
        const{data}=await axios.delete(`/contacts/${id}`)
        
        return data
    }catch(error){
        return rejectWithValue(error)
    }
})

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');

      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });
