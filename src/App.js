import "./App.css";
import { ToastContainer } from "react-toastify";
import Todo from "./Components/Todo";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer />
      <Todo />
    </>
  );
}

export default App;
