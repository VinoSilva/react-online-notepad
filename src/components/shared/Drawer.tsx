import React from "react";

export interface DrawerProps {
  visible?: boolean;
  width?: number;
  onClose?: () => void;
}

const Drawer = ({
  visible,
  children,
  width = 200,
  onClose,
}: React.PropsWithChildren<DrawerProps>) => {
  if (!visible) {
    return <></>;
  }

  return (
    <>
      <div
        className="left-0 h-screen fixed bg-gray-100 shadow-2xl z-20"
        style={{ width }}
      >
        {children}
      </div>
      <div
        className="z-10 bg-black opacity-50 w-full h-screen fixed"
        onClick={onClose}
      />
    </>
  );
};

export default Drawer;
