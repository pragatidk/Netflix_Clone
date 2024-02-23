// login.js
import React, { useState } from "react";
import { Link } from "react-router-dom";


function Login() {
  const [agreed, setAgreed] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false);

  const handleCheckboxChange = () => {
    setAgreed(!agreed);
  };

  const handleNewUserCheckboxChange = () => {
    setIsNewUser(!isNewUser);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (agreed) {
      console.log("Logging in...");
    } else {
      console.log("Please agree to terms and conditions");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-30 h-30">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email"><strong>Email</strong></label>
            <input type="email" placeholder="Enter Email"
             className="form-control rounded-0" />
          </div>

          <div className="mb-3">
            <label htmlFor="password"><strong>Password</strong></label>
            <input type="password" placeholder="Enter Password" 
             className="form-control rounded-0" />
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="termsCheckbox"
              checked={agreed}
              onChange={handleCheckboxChange}
            />
            <label className="form-check-label" htmlFor="termsCheckbox">
              I agree to all terms and conditions
            </label>
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="newUserCheckbox"
              checked={isNewUser}
              onChange={handleNewUserCheckboxChange}
            />
            <label className="form-check-label" htmlFor="newUserCheckbox">
              New User
            </label>
          </div>

          <Link to="/Signup">
            <button
              type="submit"
              className={`btn ${isNewUser ? 'btn-success' : 'btn-default border bg-light'} w-100 rounded-0`}
              disabled={!agreed && !isNewUser}
            >
              {isNewUser ? 'Sign Up' : 'Log In'}
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
