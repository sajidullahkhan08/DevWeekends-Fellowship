// ==========================================
// Hooks used: useState
// ==========================================

import { useState } from "react";
import "./App.css";

const data = [
  {
    id: 1,
    title: "What is React?",
    content: "React is a JavaScript library for building user interfaces.",
  },
  {
    id: 2,
    title: "What are Hooks?",
    content:
      "Hooks let you use state and other React features in functional components.",
  },
  {
    id: 3,
    title: "What is useState?",
    content:
      "useState is a Hook that lets you add state to functional components.",
  },
  {
    id: 4,
    title: "What is useEffect?",
    content:
      "useEffect lets you perform side effects in functional components.",
  },
];

function App() {
  const [selected, setSelected] = useState(null);
  const [enableMulti, setEnableMulti] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingle = (id) => {
    setSelected(selected === id ? null : id);
  };

  const handleMulti = (id) => {
    setMultiple(
      multiple.includes(id)
        ? multiple.filter((item) => item !== id)
        : [...multiple, id],
    );
  };

  return (
    <div className="accordion-container">
      <h1>Accordion</h1>
      <button onClick={() => setEnableMulti(!enableMulti)}>
        {enableMulti ? "Disable" : "Enable"} Multi Selection
      </button>

      <div className="accordion">
        {data.map((item) => (
          <div key={item.id} className="accordion-item">
            <div
              className="accordion-title"
              onClick={() =>
                enableMulti ? handleMulti(item.id) : handleSingle(item.id)
              }
            >
              <h3>{item.title}</h3>
              <span>+</span>
            </div>
            {(enableMulti
              ? multiple.includes(item.id)
              : selected === item.id) && (
              <div className="accordion-content">{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
