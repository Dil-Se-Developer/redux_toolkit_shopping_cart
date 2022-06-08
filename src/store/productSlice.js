import { createSlice } from "@reduxjs/toolkit";

const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR:'erroe',
    LOADING: 'loading',
})

const productSlice = createSlice({
  name: "product",
  initialState: {
      data:[],
      status:STATUSES.IDLE,
  },
  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
