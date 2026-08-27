import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('#000000');
  const [type, setType] = useState('hex'); // 'hex' or 'rgb'

  const generateHexColor = () => {
    const hex = '0123456789ABCDEF';
    let newColor = '#';
    for (let i = 0; i < 6; i++) {
      newColor += hex[Math.floor(Math.random() * 16)];
    }
    setColor(newColor);
  };

  const generateRgbColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    setColor(`rgb(${r}, ${g}, ${b})`);
  };

  useEffect(() => {
    if (type === 'hex') generateHexColor();
    else generateRgbColor();
  }, [type]);

  return (
    <div className="color-generator" style={{ backgroundColor: color }}>
      <div className="controls">
        <h1>Random Color Generator</h1>
        <div className="buttons">
          <button onClick={() => setType('hex')}>Generate HEX</button>
          <button onClick={() => setType('rgb')}>Generate RGB</button>
        </div>
        <h2>{color}</h2>
      </div>
    </div>
  );
}

export default App;
