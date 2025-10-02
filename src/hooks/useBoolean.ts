// Import libraries
import { useState } from "react";

const useBoolean = (initialValue?: boolean) => {
  const [val, setVal] = useState(initialValue);

  const toggle = () => {
    setVal((prev) => !prev);
  };

  return {
    val,
    toggle,
  };
};

export default useBoolean;
