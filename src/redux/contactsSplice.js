import { contactsInitialState } from './contactsInitialState';

const { createSlice, nanoid } = require('@reduxjs/toolkit');

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContacts: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            ...text,
            id: nanoid(),
          },
        };
      },
    },
    deleteContacts(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
    setValueFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContacts, deleteContacts, setValueFilter } =
  contactsSlice.actions;
