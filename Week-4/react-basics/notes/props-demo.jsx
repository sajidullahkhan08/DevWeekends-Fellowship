// ==========================================
// REACT CONCEPT 2: PROPS (PROPERTIES)
// ==========================================

/*
 * WHAT ARE PROPS?
 * Props are how we pass data FROM a parent component TO a child component.
 * They are READ-ONLY (immutable). A child cannot change the props it receives.
 *
 * THINK OF IT LIKE:
 * Props are like function arguments. When you call a function, you pass in values.
 * When you use a component, you pass in props.
 */

// Parent component
function ProductList() {
  const products = [
    { id: 1, name: "Laptop", price: 999, inStock: true },
    { id: 2, name: "Phone", price: 699, inStock: false },
    { id: 3, name: "Tablet", price: 499, inStock: true },
  ];

  return (
    <div>
      <h1>Our Products</h1>
      {/* Passing props to child components */}
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          inStock={product.inStock}
        />
      ))}
    </div>
  );
}

// Child component receiving props
function ProductCard({ name, price, inStock }) {
  // We can destructure props in the function parameters
  // Or access them via props.name, props.price, etc.

  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      {inStock ? (
        <span className="in-stock">✓ In Stock</span>
      ) : (
        <span className="out-of-stock">✗ Out of Stock</span>
      )}
    </div>
  );
}

export default ProductList;
