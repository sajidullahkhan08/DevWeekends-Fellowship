// ==========================================
// REACT CONCEPT 5: CONDITIONAL & LIST RENDERING
// ==========================================

/*
 * CONDITIONAL RENDERING:
 * React doesn't have v-if or *ngIf. We use JavaScript logic:
 * 1. Ternary operator: condition ? true : false
 * 2. Logical AND: condition && <Component />
 * 3. Early return: if (condition) return null;
 */

import { useState } from "react";

function LoginToggle() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {/* Ternary operator */}
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}

      {/* Logical AND */}
      {isLoggedIn && <p>Welcome back, user!</p>}
    </div>
  );
}

/*
 * LIST RENDERING:
 * Use the map() function to transform an array of data into an array of JSX elements.
 *
 * CRITICAL: Every item in a list MUST have a unique "key" prop.
 * Keys help React identify which items changed, were added, or removed.
 * This makes re-rendering efficient.
 *
 * BAD: Using array index as key (only okay if list never reorders)
 * GOOD: Using unique IDs from your data
 */

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a project", completed: false },
    { id: 3, text: "Deploy to production", completed: false },
  ]);

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id} // UNIQUE KEY IS REQUIRED!
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            cursor: "pointer",
          }}
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
}

export { LoginToggle, TodoList };
