import { createReducer, combineReducers, createAction } from '@reduxjs/toolkit';
import { fetchContacts } from './contactsOperations';

export const add = createAction('contacts/add')
export const delet = createAction('contacts/delet')

const entities = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  [add]: (state, { payload }) => {
      state.contacts.entities.push(payload)
  },
  [delet]: (state, { payload }) => {
      return {
        contacts: state.contacts.entities.filter(el => el.id !== payload),
      };
    },
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
});

const error = createReducer(null, {
    [fetchContacts.rejected]: (_, action) => action.payload,
    [fetchContacts.pending]: () => null,
})

export default combineReducers({
    entities,
    isLoading,
    error
})