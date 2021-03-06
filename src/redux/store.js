import { configureStore, createSlice } from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import contactsReducer from './contacts/contactsReducer';

/*const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  },
  reducers: {
    add(state, { payload }) {
      state.contacts.push(payload);
    },
    delet(state, { payload }) {
      return {
        contacts: state.contacts.filter(el => el.id !== payload),
      };
    },
  },
});*/

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    inputFilter(state, { payload }) {
      return {
        filter: payload,
      };
    },
  },
});

export const { inputFilter } = filterSlice.actions;
/*export const { add } = contactsSlice.actions;
export const { delet } = contactsSlice.actions;*/


export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store
