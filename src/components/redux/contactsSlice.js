import { createSlice } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

const contactsInitialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        const isAlreadyInContacts = state.contacts.some(
          contact =>
            contact.name.toLowerCase() === action.payload.name.toLowerCase()
        );
        if (isAlreadyInContacts) {
          Notiflix.Report.failure(
            `${action.payload.name}: is already in your contacts`
          );
          return state;
        } else {
          state.contacts.push(action.payload);
        }
      },
      prepare(id, name, number) {
        return {
          payload: {
            id,
            name,
            number,
          },
        };
      },
    },

    deleteContact(state, action) {
      return {
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
