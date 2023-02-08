import axios from "axios";
import {createAsyncThunk}from '@reduxjs/toolkit'

axios.defaults.baseURL='https://63e3ac7a619fce55d41eac51.mockapi.io' 

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
        console.log(data)
        return data
    }catch(error){
        return rejectWithValue(error)
    }
})

export const deleteContact = createAsyncThunk('contacts/delete',
async(id,{rejectWithValue})=>{
    console.log(id)
    try{
        const{data}=await axios.delete(`/contacts/${id}`)
        return data
    }catch(error){
        return rejectWithValue(error)
    }
})
