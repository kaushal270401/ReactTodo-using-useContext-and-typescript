import Todos from "./Components/Todos";
import NewTodo from "./Components/NewTodo";
import TodoContextProvider from "./store/todos-context";

function App() {
  return (
    <TodoContextProvider>
      <NewTodo />
      <Todos />
    </TodoContextProvider>
  );
}

export default App;
