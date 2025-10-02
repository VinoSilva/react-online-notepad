import "./App.css";

// Import libraries
import { FaBars } from "react-icons/fa6";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

// Import hooks
import useBoolean from "@hooks/useBoolean";

// Import components
import NotesDrawer from "@components/Home/NotesDrawer";
import ToastContainer from "@components/ToastContainer";

// Import constants
import routes from "@constants/route";

// Import pages
import Home from "@pages/Home";
import Note from "@pages/Note";

// Import store
import { store } from "./store";
import DialogContainer from "@components/DialogContainer";

const Navbar = ({ onClickMenu }: { onClickMenu?: () => void }) => {
  return (
    <div className="flex gap-4 bg-primary-light items-center p-2 text-white sticky top-0 z-50">
      <button onClick={onClickMenu} className="cursor-pointer">
        <FaBars className="text-xl" />
      </button>
      <h1 className="font-semibold font-raleway text-xl">Online Notepad</h1>
    </div>
  );
};

function App() {
  const { toggle, val } = useBoolean(true);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar onClickMenu={toggle} />
        <NotesDrawer width={300} visible={val} onClose={toggle} />
        <Routes>
          <Route path={routes.HOME} element={<Home />} />
          <Route path={routes.NOTE} element={<Note />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
      <DialogContainer />
    </Provider>
  );
}

export default App;
