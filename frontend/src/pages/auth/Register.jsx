import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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

  const handleRegister = (e) => {
    e.preventDefault();

    // Temporary frontend registration
    // Backend authentication will be added later.

    navigate("/dashboard");
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


            <div className="form-row">

              <div className="form-group">

                <label>Full Name</label>

                <input
                  type="text"
                  placeholder="Your name"
                  required
                />

              </div>


              <div className="form-group">

                <label>Phone</label>

                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  required
                />

              </div>

            </div>


            <div className="form-group">

              <label>Email Address</label>

              <input
                type="email"
                placeholder="you@example.com"
                required
              />

            </div>


            <div className="form-group">

              <label>Location</label>

              <input
                type="text"
                placeholder="Mumbai, Maharashtra"
                required
              />

            </div>


            <div className="form-group">

              <label>Password</label>

              <input
                type="password"
                placeholder="Create a password"
                required
              />

            </div>


            <button
              type="submit"
              className="btn-primary auth-submit"
            >
              Create Account
              <ArrowRight size={18} />
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