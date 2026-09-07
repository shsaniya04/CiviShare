import {
  Building2,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

function Footer() {
  return (
    <footer className="footer" id="about">

      <div className="footer-container">

        <div className="footer-brand">

          <div className="footer-logo">
            <Building2 size={26} />
            <span>CiviShare</span>
          </div>

          <p>
            Connecting construction sites with nearby
            materials and equipment when they need them most.
          </p>

        </div>

        <div className="footer-section">
          <h4>Platform</h4>
          <a href="#resources">Find Resources</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#">List Equipment</a>
          <a href="#">Dashboard</a>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>

          <p>
            <Mail size={16} />
            support@civishare.com
          </p>

          <p>
            <Phone size={16} />
            +91 XXXXX XXXXX
          </p>

          <p>
            <MapPin size={16} />
            Maharashtra, India
          </p>

        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 CiviShare. Built for CIVIHACK 2026.
        </p>

        <p>
          Build • Share • Solve
        </p>
      </div>

    </footer>
  );
}

export default Footer;