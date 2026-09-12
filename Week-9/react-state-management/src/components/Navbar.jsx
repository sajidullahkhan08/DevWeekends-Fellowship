import { useSelector } from "react-redux";
import ThemeToggle from "./ThemeToggle";
import "./Navbar.css";

function Navbar() {
  const { items } = useSelector((state) => state.cart);
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">Shop</h1>
        <div className="navbar-right">
          <ThemeToggle />
          <div className="cart-icon">
            🛒
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
