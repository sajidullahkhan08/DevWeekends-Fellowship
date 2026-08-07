// components/Navbar.jsx
import BrandName from "../BrandName";
import "./Navbar.css";

// PROPS DRILLING: App passes 'companyName' to Navbar,
// and Navbar has to pass it down to BrandName.
function Navbar({ companyName }) {
  return (
    <nav className="navbar">
      {/* Drilling the prop down one more level */}
      <div className="logo">
        <BrandName companyName={companyName} />
      </div>
      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#tours">Tours</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
