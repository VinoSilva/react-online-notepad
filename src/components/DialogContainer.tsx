// Import redux
import { useAppDispatch, useAppSelector } from "@store/index";

// Import component
import Dialog from "./shared/Dialog";
import { removeDialog } from "@store/dialogSlice";

const DialogContainer = () => {
  const { content, onNo, onYes } = useAppSelector((state) => state.dialog);

  const dispatch = useAppDispatch();

  const showDialog = !!content;

  return showDialog ? (
    <div className="absolute bg-black opacity-50 z-30 top-0 h-screen w-full flex justify-center items-center">
      <Dialog
        onNo={() => {
          if (onNo) {
            onNo();
          }

          dispatch(removeDialog());
        }}
        onYes={() => {
          if (onYes) {
            onYes();
          }

          dispatch(removeDialog());
        }}
      >
        {content}
      </Dialog>
    </div>
  ) : (
    <></>
  );
};

export default DialogContainer;
