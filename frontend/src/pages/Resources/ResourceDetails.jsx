import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import {
  Building2,
  ArrowLeft,
  MapPin,
  Package,
  Truck,
  CheckCircle,
  User,
  IndianRupee,
  Clock,
  Send,
} from "lucide-react";

function ResourceDetails() {
  const { id } = useParams();

  const [resource, setResource] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ========================================
  // FETCH RESOURCE DETAILS
  // ========================================

  useEffect(() => {
    const fetchResource = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          `http://localhost:5000/api/resources/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setResource(response.data.resource);
      } catch (error) {
        console.error("Error fetching resource:", error);

        if (error.response) {
          setError(
            error.response.data.message ||
              "Unable to load resource details."
          );
        } else {
          setError(
            "Unable to connect to the server. Make sure the backend is running."
          );
        }
      } finally {
        setLoading(false);
      }
    };

    fetchResource();
  }, [id]);

  // ========================================
  // LOADING
  // ========================================

  if (loading) {
    return (
      <div className="resource-details-page">
        <div className="resource-details-loading">
          <p>Loading resource details...</p>
        </div>
      </div>
    );
  }

  // ========================================
  // ERROR
  // ========================================

  if (error || !resource) {
    return (
      <div className="resource-details-page">
        <div className="resource-details-error">
          <h2>Resource not found</h2>

          <p>
            {error || "This resource is no longer available."}
          </p>

          <Link to="/resources" className="back-to-resources">
            <ArrowLeft size={17} />
            Back to Resources
          </Link>
        </div>
      </div>
    );
  }

  // ========================================
  // RESOURCE TYPE
  // ========================================

  const frontendType =
    resource.category === "equipment"
      ? "Equipment"
      : resource.category === "material"
      ? "Material"
      : resource.category;

  return (
    <div className="resource-details-page">

      {/* ================= SIDEBAR ================= */}

      <aside className="resource-sidebar">

        <Link
          to="/dashboard"
          className="resource-logo"
        >
          <div className="resource-logo-icon">
            <Building2 size={23} />
          </div>

          <div>
            <strong>CiviShare</strong>

            <span>
              Construction Network
            </span>
          </div>
        </Link>

        <nav className="resource-navigation">

          <Link to="/dashboard">
            Dashboard
          </Link>

          <Link to="/resources" className="active">
            Find Resources
          </Link>

          <Link to="/my-requests">
            My Requests
          </Link>

          <Link to="/profile">
            Profile
          </Link>

        </nav>

        <div className="resource-sidebar-bottom">
          <span>CiviShare</span>

          <small>
            Smart Construction Resource Network
          </small>
        </div>

      </aside>


      {/* ================= MAIN CONTENT ================= */}

      <main className="resource-details-main">

        {/* BACK LINK */}

        <Link
          to="/resources"
          className="details-back-link"
        >
          <ArrowLeft size={17} />
          Back to Resources
        </Link>


        {/* ================= RESOURCE HEADER ================= */}

        <div className="resource-details-header">

          <div className="resource-details-icon">

            {frontendType === "Equipment" ? (
              <Truck size={38} />
            ) : (
              <Package size={38} />
            )}

          </div>

          <div>

            <span className="details-resource-type">
              {frontendType}
            </span>

            <h1>
              {resource.name}
            </h1>

            <div className="details-location">
              <MapPin size={17} />
              {resource.location}
            </div>

          </div>

        </div>


        {/* ================= CONTENT GRID ================= */}

        <div className="resource-details-grid">

          {/* LEFT SIDE */}

          <section className="resource-info-card">

            <h2>
              Resource Information
            </h2>

            <div className="resource-description">

              <h3>
                Description
              </h3>

              <p>
                {resource.description ||
                  "No description provided for this resource."}
              </p>

            </div>


            <div className="resource-info-list">

              <div className="info-item">

                <Package size={20} />

                <div>
                  <span>Quantity</span>

                  <strong>
                    {resource.quantity}
                  </strong>
                </div>

              </div>


              <div className="info-item">

                <MapPin size={20} />

                <div>
                  <span>Location</span>

                  <strong>
                    {resource.location}
                  </strong>
                </div>

              </div>


              <div className="info-item">

                <IndianRupee size={20} />

                <div>
                  <span>Price per day</span>

                  <strong>
                    ₹{resource.pricePerDay}
                  </strong>
                </div>

              </div>


              <div className="info-item">

                <Clock size={20} />

                <div>
                  <span>Availability</span>

                  <strong className="available-text">

                    <CheckCircle size={16} />

                    {resource.available
                      ? "Available"
                      : "Currently unavailable"}

                  </strong>

                </div>

              </div>

            </div>

          </section>


          {/* RIGHT SIDE */}

          <aside className="resource-request-card">

            <div className="request-card-header">

              <Send size={22} />

              <h2>
                Request this Resource
              </h2>

            </div>


            <p>
              Need this resource for your
              construction project? Send a request
              to the resource owner.
            </p>


            {/* OWNER */}

            <div className="resource-owner-box">

              <div className="owner-icon">
                <User size={22} />
              </div>

              <div>

                <span>
                  Resource Owner
                </span>

                <strong>
                  {resource.owner?.name ||
                    "Resource Owner"}
                </strong>

              </div>

            </div>


            {/* REQUEST BUTTON */}

            <button
              className="request-resource-button"
              disabled={!resource.available}
            >

              <Send size={18} />

              {resource.available
                ? "Request Resource"
                : "Currently Unavailable"}

            </button>


            <small className="request-note">
              You can review the request status
              from My Requests.
            </small>

          </aside>

        </div>

      </main>

    </div>
  );
}

export default ResourceDetails;