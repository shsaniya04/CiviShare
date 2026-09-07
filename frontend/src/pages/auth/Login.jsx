import { Link, useNavigate } from "react-router-dom";
import {
  Building2,
  Mail,
  Lock,
  ArrowRight,
  ShieldCheck
} from "lucide-react";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Temporary frontend login
    // We will connect this to the backend later.
    navigate("/dashboard");
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

            <div className="form-group">

              <label>Email Address</label>

              <div className="input-wrapper">

                <Mail size={18} />

                <input
                  type="email"
                  placeholder="you@example.com"
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
                  required
                />

              </div>

            </div>


            <button
              type="submit"
              className="btn-primary auth-submit"
            >
              Login
              <ArrowRight size={18} />
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