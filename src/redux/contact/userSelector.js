export const getUsers = state => state.contacts.user.name;
export const getEmail = state=>state.contacts.user.email
export const getFilter = state => state.contacts.filter;
export const isLoading= state => state.contacts.isLoading
export const getContact = state => state.contacts.contact
export const getToken =state=> state.contacts.token