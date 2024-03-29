import axios from "axios";
import {createAsyncThunk}from '@reduxjs/toolkit'

axios.defaults.baseURL='https://connections-api.herokuapp.com/' 

// const token ={
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// }


  // export const register = createAsyncThunk(
  //   'auth/register',
  //   async (credentials, thunkAPI) => {
  //     try {
      
  //       const {data} = await axios.post('/users/signup', credentials);
  //       // After successful registration, add the token to the HTTP header
  //      token.set(data.token)
  //       return data;
  //     } catch (error) {console.log(error)
  //       alert('Проверте введенные данные')
  //       return thunkAPI.rejectWithValue(error.message);
  //     }
  //   }
  // );
  // export const logIn = createAsyncThunk(
  //   'auth/login',
  //   async (credentials, thunkAPI) => {
  //     console.log(thunkAPI)
  //     try {
  //       const {data} = await axios.post('/users/login', credentials);
  //       // After successful login, add the token to the HTTP header
  //       token.set(data.token)
  //       return data;
  //     } catch (error) {
  //       alert('Проверте введенные данные')
  //       return thunkAPI.rejectWithValue(error.message);
  //     }
  //   }
  // );
  export const newContact = createAsyncThunk(
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
// export const addContact = createAsyncThunk('contacts/add',
// async(contact,{rejectWithValue})=>{
    
//     try{
//         const{data}=await axios.post('/contacts',contact)
      
//         return data
//     }catch(error){
//         return rejectWithValue(error)
//     }
// })

export const deleteContact = createAsyncThunk('contacts/delete',
async(id,{rejectWithValue})=>{
  
    try{
        const{data}=await axios.delete(`/contacts/${id}`)
        
        return data
    }catch(error){
        return rejectWithValue(error)
    }
})

// export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
//     try {
//       await axios.post('/users/logout');

//       token.unset()
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   });
