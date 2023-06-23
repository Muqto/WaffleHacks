import React from "react";
import "./IntroPage.css";
import Button from "@mui/material/Button";

function IntroPage() {
  return (
    <div className="intro-page-container">
      <div className="intro-page-header-container">
        <h1 className="intro-page-header">Name of the App</h1>
        <h3 className="intro-page-subheader">
          Let's fight food insecurity <span>together</span>.
        </h3>
      </div>

      <Button className="intro-page-register-button" variant="contained">
        Join Now
      </Button>
      <h4 className="intro-page-login-prompt">
        Already have an account?{" "}
        <span className="intro-page-login-prompt-link">Log in</span>
      </h4>
    </div>
  );
}

export default IntroPage;
