// ==========================================
// REACT CONCEPT 3: useState HOOK
// ==========================================

/*
 * WHAT IS useState?
 * useState is a Hook that lets us add state to functional components.
 * State is data that changes over time and causes the component to re-render.
 *
 * SYNTAX:
 * const [stateVariable, setStateFunction] = useState(initialValue);
 *
 * IMPORTANT:
 * - NEVER mutate state directly (like stateVariable = newValue)
 * - ALWAYS use the setter function (setStateFunction(newValue))
 * - When state changes, React re-renders the component
 */

import { useState } from "react";

function Counter() {
  // Declare a state variable called "count" with initial value 0
  // setCount is the function we use to update it
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Increment</button>

      <button onClick={() => setCount(count - 1)}>Decrement</button>

      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

// Example with object state
function UserProfile() {
  // State can be objects, arrays, strings, numbers, etc.
  const [user, setUser] = useState({
    name: "Alice",
    age: 25,
    email: "alice@example.com",
  });

  const handleAgeIncrease = () => {
    // IMPORTANT: When updating object state, create a NEW object
    // Use the spread operator (...) to copy existing properties
    setUser({ ...user, age: user.age + 1 });
  };

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <button onClick={handleAgeIncrease}>Birthday!</button>
    </div>
  );
}

export { Counter, UserProfile };
