import { Link } from "react-router-dom";
import { Building2 } from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <Link to="/" className="logo">
          <div className="logo-icon">
            <Building2 size={24} />
          </div>

          <div>
            <span className="logo-name">CiviShare</span>

            <span className="logo-tagline">
              Construction Resource Network
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <div className="nav-links">
          <Link to="/">Home</Link>

          <a href="#how-it-works">
            How It Works
          </a>

          <a href="#resources">
            Resources
          </a>

          <a href="#about">
            About
          </a>
        </div>

        {/* Buttons */}
        <div className="nav-actions">

          <Link
            to="/login"
            className="btn-login"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="btn-primary"
          >
            Get Started
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;