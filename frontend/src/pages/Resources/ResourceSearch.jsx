import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import {
  Building2,
  Search,
  MapPin,
  Truck,
  Package,
  CheckCircle,
  ArrowLeft,
  SlidersHorizontal
} from "lucide-react";


function ResourceSearch() {

  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");

  const [resources, setResources] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  // =========================================
  // GET RESOURCES FROM BACKEND
  // =========================================

  useEffect(() => {

    const fetchResources = async () => {

      try {

        const token = localStorage.getItem("token");

        if (!token) {
          navigate("/login");
          return;
        }

        const response = await axios.get(
          "http://localhost:5000/api/resources",
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        setResources(response.data.resources || []);

      } catch (error) {

        console.error("Error fetching resources:", error);

        if (error.response?.status === 401) {

          localStorage.removeItem("token");
          localStorage.removeItem("user");

          navigate("/login");

        } else {

          setError(
            "Unable to load resources. Please try again."
          );

        }

      } finally {

        setLoading(false);

      }

    };


    fetchResources();

  }, [navigate]);


  // =========================================
  // FILTER RESOURCES
  // =========================================

  const filteredResources = resources.filter((resource) => {

    const matchesSearch =
      resource.name
        ?.toLowerCase()
        .includes(search.toLowerCase());

    const matchesType =
      type === "All" ||
      resource.category?.toLowerCase() === type.toLowerCase();

    return matchesSearch && matchesType;

  });


  // =========================================
  // RESOURCE TYPE DISPLAY
  // =========================================

  const getResourceType = (category) => {

    if (!category) return "Other";

    return (
      category.charAt(0).toUpperCase() +
      category.slice(1)
    );

  };


  // =========================================
  // RENDER
  // =========================================

  return (

    <div className="resource-page">


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

          <Link
            to="/resources"
            className="active"
          >
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

          <span>
            CiviShare
          </span>

          <small>
            Smart Construction Resource Network
          </small>

        </div>

      </aside>


      {/* ================= MAIN CONTENT ================= */}

      <main className="resource-main">


        {/* HEADER */}

        <div className="resource-header">

          <div>

            <Link
              to="/dashboard"
              className="back-link"
            >

              <ArrowLeft size={16} />

              Back to Dashboard

            </Link>


            <h1>
              Find Resources
            </h1>


            <p>
              Search for equipment, materials and
              construction resources near your site.
            </p>

          </div>

        </div>


        {/* SEARCH BOX */}

        <div className="resource-search-box">

          <div className="search-input-wrapper">

            <Search size={20} />

            <input
              type="text"
              placeholder="Search for equipment or materials..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>


          <div className="resource-filter">

            <SlidersHorizontal size={17} />

            <select
              value={type}
              onChange={(e) =>
                setType(e.target.value)
              }
            >

              <option value="All">
                All Resources
              </option>

              <option value="equipment">
                Equipment
              </option>

              <option value="material">
                Materials
              </option>

              <option value="tool">
                Tools
              </option>

              <option value="vehicle">
                Vehicles
              </option>

              <option value="other">
                Other
              </option>

            </select>

          </div>

        </div>


        {/* RESULTS HEADER */}

        <div className="results-header">

          <div>

            <h2>
              Available Resources
            </h2>

            <p>
              {loading
                ? "Loading resources..."
                : `${filteredResources.length} resources found`
              }
            </p>

          </div>


          <div className="location-display">

            <MapPin size={16} />

            Mumbai

          </div>

        </div>


        {/* ================= ERROR ================= */}

        {error && (

          <div className="auth-error">
            {error}
          </div>

        )}


        {/* ================= LOADING ================= */}

        {loading ? (

          <div className="no-results">

            <Package size={35} />

            <h3>
              Loading resources...
            </h3>

            <p>
              Getting available resources from CiviShare.
            </p>

          </div>

        ) : (


          /* ================= RESOURCE RESULTS ================= */

          <div className="resource-results">

            {filteredResources.length > 0 ? (

              filteredResources.map((resource) => (

                <div
                  className="resource-result-card"
                  key={resource._id}
                >


                  {/* ICON */}

                  <div className="result-icon">

                    {resource.category === "equipment" ||
                    resource.category === "vehicle" ? (

                      <Truck size={25} />

                    ) : (

                      <Package size={25} />

                    )}

                  </div>


                  {/* DETAILS */}

                  <div className="result-details">


                    <div className="result-title-row">

                      <h3>
                        {resource.name}
                      </h3>

                    </div>


                    <span className="result-type">

                      {getResourceType(
                        resource.category
                      )}

                    </span>


                    <div className="result-meta">


                      <span>

                        <MapPin size={14} />

                        {resource.location}

                      </span>


                      <span>

                        Quantity: {resource.quantity}

                      </span>


                      <span className="available-status">

                        <CheckCircle size={14} />

                        {resource.available
                          ? "Available"
                          : "Not Available"
                        }

                      </span>

                    </div>


                    <p className="resource-owner">

                      {resource.description}

                    </p>

                  </div>


                  {/* ACTION */}

                  <button
                    className="view-resource-button"
                    onClick={() =>
                      navigate(
                        `/resources/${resource._id}`
                      )
                    }
                  >

                    View Details

                  </button>


                </div>

              ))

            ) : (

              <div className="no-results">

                <Search size={35} />

                <h3>
                  No resources found
                </h3>

                <p>
                  Try searching for another
                  equipment or material.
                </p>

              </div>

            )}

          </div>

        )}

      </main>

    </div>

  );

}


export default ResourceSearch;