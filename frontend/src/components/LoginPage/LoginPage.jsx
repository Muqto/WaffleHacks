import React, { useContext, useState } from "react";
import "./LoginPage.css";
import { Button, TextField } from "@mui/material";
import { Context } from "../../context/context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const { setUser, allUsers, setCurrentUserId, setIsLoggedIn } =
    useContext(Context);
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const login = async () => {
    const user = allUsers.find((user) => user.username === loginData.username);
    const endpoint = user.isStudent ? "customer/login" : "owner/login";
    const body = { ...loginData };
    const res = await axios.post(`http://localhost:6006/${endpoint}`, body);
    const newUser = res.data.result;
    setUser(newUser);
    console.log(newUser);
    setCurrentUserId(newUser._id);
    setIsLoggedIn(true);
    navigate(`/`);
  };

  return (
    <div className="login-page-container">
      <h1 className="login-page-message">Welcome back.</h1>
      <div className="login-page-form-container">
        <h1 className="login-page-header">Log in</h1>
        <TextField
          className="login-page-form-input1"
          required
          label="Username"
          onChange={(e) =>
            setLoginData({ ...loginData, username: e.target.value })
          }
        />
        <TextField
          className="login-page-form-input2"
          required
          type="password"
          label="Password"
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
        />
        <Button
          onClick={login}
          className="login-page-submit-button"
          variant="contained"
        >
          Sign in
        </Button>
        <h4 className="login-page-signup-prompt">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="login-page-signup-prompt-link"
          >
            Register
          </span>
        </h4>
      </div>
    </div>
  );
}

export default LoginPage;
