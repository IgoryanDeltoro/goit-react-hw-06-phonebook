import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    setValueFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const { setValueFilter } = filtersSlice.actions;
