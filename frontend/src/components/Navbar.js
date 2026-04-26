import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <h1 className="navbar-logo">Book Review Tracker</h1>

        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>

          <li className="nav-item">
            <Link to="/books" className="nav-link">Books</Link>
          </li>

          <li className="nav-item">
            <Link to="/reviews" className="nav-link">Reviews</Link>
          </li>

          <li className="nav-item">
            <Link to="/stats" className="nav-link">Statistics</Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;