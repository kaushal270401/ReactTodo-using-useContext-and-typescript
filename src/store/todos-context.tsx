import React, { useState } from "react";
import Todo from "../Modals/todo";

type todoContext = {
  items: Todo[];
  addTodo: (text:string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<todoContext>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodoContextProvider: React.FC = (props) => {
  const [formData, setFormData] = useState<Todo[]>([]);

  const handleTodo = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setFormData((current) => {
      return current.concat(newTodo);
    });
  };

  const handleDelete = (todoId: string) => {
    setFormData((current) => current.filter((todo) => todo.id !== todoId));
  };

  const contextValue: todoContext= {
    items: formData,
    addTodo: handleTodo,
    removeTodo: handleDelete,
  };

  return (
    <TodosContext.Provider value={contextValue} >
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodoContextProvider;
