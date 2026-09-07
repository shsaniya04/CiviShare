import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Package,
  Bell,
  CheckCircle,
  AlertTriangle,
  Info,
} from "lucide-react";

function Notifications() {
  const notifications = [
    {
      icon: <CheckCircle size={20} />,
      title: "Resource Matched",
      message: "A Transit Mixer has been matched to your request REQ-002.",
      time: "10 minutes ago",
      type: "success",
    },
    {
      icon: <AlertTriangle size={20} />,
      title: "Urgent Request",
      message: "Your Concrete Pump request is still searching for a resource.",
      time: "1 hour ago",
      type: "warning",
    },
    {
      icon: <Info size={20} />,
      title: "Request Completed",
      message: "Your Cement - OPC 53 Grade request has been completed.",
      time: "Yesterday",
      type: "info",
    },
  ];

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

          <Link to="/profile">
            Profile
          </Link>

          <Link to="/notifications" className="active">
            Notifications
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

            <h1>Notifications</h1>

            <p>
              Stay updated about your resource requests.
            </p>
          </div>

        </div>

        <section className="notifications-section">

          <div className="notifications-header">
            <div>
              <h2>Recent Notifications</h2>
              <p>Your latest CiviShare updates</p>
            </div>

            <span className="notification-count">
              {notifications.length} New
            </span>
          </div>

          <div className="notifications-list">

            {notifications.map((notification, index) => (

              <div
                className="notification-card"
                key={index}
              >

                <div className={`notification-icon ${notification.type}`}>
                  {notification.icon}
                </div>

                <div className="notification-content">
                  <h3>{notification.title}</h3>

                  <p>{notification.message}</p>

                  <span>{notification.time}</span>
                </div>

              </div>

            ))}

          </div>

        </section>

      </main>

    </div>
  );
}

export default Notifications;