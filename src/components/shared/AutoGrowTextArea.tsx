// Import libraries
import { useRef, useEffect } from "react";

const AutoGrowTextarea = ({
  value,
  onChange,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.height = "auto"; // reset to shrink if needed
    el.style.height = `${el.scrollHeight}px`; // grow to fit content
  }, [value]); // runs whenever text changes

  return (
    <textarea
      {...props}
      ref={ref}
      value={value}
      onChange={onChange}
      className={`resize-none overflow-hidden ${props.className ?? ""}`}
    />
  );
};

export default AutoGrowTextarea;
