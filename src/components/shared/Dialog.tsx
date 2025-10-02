// Import libraries
import type { PropsWithChildren } from "react";

// Import components
import Button from "./Button";

interface DialogProps {
  onYes?: () => void;
  onNo?: () => void;
}

const Dialog = ({ children, onNo, onYes }: PropsWithChildren<DialogProps>) => {
  return (
    <>
      <div className="w-full md:w-64 p-4 shadow bg-white rounded-md">
        <div className="flex flex-col gap-4">
          <div>{children}</div>
          <div className="flex justify-end gap-4">
            <Button onClick={onYes}>Yes</Button>
            <Button variant="secondary" onClick={onNo}>
              No
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dialog;
