// Import libraries
import { useEffect, useState } from "react";
const AutoGrowTextarea = ({
  value,
  onChange,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  const [ref, setRef] = useState<HTMLTextAreaElement>();

  useEffect(() => {
    const el = ref;
    if (!el) return;
    el.style.height = "auto"; // reset to shrink if needed
    el.style.height = `${el.scrollHeight}px`; // grow to fit content
  }, [value, ref]); // runs whenever text changes

  return (
    <textarea
      {...props}
      ref={(ref) => {
        if (ref) {
          setRef(ref);
        }
      }}
      value={value}
      onChange={onChange}
      className={`resize-none overflow-hidden ${props.className ?? ""}`}
    />
  );
};

export default AutoGrowTextarea;
