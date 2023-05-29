import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { fetchContacts } from 'redux/operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload;
    },
    extraReducers: {
      [fetchContacts.pending](state) {
        state.isLoading = true;
      },
      [fetchContacts.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      },
      [fetchContacts.rejected](state, action) {
        state.isLoading = false;
        state.error = action.payload;
      },
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactsReducer = contactsSlice.reducer;

export const { changeFilter } = contactsSlice.actions;
