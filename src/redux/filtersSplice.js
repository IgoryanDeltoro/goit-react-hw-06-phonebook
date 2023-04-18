import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const filtersSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setValueFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const { setValueFilter } = filtersSlice.actions;
