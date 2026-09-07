import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import {
  Building2,
  Mail,
  Lock,
  ArrowRight,
  ShieldCheck
} from "lucide-react";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password
        }
      );

      // Save JWT token
      localStorage.setItem("token", response.data.token);

      // Save user information
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      // Go to dashboard
      navigate("/dashboard");

    } catch (error) {
      console.error("Login error:", error);

      if (error.response) {
        setError(
          error.response.data.message ||
          "Invalid email or password"
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
    <div className="auth-page">

      {/* Left Side */}

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
            SMART CONSTRUCTION NETWORK
          </span>

          <h1>
            Get the resources
            <span> you need.</span>
          </h1>

          <p>
            Connect with nearby construction sites,
            equipment owners and suppliers when
            resources are needed most.
          </p>

          <div className="auth-benefits">

            <div>
              <ShieldCheck size={20} />
              <span>Verified construction resources</span>
            </div>

            <div>
              <ArrowRight size={20} />
              <span>AI-powered resource matching</span>
            </div>

            <div>
              <Building2 size={20} />
              <span>Construction site-to-site sharing</span>
            </div>

          </div>

        </div>

      </div>


      {/* Right Side */}

      <div className="auth-right">

        <div className="auth-card">

          <div className="auth-card-heading">

            <h2>Welcome back</h2>

            <p>
              Login to your CiviShare account
            </p>

          </div>


          <form onSubmit={handleLogin}>

            {/* Error message */}

            {error && (
              <div className="auth-error">
                {error}
              </div>
            )}

            <div className="form-group">

              <label>Email Address</label>

              <div className="input-wrapper">

                <Mail size={18} />

                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

              </div>

            </div>


            <div className="form-group">

              <div className="password-label">

                <label>Password</label>

                <a href="#">
                  Forgot password?
                </a>

              </div>

              <div className="input-wrapper">

                <Lock size={18} />

                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

              </div>

            </div>


            <button
              type="submit"
              className="btn-primary auth-submit"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}

              {!loading && <ArrowRight size={18} />}
            </button>

          </form>


          <div className="auth-divider">
            <span>OR</span>
          </div>


          <p className="auth-register">

            Don't have an account?

            <Link to="/register">
              Create an account
            </Link>

          </p>


          <Link
            to="/"
            className="back-home"
          >
            ← Back to CiviShare
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Login;