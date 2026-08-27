import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [disableButton, setDisableButton] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);
      const data = await response.json();

      if (data && data.products && data.products.length) {
        setProducts([...products, ...data.products]);
      }

      if (data.products.length < 20) {
        setDisableButton(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [count]);

  if (loading && products.length === 0) return <div>Loading products...</div>;

  return (
    <div className="load-more-container">
      <h1>Load More Products</h1>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
      <div className="button-container">
        <button onClick={() => setCount(count + 1)} disabled={disableButton || loading}>
          {loading ? 'Loading...' : 'Load More Products'}
        </button>
        {disableButton && <p>You have reached the end!</p>}
      </div>
    </div>
  );
}

export default App;
