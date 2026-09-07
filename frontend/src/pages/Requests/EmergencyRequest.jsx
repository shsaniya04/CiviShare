import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Building2,
  AlertTriangle,
  ArrowLeft,
  MapPin,
  Clock,
  Send,
  CheckCircle
} from "lucide-react";


function EmergencyRequest() {

  const navigate = useNavigate();

  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    resourceType: "",
    quantity: "1",
    location: "",
    requiredTime: "Immediately",
    details: ""
  });


  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

  };


  const handleSubmit = (e) => {

    e.preventDefault();

    setSubmitted(true);

  };


  if (submitted) {

    return (

      <div className="emergency-page">

        <aside className="emergency-sidebar">

          <Link
            to="/dashboard"
            className="emergency-logo"
          >

            <div className="emergency-logo-icon">
              <Building2 size={23} />
            </div>

            <div>
              <strong>CiviShare</strong>

              <span>
                Construction Network
              </span>
            </div>

          </Link>

        </aside>


        <main className="emergency-main">

          <div className="request-success">

            <div className="success-icon">
              <CheckCircle size={50} />
            </div>

            <h1>
              Emergency Request Sent!
            </h1>

            <p>
              Your request has been successfully created.
              CiviShare will look for nearby available
              resources matching your requirements.
            </p>

            <div className="success-request-card">

              <div>
                <strong>Resource</strong>
                <span>{formData.resourceType}</span>
              </div>

              <div>
                <strong>Location</strong>
                <span>{formData.location}</span>
              </div>

              <div>
                <strong>Required</strong>
                <span>{formData.requiredTime}</span>
              </div>

            </div>


            <div className="success-actions">

              <button
                onClick={() => navigate("/resources")}
                className="primary-action"
              >
                Find Matching Resources
              </button>

              <button
                onClick={() => setSubmitted(false)}
                className="secondary-action"
              >
                Create Another Request
              </button>

            </div>

          </div>

        </main>

      </div>

    );

  }


  return (

    <div className="emergency-page">

      {/* SIDEBAR */}

      <aside className="emergency-sidebar">

        <Link
          to="/dashboard"
          className="emergency-logo"
        >

          <div className="emergency-logo-icon">
            <Building2 size={23} />
          </div>

          <div>
            <strong>CiviShare</strong>

            <span>
              Construction Network
            </span>
          </div>

        </Link>


        <nav className="emergency-navigation">

          <Link to="/dashboard">
            Dashboard
          </Link>

          <Link to="/resources">
            Find Resources
          </Link>

          <a className="active">
            Emergency Request
          </a>

          <a>
            My Requests
          </a>

        </nav>

      </aside>


      {/* MAIN CONTENT */}

      <main className="emergency-main">

        <Link
          to="/dashboard"
          className="emergency-back"
        >
          <ArrowLeft size={16} />
          Back to Dashboard
        </Link>


        <div className="emergency-title">

          <div className="emergency-title-icon">
            <AlertTriangle size={25} />
          </div>

          <div>

            <h1>
              Emergency Resource Request
            </h1>

            <p>
              Quickly request a construction resource
              when you need it urgently.
            </p>

          </div>

        </div>


        {/* FORM */}

        <form
          className="emergency-form"
          onSubmit={handleSubmit}
        >

          <div className="form-section">

            <h2>
              Resource Details
            </h2>

            <p>
              Tell us what construction resource you need.
            </p>


            <div className="form-group">

              <label>
                Resource Type *
              </label>

              <select
                name="resourceType"
                value={formData.resourceType}
                onChange={handleChange}
                required
              >

                <option value="">
                  Select a resource
                </option>

                <option value="Concrete Pump">
                  Concrete Pump
                </option>

                <option value="Transit Mixer">
                  Transit Mixer
                </option>

                <option value="Tower Crane">
                  Tower Crane
                </option>

                <option value="Concrete Mixer">
                  Concrete Mixer
                </option>

                <option value="Steel Reinforcement Bars">
                  Steel Reinforcement Bars
                </option>

                <option value="Cement">
                  Cement
                </option>

                <option value="Other">
                  Other
                </option>

              </select>

            </div>


            <div className="form-group">

              <label>
                Quantity *
              </label>

              <input
                type="number"
                name="quantity"
                min="1"
                value={formData.quantity}
                onChange={handleChange}
                required
              />

            </div>

          </div>


          <div className="form-section">

            <h2>
              Location & Timing
            </h2>

            <p>
              Help us find the nearest available resource.
            </p>


            <div className="form-group">

              <label>
                Construction Site Location *
              </label>

              <div className="input-with-icon">

                <MapPin size={18} />

                <input
                  type="text"
                  name="location"
                  placeholder="Example: Andheri, Mumbai"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>


            <div className="form-group">

              <label>
                When do you need it? *
              </label>

              <div className="input-with-icon">

                <Clock size={18} />

                <select
                  name="requiredTime"
                  value={formData.requiredTime}
                  onChange={handleChange}
                >

                  <option value="Immediately">
                    Immediately
                  </option>

                  <option value="Within 1 hour">
                    Within 1 hour
                  </option>

                  <option value="Within 3 hours">
                    Within 3 hours
                  </option>

                  <option value="Today">
                    Today
                  </option>

                  <option value="Tomorrow">
                    Tomorrow
                  </option>

                </select>

              </div>

            </div>

          </div>


          <div className="form-section">

            <h2>
              Additional Information
            </h2>

            <p>
              Add any information that can help resource
              owners understand your requirement.
            </p>


            <div className="form-group">

              <label>
                Description
              </label>

              <textarea
                name="details"
                rows="5"
                placeholder="Example: Need a concrete pump for urgent slab work. Required for approximately 5 hours."
                value={formData.details}
                onChange={handleChange}
              />

            </div>

          </div>


          {/* URGENT NOTICE */}

          <div className="urgent-notice">

            <AlertTriangle size={20} />

            <div>

              <strong>
                Emergency Request
              </strong>

              <p>
                Your request will be prioritized when
                matching with nearby available resources.
              </p>

            </div>

          </div>


          {/* SUBMIT */}

          <button
            type="submit"
            className="submit-emergency"
          >

            <Send size={18} />

            Send Emergency Request

          </button>

        </form>

      </main>

    </div>

  );

}


export default EmergencyRequest;