// Import libraries
import React from "react";

const Toast = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="w-32 p-4 border-[1px] border-primary-light  bg-primary font-semibold text-white font-raleway flex justify-start items-center rounded-md h-10">
      {children}
    </div>
  );
};

export default Toast;
