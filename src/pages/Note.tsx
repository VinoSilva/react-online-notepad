// Import components
import NoteForm from "@components/Note/NoteForm";

// Import constants
import routes from "@constants/route";
import { nanoid } from "@reduxjs/toolkit";
import { showDialog } from "@store/dialogSlice";

// Import redux
import { useAppDispatch, useAppSelector } from "@store/index";
import { removeNote, updateNote } from "@store/notesSlice";
import { addToast } from "@store/toastSlice";

// Import libraries
import { Navigate, useParams } from "react-router-dom";

const Note = () => {
  const params = useParams<{ id: string }>();

  const { items } = useAppSelector((state) => state.notes);

  const dispatch = useAppDispatch();

  const val = items.find((el) => el.id === params.id);

  if (!params.id || !val) {
    return <Navigate to={routes.HOME} />;
  }

  return (
    <div className="min-h-screen h-full">
      <NoteForm
        key={params.id}
        onSubmit={(val) => {
          dispatch(
            updateNote({
              ...val,
              id: params.id as string,
            })
          );

          dispatch(addToast({ id: nanoid(), message: "Saved" }));
        }}
        initialValues={val}
        onClickDelete={() => {
          dispatch(
            showDialog({
              content: "Are you sure you want to delete this note?",
              onYes: () => {
                dispatch(removeNote(params.id as string));
              },
            })
          );
        }}
      />
    </div>
  );
};

export default Note;
