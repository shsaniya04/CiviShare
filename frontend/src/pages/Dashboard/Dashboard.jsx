import { useState } from "react";

import {
  Building2,
  LayoutDashboard,
  Search,
  MapPin,
  Bell,
  User,
  LogOut,
  Plus,
  AlertTriangle,
  Truck,
  Package,
  Clock,
  ChevronRight,
  CheckCircle
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";


function Dashboard() {

  const navigate = useNavigate();

  const [search, setSearch] = useState("");


  const resources = [
    {
      name: "Concrete Pump",
      type: "Equipment",
      distance: "2.4 km",
      availability: "Available Now",
      match: "94%",
      icon: <Truck size={22} />
    },
    {
      name: "Transit Mixer",
      type: "Equipment",
      distance: "3.1 km",
      availability: "Available Now",
      match: "89%",
      icon: <Truck size={22} />
    },
    {
      name: "Cement - OPC 53 Grade",
      type: "Material",
      distance: "4.8 km",
      availability: "Available",
      match: "86%",
      icon: <Package size={22} />
    }
  ];


  const handleLogout = () => {
    navigate("/");
  };


  return (
    <div className="dashboard-page">

      {/* ================= SIDEBAR ================= */}

      <aside className="dashboard-sidebar">

        <Link to="/" className="dashboard-logo">

          <div className="dashboard-logo-icon">
            <Building2 size={23} />
          </div>

          <div>
            <strong>CiviShare</strong>

            <span>
              Construction Network
            </span>
          </div>

        </Link>


        <div className="dashboard-user">

          <div className="user-avatar">
            S
          </div>

          <div>
            <strong>Site Manager</strong>

            <span>
              Construction Site
            </span>
          </div>

        </div>


        <nav className="dashboard-nav">

          <div className="dashboard-nav-title">
            MAIN MENU
          </div>

          <a className="dashboard-nav-item active">
            <LayoutDashboard size={18} />
            Dashboard
          </a>

          <Link
            to="/resources"
            className="dashboard-nav-item"
          >
            <Search size={18} />
            Find Resources
          </Link>

          <Link to="/my-requests" className="dashboard-nav-item">
            <Clock size={18} />
            My Requests
          </Link>
          
          <div className="dashboard-nav-title">
            ACCOUNT
          </div>

          <a className="dashboard-nav-item">
            <User size={18} />
            Profile
          </a>

          <a className="dashboard-nav-item">
            <Bell size={18} />
            Notifications
          </a>

        </nav>


        <button
          className="dashboard-logout"
          onClick={handleLogout}
        >
          <LogOut size={17} />
          Logout
        </button>

      </aside>


      {/* ================= MAIN ================= */}

      <main className="dashboard-main">


        {/* TOP BAR */}

        <header className="dashboard-header">

          <div>

            <h1>
              Good morning, Site Manager 👋
            </h1>

            <p>
              Find the resources your construction
              site needs.
            </p>

          </div>


          <div className="dashboard-header-actions">

            <Link to="/notifications" className="notification-btn">
              <Bell size={20} />
            </Link>

            <div className="header-avatar">
              S
            </div>

          </div>

        </header>


        {/* SEARCH */}

        <section className="dashboard-search-section">

          <div className="dashboard-search">

            <Search size={21} />

            <input
              type="text"
              placeholder="Search equipment, materials or services..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <Link
              to="/resources"
              className="dashboard-search-button"
            >
              Search
            </Link>

          </div>

        </section>


        {/* QUICK ACTIONS */}

        <section className="quick-actions">

          <button className="quick-action emergency">

            <div>
              <AlertTriangle size={22} />
            </div>

            <Link
              to="/emergency-request"
              className="emergency-request"
            >
             Emergency Request
            </Link>

            <ChevronRight size={18} />

          </button>


          <button className="quick-action">

            <div>
              <Plus size={22} />
            </div>

            <span>
              Request a Resource
            </span>

            <ChevronRight size={18} />

          </button>

        </section>


        {/* AI MATCH */}

        <section className="dashboard-section">

          <div className="section-header">

            <div>

              <h2>
                AI Recommended Resources
              </h2>

              <p>
                Best matches based on your location,
                requirements and availability.
              </p>

            </div>

            <button className="view-all">
              View all
              <ChevronRight size={16} />
            </button>

          </div>


          <div className="resource-grid">

            {resources.map((resource, index) => (

              <div
                className="resource-card"
                key={index}
              >

                <div className="resource-card-top">

                  <div className="resource-icon">
                    {resource.icon}
                  </div>

                  <span className="match-score">
                    {resource.match}
                    <small> Match</small>
                  </span>

                </div>


                <h3>
                  {resource.name}
                </h3>

                <span className="resource-type">
                  {resource.type}
                </span>


                <div className="resource-info">

                  <span>
                    <MapPin size={14} />
                    {resource.distance}
                  </span>

                  <span className="available">
                    <CheckCircle size={14} />
                    {resource.availability}
                  </span>

                </div>


                <button className="resource-button">
                  View Resource
                  <ChevronRight size={15} />
                </button>

              </div>

            ))}

          </div>

        </section>


        {/* ACTIVE REQUEST */}

        <section className="dashboard-section">

          <div className="section-header">

            <div>

              <h2>
                My Active Requests
              </h2>

              <p>
                Track resources you've requested.
              </p>

            </div>

            <button className="view-all">
              View all
              <ChevronRight size={16} />
            </button>

          </div>


          <div className="request-card">

            <div className="request-icon">
              <Truck size={22} />
            </div>


            <div className="request-details">

              <h3>
                Concrete Pump
              </h3>

              <p>
                Mumbai Construction Site
              </p>

            </div>


            <span className="request-status">
              Searching
            </span>


            <div className="request-time">

              <Clock size={15} />

              Posted 12 min ago

            </div>


            <ChevronRight size={19} />

          </div>

        </section>


      </main>

    </div>
  );
}


export default Dashboard;