import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { GoogleLogin } from "react-google-login"; // Import GoogleLogin component

const API_URL = import.meta.env.VITE_API_URL; // Ensure this points to your backend API URL

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password, name };

    axios
      .post(`${API_URL}/auth/signup`, requestBody)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  const handleGoogleLoginSuccess = (response) => {
    // Handle successful Google login
    const { tokenId } = response;
    axios
      .post(`${API_URL}/auth/google`, { tokenId })
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  const handleGoogleLoginFailure = (error) => {
    // Handle Google login failure
    console.error("Google login error:", error);
  };

  return (
    <div className="container">
      <div className="form-box">
        <form className="form" onSubmit={handleSignupSubmit}>
          <h1>Signup</h1>

          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleEmail}
            className="input"
            autoComplete="off"
            placeholder="Email"
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handlePassword}
            className="input"
            autoComplete="off"
            placeholder="Password"
            required
          />

          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleName}
            className="input"
            autoComplete="off"
            placeholder="Name"
            required
          />

          <button type="submit">Create Account</button>
        </form>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <p className="mt-10 mb-2">Already have an account?</p>
        <Link to={"/login"}>Log in</Link>

        {/* Google SSO button */}
        <GoogleLogin
          clientId="254377218393-77l212k5736ue5c9d2k4i1p226cu7jbv.apps.googleusercontent.com.apps.googleusercontent.com" // Replace with your Google Client ID
          onSuccess={handleGoogleLoginSuccess}
          onFailure={handleGoogleLoginFailure}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </div>
  );
}

export default SignupPage;
