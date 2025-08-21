import React, { useState } from "react";
import "./Signup.css";
import statesAndCities from "./states";
import signupImg from "../../assets/halfbar.png"; // or "/assets/signup.png" if in public

const Signup = () => {
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setCities(statesAndCities[state] || []);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);

    // auto-hide after 3 seconds
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div className="signup-container">
      {/* Left side form */}
      <div className="form-section">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2>Create Account</h2>
          <p className="dec">Welcome to Trade Mart.ng, please enter your information & get started.</p>

          <label><strong>FULL NAME</strong></label>
          <input type="text" placeholder="Enter your full name" required />

          <label><strong>EMAIL</strong></label>
          <input type="email" placeholder="Enter your email" required />

          <label><strong>PHONE</strong></label>
          <input type="tel" placeholder="Enter your phone number" required />

          <label><strong>PASSWORD</strong></label>
          <input type="password" placeholder="Enter your password" required />

          <label><strong>LOCATION</strong></label>
          <select value={selectedState} onChange={handleStateChange} required>
            <option value="">Select State</option>
            {Object.keys(statesAndCities).map((state, i) => (
              <option key={i} value={state}>
                {state}
              </option>
            ))}
          </select>

          {cities.length > 0 && (
            <>
              <label><strong>CITY</strong></label>
              <select required>
                <option value="">Select City</option>
                {cities.map((city, i) => (
                  <option key={i} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </>
          )}

          <label><strong>GENDER</strong></label>
          <select required>
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <div className="terms">
            <input type="checkbox" className="box" required />
            <span>
              I accept the <a href="#">Terms</a> and <a href="#">Policy</a>.
            </span>
          </div>

          <button type="submit">Create Account</button>
        </form>

        {/* ✅ Success Popup */}
        {showPopup && (
          <div className="popup">
            🎉 Account Created Successfully!
          </div>
        )}
      </div>

      {/* Right side image */}
      <div className="image-section">
        <img src={signupImg} alt="Signup" />
      </div>
    </div>
  );
};

export default Signup;
