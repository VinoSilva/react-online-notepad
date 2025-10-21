// Import libraries
import { FaPlus, FaTrashCan, FaDownload } from "react-icons/fa6";
import { nanoid } from "@reduxjs/toolkit";
import { Link, useNavigate } from "react-router-dom";

// Import components
import Button from "@components/shared/Button";
import Drawer, { type DrawerProps } from "@components/shared/Drawer";

import { addNote, clearAll } from "@store/notesSlice";
import { useAppDispatch, useAppSelector } from "@store/index";

// Import constants
import routes from "@constants/route";

// Import redux
import { showDialog } from "@store/dialogSlice";
import { downloadState } from "@store/localStorage";
import { PERSIST_KEY } from "@store/pesistMiddleware";

const NoteCard = ({ excerpt, title }: { title: string; excerpt: string }) => {
  return (
    <div className="p-4 w-full border-[0.5px] border-gray-300 hover:bg-white cursor-pointer min-h-6">
      <h2 className="font-raleway font-bold text-lg">{title}</h2>
      <p className="font-merriweather text-xs">
        {excerpt.slice(0, 30) + "...."}
      </p>
    </div>
  );
};

const NotesDrawer = ({ ...props }: DrawerProps) => {
  const { items } = useAppSelector((state) => state.notes);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const onCreate = () => {
    const id = nanoid();

    dispatch(
      addNote({
        excerpt: "Content",
        title: "New Note",
        id,
      })
    );

    navigate(routes.NOTE.replace(":id", id));
  };

  const onClickDownload = () => {
    downloadState(PERSIST_KEY);
  };

  return (
    <Drawer {...props}>
      <div className="overflow-y-auto max-h-full">
        <div className="flex justify-center mt-5">
          <div className="px-5 w-full flex flex-col gap-2">
            <Button onClick={onCreate} className="w-full">
              Create New
              <FaPlus />
            </Button>
            <div className="flex gap-2 justify-end">
              <button onClick={onClickDownload} className="cursor-pointer">
                <FaDownload className="text-lg" />
              </button>
              <button
                onClick={() => {
                  dispatch(
                    showDialog({
                      content: "Are you sure you want to clear all the notes?",
                      onYes: () => {
                        dispatch(clearAll());
                      },
                    })
                  );
                }}
                className="cursor-pointer"
              >
                <FaTrashCan className="text-lg" />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-5">
          {items.map(({ id, excerpt, title }) => {
            return (
              <Link to={routes.NOTE.replace(":id", id)}>
                <NoteCard excerpt={excerpt} title={title} key={id} />
              </Link>
            );
          })}
        </div>
      </div>
    </Drawer>
  );
};

export default NotesDrawer;
