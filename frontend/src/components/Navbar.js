import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <h1 className="navbar-logo">Book Review Tracker</h1>

        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>

          {isLoggedIn && (
            <>
              <li className="nav-item">
                <Link to="/books" className="nav-link">Books</Link>
              </li>

              <li className="nav-item">
                <Link to="/reviews" className="nav-link">Reviews</Link>
              </li>

              <li className="nav-item">
                <Link to="/stats" className="nav-link">Statistics</Link>
              </li>
            </>
          )}

          {!isLoggedIn && (
            <>
              <li className="nav-item">
                <Link to="/login" className="nav-link">Login</Link>
              </li>

              <li className="nav-item">
                <Link to="/register" className="nav-link">Register</Link>
              </li>
            </>
          )}

          {isLoggedIn && (
            <li className="nav-item">
              <button onClick={handleLogout} className="nav-link">
                Logout
              </button>
            </li>
          )}

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;