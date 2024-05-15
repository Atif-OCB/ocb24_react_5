import { useState } from 'react';
import Card from "./components/Card";
import NewTodo from "./components/NewTodo";
import RegisterUser from './components/RegisterUser';

const generateRandomHex = () => {
  return Math.floor(Math.random() * 16777215).toString(16);
}

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddNewTodo = ({
    title,
    description,
  }) => {
    const newTodoItem = {
      id: generateRandomHex(),
      title,
      description,
      checked: false,
    };

    setTodos((prevTodos) => {
      return [...prevTodos, newTodoItem];
    });
    // Call API untuk create todo
  };

  const handleChecked = (event) => {
    const targetId = event.target.id;
    const targetChecked = event.target.checked;

    setTodos((prevTodo) => {
      const updatedTodos = prevTodo.map((todo) => {
        // Return early if id not match - because we don't want to change anything
        if (todo.id !== targetId) {
          return todo;
        }

        // Now, since id is matched, we change the `checked`
        const updatedItem = {
          // Copy existing todo item
          ...todo,
          // Update checked
          checked: targetChecked,
        }

        // return updated todo item
        return updatedItem;
      })

      return updatedTodos;
    })

    // Call API untuk update todo
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      padding: '2rem',
    }}>
      <RegisterUser />
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
              toggleDone={handleChecked}
            />
          );
        })
      }
    </div>
  )
}

export default App;


