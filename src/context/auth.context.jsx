import React, { useState, useEffect } from "react";
import axios from "axios";
import { GoogleLogin } from "react-google-login";

const API_URL = import.meta.env.VITE_API_URL;
const GOOGLE_CLIENT_ID =
  "233331719300-nkc8ititm7rnsq1ljbgvhfql7rnmdl4m.apps.googleusercontent.com";

const AuthContext = React.createContext();

function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [authError, setAuthError] = useState(null);

  const storeToken = (token) => {
    localStorage.setItem("authToken", token);
  };

  const authenticateUser = () => {
    const storedToken = localStorage.getItem("authToken");

    if (storedToken) {
      axios
        .get(`${API_URL}/auth/verify`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((response) => {
          const user = response.data;
          setIsLoggedIn(true);
          setIsLoading(false);
          setUser(user);
        })
        .catch((error) => {
          setAuthError(error.response.data.message);
          setIsLoggedIn(false);
          setIsLoading(false);
          setUser(null);
        });
    } else {
      setIsLoggedIn(false);
      setIsLoading(false);
      setUser(null);
    }
  };

  const removeToken = () => {
    localStorage.removeItem("authToken");
  };

  const logOutUser = () => {
    removeToken();
    authenticateUser();
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  const handleGoogleLoginSuccess = (response) => {
    axios
      .post(`${API_URL}/auth/google-login`, { tokenId: response.tokenId })
      .then((response) => {
        const user = response.data;
        storeToken(user.token); // Assuming your backend returns a token
        setIsLoggedIn(true);
        setUser(user);
      })
      .catch((error) => {
        setAuthError(error.response.data.message);
        setIsLoggedIn(false);
        setUser(null);
      });
  };

  const handleGoogleLoginFailure = (error) => {
    console.error("Google login failed:", error);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        user,
        authenticateUser,
        logOutUser,
        authError,
      }}
    >
      {props.children}
      <GoogleLogin
        clientId={GOOGLE_CLIENT_ID}
        onSuccess={handleGoogleLoginSuccess}
        onFailure={handleGoogleLoginFailure}
        cookiePolicy={"single_host_origin"}
        render={(renderProps) => (
          <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
            Sign in with Google
          </button>
        )}
      />
    </AuthContext.Provider>
  );
}

export { AuthProviderWrapper, AuthContext };
