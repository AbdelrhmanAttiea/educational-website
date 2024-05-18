import React, { useState } from "react";
import axios from "axios";
import "../css/signup_in.css";

const Sign_up_in = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState(null);

  const handleSignUpClick = () => {
    setShowSignUp(true);
  };

  const handleLogInClick = () => {
    setShowSignUp(false);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("username", username);
      formData.append("password", password);
      formData.append("image", image);

      const response = await axios.post("https://jsonplaceholder.typicode.com/users", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
      // Handle success, maybe redirect user to dashboard or show success message
    } catch (error) {
      console.error("Error signing up:", error);
      // Handle error, maybe show error message to user
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/users", {
        email,
        password,
      });
      const token = response.data.token;
      localStorage.setItem("token", token); // Save token in local storage
      console.log("Token stored in local storage:", token);
      // Handle success, maybe redirect user to dashboard or show success message
    } catch (error) {
      console.error("Error signing in:", error);
      // Handle error, maybe show error message to user
    }
  };

  return (
    <body className="body">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="content-wrapper">
              <div className="row">
                <div className="col-md-6">
                  <h1>Empower Yourself For Free</h1>
                  <p>
                    Join our community of 30 million+ learners, upskill with CPD UK
                    accredited courses, explore career development tools, and
                    psychometrics – all for free.
                  </p>
                  <a href="#">Having trouble logging in? Get in touch</a>
                </div>
                <div className="col-md-6">
                  <ul className="nav nav-tabs">
                    <li className="nav-item">
                      <a
                        className={`nav-link ${!showSignUp ? "active" : ""}`}
                        href="#"
                        onClick={handleLogInClick}
                      >
                        Log In
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={`nav-link ${showSignUp ? "active" : ""}`}
                        href="#"
                        onClick={handleSignUpClick}
                      >
                        Sign Up
                      </a>
                    </li>
                  </ul>
                  {showSignUp && (
                    <div>
                      <form onSubmit={handleSignUp}>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            id="confirmPassword"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="image">Upload Image</label>
                          <input
                            type="file"
                            className="form-control-file"
                            id="image"
                            accept="image/*"
                            onChange={(e) => setImage(e.target.files[0])}
                          />
                        </div>
                        <button type="submit" className="btn btn-primary">
                          Sign Up
                        </button>
                      </form>
                    </div>
                  )}
                  {!showSignUp && (
                    <div>
                      <form onSubmit={handleSignIn}>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                        <button type="submit" className="btn btn-primary">
                          Log In
                        </button>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Sign_up_in;
