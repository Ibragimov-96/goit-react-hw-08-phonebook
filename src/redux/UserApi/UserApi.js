import axios from "axios";
import {createAsyncThunk}from '@reduxjs/toolkit'

axios.defaults.baseURL='https://connections-api.herokuapp.com/' 

const token ={
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
}


  export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
      try {
      
        const {data} = await axios.post('/users/signup', credentials);
        // After successful registration, add the token to the HTTP header
       token.set(data.token)
        return data;
      } catch (error) {console.log(error)
        alert('Проверте введенные данные')
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
      
      try {
        const {data} = await axios.post('/users/login', credentials);
        // After successful login, add the token to the HTTP header
        token.set(data.token)
        return data;
      } catch (error) {
        alert('Проверте введенные данные')
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');

      token.unset()
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });