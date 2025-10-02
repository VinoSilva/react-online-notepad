// store/notesSlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type ToastData = {
  id: string;
  message: string;
};

export type ToastState = {
  toasts: ToastData[];
};

const initialState: ToastState = {
  toasts: [],
};

const toastsSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    addToast: (state, action: PayloadAction<ToastData>) => {
      state.toasts.push(action.payload);
    },
    removeToast: (state, action: PayloadAction<string>) => {
      state.toasts = state.toasts.filter(
        (toast) => toast.id !== action.payload
      );
    },
  },
});

export const { addToast, removeToast } = toastsSlice.actions;
export default toastsSlice.reducer;
