import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "./authReducer";
export const fetchContacts = createAsyncThunk("contacts/fetchContacts", 
async (_, thunkAPI) => {
    try {
      const response = await instance.get("contacts");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
});
export const addContacts = createAsyncThunk(
    "contacts/addContacts",
    async ({name , numbers}, thunkAPI) => {
      try {
        const response = await instance.post("contacts", {
          name: name,
          number: numbers,
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
        const response = await instance.delete(`contacts/${contactId}`);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );