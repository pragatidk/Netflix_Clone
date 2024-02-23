// App.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePicture: null,
  });

  const [isOldUser, setIsOldUser] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      profilePicture: file,
    }));
  };

  const handleCheckboxChange = () => {
    setIsOldUser((prevValue) => !prevValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      console.error("Password and Confirm Password do not match");
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      console.error("Password does not meet the criteria");
      return;
    }

    console.log({ formData, isOldUser });
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-30 h-30">
        <div>
          <h2>{isOldUser ? "Log In" : "Sign Up"}</h2>

          <form onSubmit={handleSubmit}>
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Name"
              className="form-control rounded-0"
            />

            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              className="form-control rounded-0"
              required
            />

            <div className="mb-3">
              <label htmlFor="password">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="form-control rounded-0"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="confirmPassword">
                <strong>Confirm Password</strong>
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="form-control rounded-0"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="profilePicture" className="form-label">
                <strong>Profile Picture</strong>
              </label>
              <input
                type="file"
                name="profilePicture"
                onChange={handleFileChange}
                accept="image/*"
                className="form-control w-100 rounded-0"
              />
            </div>

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="oldUserCheckbox"
                checked={isOldUser}
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="oldUserCheckbox">
                Old User
              </label>
            </div>

            <Link to="/Signup">
              <button
                type="submit"
                className={`btn ${isOldUser ? 'btn-default border bg-light' : 'btn-success'} w-100 rounded-0`}
              >
                {isOldUser ? 'Log In' : 'Sign Up'}
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
