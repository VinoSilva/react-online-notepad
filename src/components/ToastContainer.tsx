// Import libraries
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import redux
import { useAppDispatch, useAppSelector } from "@store/index";
import { removeToast } from "@store/toastSlice";

// Import components
import Toast from "./shared/Toast";

const ToastContainer = () => {
  const { toasts } = useAppSelector((state) => state.toasts);

  const dispatch = useAppDispatch();
  const deleteQueue = useRef<string[]>([]);

  useEffect(() => {
    toasts.forEach(({ id }) => {
      if (!deleteQueue.current.includes(id)) {
        deleteQueue.current.push(id);
        setTimeout(() => {
          deleteQueue.current = deleteQueue.current.filter((el) => el !== id);
          dispatch(removeToast(id));
        }, 5000);
      }
    });
  }, [toasts, dispatch]);

  return (
    <div className="fixed bottom-10 right-10 flex flex-col gap-4">
      <AnimatePresence>
        {toasts.map(({ id, message }) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, x: 100 }} // slide in from right
            animate={{ opacity: 1, x: 0 }} // stay in place
            exit={{ opacity: 0, x: 100 }} // slide out to right
            transition={{ duration: 0.3 }}
          >
            <Toast>{message}</Toast>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ToastContainer;
