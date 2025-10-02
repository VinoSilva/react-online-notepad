// store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import notesReducer, { type NotesState } from "./notesSlice";
import toastsReducer from "./toastSlice";
import dialogReducer from "./dialogSlice";
import { loadState } from "./localStorage";
import { persistNotesMiddleware } from "./pesistMiddleware";
import { useDispatch, useSelector } from "react-redux";

const PERSIST_KEY = "notes-app";

const preloadedState = {
  notes: loadState<NotesState>(PERSIST_KEY, { items: [] }),
};

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    toasts: toastsReducer,
    dialog: dialogReducer,
  },
  preloadedState,
  middleware: (getDefault) => getDefault().concat(persistNotesMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>(); // Export a hook that can be reused to resolve types
export const useAppSelector = useSelector.withTypes<RootState>();
