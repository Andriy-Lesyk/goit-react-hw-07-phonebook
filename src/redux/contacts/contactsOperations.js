import { createAsyncThunk } from '@reduxjs/toolkit';

/*export const fetchContacts=()=>dispatch=>{
    dispatch(contactsActions.fetchContactsRequest());

    const contacts = fetch(`https://6284af5d3060bbd3473d4a1e.mockapi.io/Contacts`)
  .then(resp=> resp.json())
  .then(contacts=>
  dispatch(contactsActions.fetchContactsSuccess(contacts)))
  .catch((error)=>
  dispatch(contactsActions.fetchContactsError(error)))
  console.log(contacts)
}*/

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_,{ rejectWithValue, fulfillWithValue }) => {
    try {
      const contacts = await fetch(
        `https://6284af5d3060bbd3473d4a1e.mockapi.io/Contacts`
      );
      if (!contacts.ok) {
        return rejectWithValue(contacts.status);
      }
      const data = await contacts.json();
      console.log(data)
      return fulfillWithValue(data);
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);

