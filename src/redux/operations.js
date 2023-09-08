import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
axios.defaults.baseURL = "https://64f02e228a8b66ecf7793cca.mockapi.io/";
export const fetchContacts = createAsyncThunk("contacts/fetchContacts", 
async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
});
export const addContacts = createAsyncThunk(
    "contacts/addContacts",
    async ({name , numbers}, thunkAPI) => {
      try {
        const response = await axios.post("/contacts", {
          name: name,
          numbers: numbers,
        });
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  export const deleteContacts = createAsyncThunk(
    "contacts/deleteContacts",
    async (contactId, thunkAPI) => {
      try {
        const response = await axios.delete(`/contacts/${contactId}`);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );