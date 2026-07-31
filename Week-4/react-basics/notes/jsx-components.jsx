// ==========================================
// REACT CONCEPT 1: JSX & FUNCTIONAL COMPONENTS
// ==========================================

/*
 * WHAT IS JSX?
 * JSX is syntax that looks like HTML, but it's actually JavaScript.
 * It lets us write UI markup directly in our JS files.
 *
 * KEY RULES:
 * 1. JSX must return a single parent element (use <div> or <> fragment)
 * 2. Use className instead of class (because class is a reserved word in JS)
 * 3. Use curly braces {} to embed JavaScript expressions
 * 4. Self-closing tags must end with /> (like <img /> or <br />)
 */

// A functional component is just a JavaScript function that returns JSX
function WelcomeMessage() {
  const name = "Alice";
  const isLoggedIn = true;

  return (
    <div>
      {/* Embedding JavaScript with curly braces */}
      <h1>Hello, {name}!</h1>
      <p>Today is {new Date().toLocaleDateString()}</p>

      {/* Conditional rendering with ternary operator */}
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
    </div>
  );
}

// Another component
function UserCard({ username, email, isActive }) {
  return (
    <div className="user-card">
      <h2>{username}</h2>
      <p>Email: {email}</p>
      {/* Conditional rendering: only show if isActive is true */}
      {isActive && <span className="badge">Active User</span>}
    </div>
  );
}

// We can use components like HTML tags
function App() {
  return (
    <div>
      <WelcomeMessage />
      <UserCard username="john_doe" email="john@example.com" isActive={true} />
      <UserCard
        username="jane_smith"
        email="jane@example.com"
        isActive={false}
      />
    </div>
  );
}

export default App;
