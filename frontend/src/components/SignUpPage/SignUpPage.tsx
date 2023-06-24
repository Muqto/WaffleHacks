import { Button, TextField } from "@mui/material";
import "./SignUpPage.css";
import React, { useState, useRef } from "react";

function SignUpPage() {
  const [isStudentAccount, setIsStudentAccount] = useState(true);
  const changeAccountType = () => {
    setIsStudentAccount(!isStudentAccount);
  };
  const [profilePicture, setProfilePicture] = useState("");
  const profilePictureInput = useRef<any>(null);
  return (
    <div className="signup-page-container">
      <h1 className="signup-page-message">Create Your Account</h1>
      <div
        onClick={changeAccountType}
        className={`toggle${isStudentAccount ? " student" : " restaurant"}`}
      >
        <div className="notch">
          <span className="signup-toggle-choice">
            {isStudentAccount ? "Student" : "Restaurant"}
          </span>
        </div>
      </div>
      <div className="signup-page-form-container">
        <div className="signup-page-profile-picture"></div>
        <TextField
          className="signup-page-form-input"
          required
          label="Username"
        />
        <TextField
          className="signup-page-form-input"
          required
          label="Password"
        />
        <Button className="signup-page-submit-button" variant="contained">
          Sign Up
        </Button>
        <h4 className="signup-page-login-prompt">
          Already have an account?{" "}
          <span className="signup-page-login-prompt-link">Log in</span>
        </h4>
      </div>
    </div>
  );
}

export default SignUpPage;
