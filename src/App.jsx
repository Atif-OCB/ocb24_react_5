import { useState } from 'react';
import Card from "./components/Card";
import NewTodo from "./components/NewTodo";

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddNewTodo = ({
    title,
    description,
  }) => {
    const newTodoItem = {
      id: Math.random().toString(),
      title,
      description,
      checked: false,
    };

    setTodos((prevTodos) => {
      return [...prevTodos, newTodoItem];
    });

  }

  return (
    <>
      <NewTodo addNewTodo={handleAddNewTodo} />
      {
        todos.map((todo) => {
          return (
            <Card
              id={todo.id}
              key={todo.id}
              title={todo.title}
              description={todo.description}
              checked={todo.checked}
              toggleDone={(event) => {
                // setTest(event.target.checked);
              }}
            />
          );
        })
      }
    </>
  )
}

export default App
