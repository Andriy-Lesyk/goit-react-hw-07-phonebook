import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
      const contacts = await fetch(
        `https://6284af5d3060bbd3473d4a1e.mockapi.io/Contacts`
      );
      if (!contacts.ok) {
        return rejectWithValue(contacts.status);
      }
      const data = await contacts.json();

      return fulfillWithValue(data);
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async (contact, { rejectWithValue, fulfillWithValue }) => {
    try {
      const contacts = await fetch(
        `https://6284af5d3060bbd3473d4a1e.mockapi.io/Contacts`,
        {
          method: 'POST',
          body: JSON.stringify(contact),
          headers: { 'Content-Type': 'application/json' },
        }
      );
      if (!contacts.ok) {
        return rejectWithValue(contacts.status);
      }
      const data = await contacts.json();
      return fulfillWithValue(data);
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, { rejectWithValue, fulfillWithValue }) => {
    try {
      const contacts = await fetch(
        `https://6284af5d3060bbd3473d4a1e.mockapi.io/Contacts/${id}`,
        { method: 'DELETE' }
      );
      if (!contacts.ok) {
        return rejectWithValue(contacts.status);
      }
      const data = await contacts.json();

      return fulfillWithValue(data);
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);
