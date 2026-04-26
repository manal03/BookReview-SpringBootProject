import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Book Review Tracker</h1>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#home" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#books" className="nav-link">Books</a>
          </li>
          <li className="nav-item">
            <a href="#reviews" className="nav-link">Reviews</a>
          </li>
          <li className="nav-item">
            <a href="#statistics" className="nav-link">Statistics</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
