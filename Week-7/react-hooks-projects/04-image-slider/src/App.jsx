import { useState, useEffect } from 'react';
import './App.css';

const images = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
  'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800'
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  const handlePrev = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(handleNext, 3000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <div className="slider-container">
      <h1>Image Slider</h1>
      <div className="slider">
        <button onClick={handlePrev} className="nav-btn">❮</button>
        <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
        <button onClick={handleNext} className="nav-btn">❯</button>
      </div>
      <div className="indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === currentSlide ? 'dot active' : 'dot'}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default App;
