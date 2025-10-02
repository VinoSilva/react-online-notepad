// store/notesSlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Note = {
  id: string;
  title: string;
  excerpt: string;
};

export type NotesState = {
  items: Note[];
};

const initialState: NotesState = {
  items: [],
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.items.push(action.payload);
    },
    removeNote: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((note) => note.id !== action.payload);
    },
    updateNote: (state, action: PayloadAction<Note>) => {
      const index = state.items.findIndex((n) => n.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    clearAll: (state) => {
      state.items = [];
    },
  },
});

export const { addNote, removeNote, updateNote, clearAll } = notesSlice.actions;
export default notesSlice.reducer;
