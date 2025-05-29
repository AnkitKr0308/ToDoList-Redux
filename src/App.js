import { Provider } from "react-redux";
import "./App.css";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import { store } from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <div className="mx-10 my-10 p-4">
        <ToDoForm />
        <br />
        <ToDoList />
      </div>
    </Provider>
  );
}

export default App;
