import { configureStore, createSlice } from "@reduxjs/toolkit";

export interface CategoryState {
  value: number;
}

const initialState: CategoryState = {
  value: 0,
};

export const categorySlice = createSlice({
  name: "category",
  initialState: initialState,
  reducers: {
    selector(state, action) {
      return (state.value = action.payload);
    },
  },
});

export const { selector } = categorySlice.actions;

export const categoryStore = configureStore({
  reducer: {
    category: categorySlice.reducer,
  },
});

export type AppDispatch = typeof categoryStore.dispatch;
