import React from "react";
import "./LoginPage.css";
import { Button, TextField } from "@mui/material";

function LoginPage() {
  return (
    <div className="login-page-container">
      <h1 className="login-page-message">Welcome back.</h1>
      <div className="login-page-form-container">
        <h1 className="login-page-header">Log in</h1>
        <TextField
          className="login-page-form-input"
          required
          label="Username"
        />
        <TextField
          className="login-page-form-input"
          required
          label="Password"
        />
        <Button className="login-page-submit-button" variant="contained">
          Sign in
        </Button>
        <h4 className="login-page-signup-prompt">
          Don't have an account?{" "}
          <span className="login-page-register-prompt-link">Register</span>
        </h4>
      </div>
    </div>
  );
}

export default LoginPage;
