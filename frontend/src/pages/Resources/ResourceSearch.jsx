import { useState } from "react";
import { Link } from "react-router-dom";

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

  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");


  // Temporary resource data
  // Later this will come from our backend/database.

  const resources = [
    {
      id: 1,
      name: "Concrete Pump",
      type: "Equipment",
      location: "Mumbai",
      distance: "2.4 km",
      availability: "Available Now",
      owner: "ABC Equipment Rentals",
      match: "94%"
    },

    {
      id: 2,
      name: "Transit Mixer",
      type: "Equipment",
      location: "Mumbai",
      distance: "3.1 km",
      availability: "Available Now",
      owner: "BuildTech Equipment",
      match: "89%"
    },

    {
      id: 3,
      name: "Cement - OPC 53 Grade",
      type: "Material",
      location: "Mumbai",
      distance: "4.8 km",
      availability: "Available",
      owner: "Shree Construction Supplies",
      match: "86%"
    },

    {
      id: 4,
      name: "Tower Crane",
      type: "Equipment",
      location: "Thane",
      distance: "8.2 km",
      availability: "Available Tomorrow",
      owner: "Metro Machinery",
      match: "82%"
    },

    {
      id: 5,
      name: "Steel Reinforcement Bars",
      type: "Material",
      location: "Mumbai",
      distance: "5.6 km",
      availability: "Available",
      owner: "Mumbai Steel Traders",
      match: "79%"
    },

    {
      id: 6,
      name: "Concrete Mixer",
      type: "Equipment",
      location: "Navi Mumbai",
      distance: "11.4 km",
      availability: "Available Now",
      owner: "Rapid Equipment",
      match: "76%"
    }
  ];


  // Filter resources

  const filteredResources = resources.filter((resource) => {

    const matchesSearch =
      resource.name
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesType =
      type === "All" ||
      resource.type === type;

    return matchesSearch && matchesType;

  });


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

              <option value="Equipment">
                Equipment
              </option>

              <option value="Material">
                Materials
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
              {filteredResources.length} resources found
            </p>

          </div>

          <div className="location-display">

            <MapPin size={16} />

            Mumbai

          </div>

        </div>


        {/* RESOURCE RESULTS */}

        <div className="resource-results">

          {filteredResources.length > 0 ? (

            filteredResources.map((resource) => (

              <div
                className="resource-result-card"
                key={resource.id}
              >

                {/* ICON */}

                <div className="result-icon">

                  {resource.type === "Equipment" ? (
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

                    <span className="ai-match">
                      {resource.match} AI Match
                    </span>

                  </div>


                  <span className="result-type">
                    {resource.type}
                  </span>


                  <div className="result-meta">

                    <span>
                      <MapPin size={14} />
                      {resource.location}
                    </span>

                    <span>
                      {resource.distance}
                    </span>

                    <span className="available-status">
                      <CheckCircle size={14} />
                      {resource.availability}
                    </span>

                  </div>


                  <p className="resource-owner">
                    Provided by{" "}
                    <strong>
                      {resource.owner}
                    </strong>
                  </p>

                </div>


                {/* ACTION */}

                <button className="view-resource-button">
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

      </main>

    </div>

  );
}


export default ResourceSearch;