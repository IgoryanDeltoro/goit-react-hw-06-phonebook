import { createSlice } from '@reduxjs/toolkit';

const initialState = { filter: '' };

const filtersSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setValueFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const { setValueFilter } = filtersSlice.actions;
