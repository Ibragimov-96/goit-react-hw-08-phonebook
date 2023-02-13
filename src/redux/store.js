import { configureStore } from '@reduxjs/toolkit';

import contactReduser from './contact/contactSlice';





export const store = configureStore({
  reducer: { contacts: contactReduser  },
 
});

