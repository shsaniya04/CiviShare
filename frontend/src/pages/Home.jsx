import {
  ArrowRight,
  MapPin,
  Search,
  ShieldCheck,
  Clock,
  Truck,
  Brain,
  Construction,
  Package,
  Wrench
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>

      <Navbar />

      {/* ================= HERO ================= */}

      <section className="hero">

        <div className="hero-container">

          <div className="hero-content">

            <div className="hero-badge">
              <span className="pulse-dot"></span>
              Smart Construction Resource Network
            </div>

            <h1>
              Find the Right
              <span> Construction Resource </span>
              When You Need It.
            </h1>

            <p>
              CiviShare connects construction sites, contractors,
              equipment owners and suppliers with nearby available
              resources — especially when you need them urgently.
            </p>

            <div className="hero-buttons">

              <button className="btn-primary btn-large">
                Find Resources
                <ArrowRight size={20} />
              </button>

              <button className="btn-outline btn-large">
                List Your Equipment
              </button>

            </div>

            <div className="hero-trust">

              <div>
                <ShieldCheck size={20} />
                Verified Resources
              </div>

              <div>
                <Clock size={20} />
                Emergency Matching
              </div>

              <div>
                <MapPin size={20} />
                Nearby Resources
              </div>

            </div>

          </div>

          {/* Hero visual */}

          <div className="hero-visual">

            <div className="dashboard-card">

              <div className="dashboard-header">
                <div>
                  <span>Emergency Request</span>
                  <h3>Concrete Pump</h3>
                </div>

                <div className="urgent-badge">
                  URGENT
                </div>
              </div>

              <div className="request-location">
                <MapPin size={18} />
                Construction Site • Mumbai
              </div>

              <div className="match-title">
                AI Recommended Resources
              </div>

              {/* Match 1 */}

              <div className="mini-resource best-match">

                <div className="resource-icon">
                  <Construction size={25} />
                </div>

                <div className="resource-info">
                  <strong>Concrete Pump</strong>
                  <span>
                    <MapPin size={13} /> 2.4 km away
                  </span>
                </div>

                <div className="match-score">
                  <strong>94%</strong>
                  <span>Match</span>
                </div>

              </div>

              {/* Match 2 */}

              <div className="mini-resource">

                <div className="resource-icon">
                  <Truck size={25} />
                </div>

                <div className="resource-info">
                  <strong>Concrete Pump</strong>
                  <span>
                    <MapPin size={13} /> 4.8 km away
                  </span>
                </div>

                <div className="match-score">
                  <strong>87%</strong>
                  <span>Match</span>
                </div>

              </div>

              <button className="view-results">
                View All Matches
                <ArrowRight size={16} />
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* ================= STATS ================= */}

      <section className="stats">

        <div className="stats-container">

          <div className="stat">
            <strong>24/7</strong>
            <span>Resource Discovery</span>
          </div>

          <div className="stat">
            <strong>AI</strong>
            <span>Smart Matching</span>
          </div>

          <div className="stat">
            <strong>GPS</strong>
            <span>Nearby Resources</span>
          </div>

          <div className="stat">
            <strong>1 → 1</strong>
            <span>Site-to-Site Sharing</span>
          </div>

        </div>

      </section>


      {/* ================= HOW IT WORKS ================= */}

      <section className="section" id="how-it-works">

        <div className="section-heading">

          <span className="section-label">
            HOW IT WORKS
          </span>

          <h2>
            From shortage to solution
            <span> in minutes.</span>
          </h2>

          <p>
            No more calling multiple suppliers or searching
            manually when a construction site faces an emergency.
          </p>

        </div>

        <div className="steps">

          <div className="step-card">

            <div className="step-number">01</div>

            <div className="step-icon">
              <Search size={28} />
            </div>

            <h3>Post Your Requirement</h3>

            <p>
              Tell us what equipment or material your
              construction site needs.
            </p>

          </div>


          <div className="step-card">

            <div className="step-number">02</div>

            <div className="step-icon">
              <Brain size={28} />
            </div>

            <h3>AI Finds Matches</h3>

            <p>
              Our matching engine finds suitable resources
              based on distance, availability and price.
            </p>

          </div>


          <div className="step-card">

            <div className="step-number">03</div>

            <div className="step-icon">
              <MapPin size={28} />
            </div>

            <h3>Compare Nearby Options</h3>

            <p>
              See nearby equipment and materials on a
              map and compare your best options.
            </p>

          </div>


          <div className="step-card">

            <div className="step-number">04</div>

            <div className="step-icon">
              <Truck size={28} />
            </div>

            <h3>Request & Use</h3>

            <p>
              Send a request to the owner and arrange
              temporary rental or resource sharing.
            </p>

          </div>

        </div>

      </section>


      {/* ================= RESOURCES ================= */}

      <section className="resources-section" id="resources">

        <div className="section-heading">

          <span className="section-label">
            RESOURCE CATEGORIES
          </span>

          <h2>
            Find what your site
            <span> needs.</span>
          </h2>

        </div>

        <div className="resource-categories">

          <div className="category-card">
            <div className="category-icon">
              <Construction />
            </div>
            <h3>Heavy Equipment</h3>
            <p>Excavators, cranes, pumps and more</p>
          </div>

          <div className="category-card">
            <div className="category-icon">
              <Wrench />
            </div>
            <h3>Construction Machines</h3>
            <p>Drills, mixers, generators and tools</p>
          </div>

          <div className="category-card">
            <div className="category-icon">
              <Package />
            </div>
            <h3>Materials</h3>
            <p>Cement, steel, pipes and aggregates</p>
          </div>

          <div className="category-card">
            <div className="category-icon">
              <Truck />
            </div>
            <h3>Transport</h3>
            <p>Trucks and temporary logistics support</p>
          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="cta">

        <div className="cta-container">

          <div>
            <span className="section-label">
              FOR CONSTRUCTION PROFESSIONALS
            </span>

            <h2>
              Have equipment sitting unused?
            </h2>

            <p>
              List your equipment and help another construction
              site while generating additional income.
            </p>
          </div>

          <button className="btn-primary btn-large">
            List Your Equipment
            <ArrowRight size={20} />
          </button>

        </div>

      </section>


      <Footer />

    </div>
  );
}

export default Home;