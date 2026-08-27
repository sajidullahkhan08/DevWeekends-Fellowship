import { useState } from 'react';
import './App.css';

function StarRating({ totalStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index) => {
    setRating(index);
  };

  const handleMouseEnter = (index) => {
    setHover(index);
  };

  const handleMouseLeave = () => {
    setHover(rating);
  };

  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((_, index) => {
        index += 1;
        return (
          <span
            key={index}
            className={index <= (hover || rating) ? 'star filled' : 'star'}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            &#9733;
          </span>
        );
      })}
      <p>Rating: {rating} / {totalStars}</p>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <h1>Star Rating Component</h1>
      <StarRating totalStars={10} />
    </div>
  );
}

export default App;
