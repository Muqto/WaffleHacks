import React from "react";
import "./IntroPage.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function IntroPage() {
  const navigate = useNavigate();
  return (
    <div className="intro-page-container">
      <div className="intro-page-header-container">
        <h1 className="intro-page-header">MunchPoints</h1>
        <h3 className="intro-page-subheader">
          Let's fight food insecurity together, one point at a time.
        </h3>
      </div>

      <Button
        className="intro-page-register-button"
        variant="contained"
        onClick={() => navigate("/signup")}
      >
        Join Now
      </Button>
      <h4 className="intro-page-login-prompt">
        Already have an account?{" "}
        <span
          className="intro-page-login-prompt-link"
          onClick={() => navigate("/login")}
        >
          Log in
        </span>
      </h4>
    </div>
  );
}

export default IntroPage;
