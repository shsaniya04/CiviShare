
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import {
  Building2,
  HardHat,
  Truck,
  Store,
  ArrowRight
} from "lucide-react";

import RoleCard from "../../components/RoleCard";

function Register() {
  const navigate = useNavigate();

  const [role, setRole] = useState("site");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    password: ""
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle registration
  const handleRegister = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    // Convert frontend roles to backend roles
    let backendRole = "site_manager";

    if (role === "owner") {
      backendRole = "resource_owner";
    }

    try {
      await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          phone: formData.phone,
          role: backendRole,
          location: formData.location
        }
      );

      // Registration successful
      alert("Account created successfully!");

      navigate("/login");

    } catch (error) {
      console.error("Registration error:", error);

      if (error.response) {
        setError(
          error.response.data.message ||
          "Registration failed. Please try again."
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

  return (
    <div className="auth-page register-page">

      {/* Left */}

      <div className="auth-left">

        <Link to="/" className="auth-logo">

          <div className="auth-logo-icon">
            <Building2 size={25} />
          </div>

          <div>
            <strong>CiviShare</strong>
            <span>Construction Resource Network</span>
          </div>

        </Link>

        <div className="auth-message">

          <span className="section-label">
            JOIN CIVISHARE
          </span>

          <h1>
            Build smarter.
            <span> Share resources.</span>
          </h1>

          <p>
            Join a growing network of construction
            professionals sharing equipment and
            resources efficiently.
          </p>

        </div>

      </div>


      {/* Right */}

      <div className="auth-right">

        <div className="auth-card register-card">

          <div className="auth-card-heading">

            <h2>Create your account</h2>

            <p>
              Choose how you'll use CiviShare
            </p>

          </div>

          <form onSubmit={handleRegister}>

            <label className="role-heading">
              I am a...
            </label>

            <div className="role-options">

              <RoleCard
                icon={<HardHat size={23} />}
                title="Construction Site"
                description="Find equipment and materials"
                selected={role === "site"}
                onClick={() => setRole("site")}
              />

              <RoleCard
                icon={<Truck size={23} />}
                title="Equipment Owner"
                description="List and rent your equipment"
                selected={role === "owner"}
                onClick={() => setRole("owner")}
              />

              <RoleCard
                icon={<Store size={23} />}
                title="Material Supplier"
                description="Sell construction materials"
                selected={role === "supplier"}
                onClick={() => setRole("supplier")}
              />

            </div>


            {/* Error message */}

            {error && (
              <div className="auth-error">
                {error}
              </div>
            )}


            <div className="form-row">

              <div className="form-group">

                <label>Full Name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="form-group">

                <label>Phone</label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>


            <div className="form-group">

              <label>Email Address</label>

              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>


            <div className="form-group">

              <label>Location</label>

              <input
                type="text"
                name="location"
                placeholder="Mumbai, Maharashtra"
                value={formData.location}
                onChange={handleChange}
                required
              />

            </div>


            <div className="form-group">

              <label>Password</label>

              <input
                type="password"
                name="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                required
              />

            </div>


            <button
              type="submit"
              className="btn-primary auth-submit"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Create Account"}

              {!loading && <ArrowRight size={18} />}
            </button>

          </form>


          <p className="auth-register">

            Already have an account?

            <Link to="/login">
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;
