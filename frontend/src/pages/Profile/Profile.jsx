import { Link } from "react-router-dom";
import { ArrowLeft, Package, User, Mail, MapPin, Phone } from "lucide-react";

function Profile() {
  return (
    <div className="dashboard-page">

      <aside className="sidebar">
        <div className="sidebar-logo">
          <div className="sidebar-logo-icon">
            <Package size={24} />
          </div>

          <div>
            <div className="sidebar-logo-name">CiviShare</div>
            <div className="sidebar-logo-tagline">
              Construction Network
            </div>
          </div>
        </div>

        <div className="sidebar-user">
          <div className="user-avatar">S</div>

          <div>
            <strong>Site Manager</strong>
            <span>Construction Site</span>
          </div>
        </div>

        <div className="sidebar-menu">
          <div className="menu-title">MAIN MENU</div>

          <Link to="/dashboard">
            Dashboard
          </Link>

          <Link to="/resources">
            Find Resources
          </Link>

          <Link to="/my-requests">
            My Requests
          </Link>

          <div className="menu-title account-title">
            ACCOUNT
          </div>

          <Link to="/profile" className="active">
            Profile
          </Link>

          <Link to="/">
            Logout
          </Link>
        </div>
      </aside>

      <main className="dashboard-main">

        <div className="page-header">

          <div>
            <Link to="/dashboard" className="back-link">
              <ArrowLeft size={16} />
              Back to Dashboard
            </Link>

            <h1>My Profile</h1>

            <p>
              Manage your CiviShare account information.
            </p>
          </div>

        </div>

        <section className="profile-card">

          <div className="profile-avatar">
            <User size={40} />
          </div>

          <div className="profile-details">

            <h2>Site Manager</h2>

            <p className="profile-role">
              Construction Site Manager
            </p>

            <div className="profile-info">

              <div>
                <Mail size={18} />
                <span>manager@civishare.com</span>
              </div>

              <div>
                <Phone size={18} />
                <span>+91 98765 43210</span>
              </div>

              <div>
                <MapPin size={18} />
                <span>Mumbai, Maharashtra</span>
              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Profile;