import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Package,
  MapPin,
  Clock,
  Plus,
} from "lucide-react";

function MyRequests() {
  const requests = [
    {
      id: "REQ-001",
      resource: "Concrete Pump",
      type: "Equipment",
      location: "Andheri, Mumbai",
      date: "07 Sep 2026",
      priority: "Urgent",
      status: "Finding Resource",
    },
    {
      id: "REQ-002",
      resource: "Transit Mixer",
      type: "Equipment",
      location: "Borivali, Mumbai",
      date: "06 Sep 2026",
      priority: "High",
      status: "Matched",
    },
    {
      id: "REQ-003",
      resource: "Cement - OPC 53 Grade",
      type: "Material",
      location: "Thane, Mumbai",
      date: "05 Sep 2026",
      priority: "Normal",
      status: "Completed",
    },
  ];

  return (
    <div className="dashboard-page">

      {/* Sidebar */}
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

          <div className="menu-title">
            MAIN MENU
          </div>

          <Link to="/dashboard">
            Dashboard
          </Link>

          <Link to="/resources">
            Find Resources
          </Link>

          <Link
            to="/my-requests"
            className="active"
          >
            My Requests
          </Link>

          <div className="menu-title account-title">
            ACCOUNT
          </div>

          <Link to="/profile">
            Profile
          </Link>

          <Link to="/notifications">
            Notifications
          </Link>

          <Link to="/" className="logout">
            Logout
          </Link>

        </div>

      </aside>

      {/* Main Content */}
      <main className="dashboard-main">

        {/* Header */}
        <div className="page-header">

          <div>
            <Link
              to="/dashboard"
              className="back-link"
            >
              <ArrowLeft size={16} />
              Back to Dashboard
            </Link>

            <h1>My Requests</h1>

            <p>
              Track your construction resource requests and their status.
            </p>
          </div>

          <Link
            to="/emergency-request"
            className="btn-primary"
          >
            <Plus size={18} />
            New Request
          </Link>

        </div>

        {/* Request Stats */}
        <div className="request-stats">

          <div className="stat-card">
            <span>Total Requests</span>
            <strong>12</strong>
          </div>

          <div className="stat-card">
            <span>Active</span>
            <strong>3</strong>
          </div>

          <div className="stat-card">
            <span>Matched</span>
            <strong>7</strong>
          </div>

          <div className="stat-card">
            <span>Completed</span>
            <strong>2</strong>
          </div>

        </div>

        {/* Requests */}
        <section className="requests-section">

          <div className="section-heading">
            <div>
              <h2>Your Requests</h2>
              <p>
                Recently created resource requests
              </p>
            </div>
          </div>

          <div className="requests-list">

            {requests.map((request) => (

              <div
                className="request-card"
                key={request.id}
              >

                <div className="request-icon">
                  <Package size={24} />
                </div>

                <div className="request-info">

                  <div className="request-title-row">

                    <h3>
                      {request.resource}
                    </h3>

                    <span className={`priority ${request.priority.toLowerCase()}`}>
                      {request.priority}
                    </span>

                  </div>

                  <span className="request-type">
                    {request.type}
                  </span>

                  <div className="request-details">

                    <span>
                      <MapPin size={15} />
                      {request.location}
                    </span>

                    <span>
                      <Clock size={15} />
                      {request.date}
                    </span>

                  </div>

                  <span className={`request-status ${request.status
                    .toLowerCase()
                    .replaceAll(" ", "-")}`}>
                    {request.status}
                  </span>

                </div>

                <div className="request-actions">

                  <span className="request-id">
                    {request.id}
                  </span>

                  <button>
                    View Details
                  </button>

                </div>

              </div>

            ))}

          </div>

        </section>

      </main>

    </div>
  );
}

export default MyRequests;