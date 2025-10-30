// Import libraries
import { useState } from "react";
import { FaTrash } from "react-icons/fa6";

// Import components
import AutoGrowTextarea from "@components/shared/AutoGrowTextArea";

type NoteValues = {
  title: string;
  excerpt: string;
};

interface NoteFormProps {
  initialValues?: NoteValues;
  onClickDelete?: () => void;
  onSubmit: (val: NoteValues) => void;
}

const NoteForm = ({
  initialValues,
  onClickDelete,
  onSubmit,
}: NoteFormProps) => {
  const [val, setVal] = useState<NoteValues>(
    initialValues || { excerpt: "", title: "" }
  );

  const handleKeyDown = (
    e:
      | React.KeyboardEvent<HTMLTextAreaElement>
      | React.KeyboardEvent<HTMLInputElement>
  ) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "s") {
      e.preventDefault(); // stop browser "Save Page"
      onSubmit(val);
      // 👉 call your Redux action, API, etc.
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="flex flex-col h-full"
    >
      <div className="flex h-10 border-b-[0.5px] border-gray-400">
        <div className="w-full border-r-[0.5px] border-gray-400">
          <input
            type="text"
            className="w-full h-full outline-none ring-0 pl-4 text-lg font-raleway"
            name="title"
            value={val.title}
            onChange={(e) => {
              setVal((prev) => ({
                ...prev,
                title: e.target.value,
              }));
            }}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="w-16 flex justify-center items-center">
          <button
            type="button"
            onClick={onClickDelete}
            className="cursor-pointer"
          >
            <FaTrash />
          </button>
        </div>
      </div>
      <div className="flex-1 p-4">
        <AutoGrowTextarea
          value={val.excerpt}
          onChange={(e) => {
            setVal((prev) => ({
              ...prev,
              excerpt: e.target.value,
            }));
          }}
          className="w-full h-full ring-0 outline-none resize-none"
          placeholder="Start writing..."
          onKeyDown={handleKeyDown}
        />
      </div>
    </form>
  );
};

export default NoteForm;
