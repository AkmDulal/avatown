import { createSlice } from '@reduxjs/toolkit';
interface ApiState {
  data: any[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  loading: boolean | null;
}

const initialState: ApiState = {
  data: [],
  status: 'idle',
  loading: false,
  error: null,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getDataStart: (state, action) => {
      state.data = action.payload;
      state.loading = true;
      state.error = null;
    },
    getDataSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
  },
});

export const { getDataStart } = productSlice.actions;

export default productSlice.reducer;
