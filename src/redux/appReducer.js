import { createSlice } from '@reduxjs/toolkit';
import {addContacts, deleteContacts, fetchContacts } from './operations';


export const initialState = {
  contacts: {
  items: [],
  isLoading: false,
  error: null,
},
  filter: '',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
 reducers:{
  setFilter(state, action) {
    state.filter = action.payload;
  },
 },
    extraReducers:(builder) => {
      builder
      .addCase(fetchContacts.pending,state =>{
        state.contacts.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled,(state, action)=>{
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = action.payload;
      })
      .addCase(fetchContacts.rejected,(state, action)=>{
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      })
      .addCase(addContacts.pending,(state)=>{
        state.contacts.isLoading = true;
      })
      .addCase(addContacts.fulfilled,(state, action)=>{
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items.push(action.payload);
      })
      .addCase(addContacts.rejected,(state, action)=>{
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      })
      .addCase(deleteContacts.pending,(state)=>{
        state.contacts.isLoading = true;
      })
      .addCase(deleteContacts.fulfilled,(state, action)=>{
        state.contacts.isLoading = false;
        state.contacts.error = null;
        const index = state.contacts.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.items.splice(index, 1);
      })
      .addCase(deleteContacts.rejected,(state, action)=>{
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = action.payload;
      })
    }
  });
// Генератори екшенів
export const {setFilter} = appSlice.actions;

//Селектори
export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
// Редюсер слайсу
export const appReducer = appSlice.reducer;


//export const appReducer = (state = initialState, action) => {
//  switch (action.type) {
//   case 'app/setContacts': {
//      return { ...state, contacts: action.payload };
//   }
//   case 'app/deleteContacts': {
//      return { ...state, contacts: action.payload };
//   }
//  case 'app/filterContacts': {
//    return { ...state, filter: action.payload };
//   }
//   default:
//     return state;
// }
//};
//export const setContacts = (payload)=>{
//  return {
//   type:"app/addContacts",
//    payload,
//  }
//}
//export const setDelete = (payload)=>{
//  return {
//    type:"app/deleteContacts",
//    payload,
//  }
//}
//export const setFilter = (payload)=>{
//  return {
//    type:"app/filterContacts",
//    payload
//  }
//}
