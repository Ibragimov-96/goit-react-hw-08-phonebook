import { configureStore } from '@reduxjs/toolkit';

import contactReduser from './contact/contactSlice';
import filterReduser from './contact/filterSlice';




export const store = configureStore({
  reducer: { contacts: contactReduser , filter: filterReduser },
 
});

