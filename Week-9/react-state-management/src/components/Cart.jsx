import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  updateQuantity,
  clearCart,
} from "../redux/slices/cartSlice";
import "./Cart.css";

function Cart() {
  const dispatch = useDispatch();
  const { items, total } = useSelector((state) => state.cart);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return;
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (items.length === 0) {
    return <div className="cart-empty">Your cart is empty</div>;
  }

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {items.map((item) => (
          <div key={item.id} className="cart-item">
            <img
              src={item.image}
              alt={item.title}
              className="cart-item-image"
            />
            <div className="cart-item-info">
              <h3>{item.title}</h3>
              <p className="cart-item-price">${item.price.toFixed(2)}</p>
              <div className="quantity-controls">
                <button
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity - 1)
                  }
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity + 1)
                  }
                >
                  +
                </button>
              </div>
            </div>
            <button
              className="remove-btn"
              onClick={() => handleRemove(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total: ${total.toFixed(2)}</h3>
        <button className="checkout-btn">Checkout</button>
        <button className="clear-btn" onClick={handleClearCart}>
          Clear Cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
