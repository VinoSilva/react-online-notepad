// store/notesSlice.ts
import type { JSX } from "react";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type DialogData = {
  onYes?: () => void;
  onNo?: () => void;
  content: JSX.Element | string;
};

export type DialogState = DialogData;

const initialState: DialogState = {
  content: "",
};

const toastsSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    showDialog: (_, action: PayloadAction<DialogData>) => {
      return action.payload;
    },
    removeDialog: () => {
      return {
        content: "",
      };
    },
  },
});

export const { showDialog, removeDialog } = toastsSlice.actions;
export default toastsSlice.reducer;
