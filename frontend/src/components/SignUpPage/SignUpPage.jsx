import { Avatar, Button, TextField } from "@mui/material";
import "./SignUpPage.css";
import { useState, useContext } from "react";
import FileBase from 'react-file-base64'
import { Context } from "../../context/context";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function SignUpPage() {
  const { isStudentAccount, setIsStudentAccount, setUser, currentUserId, setCurrentUserId } = useContext(Context);
  const navigate = useNavigate()
  const [signUpData, setSignUpData] = useState({
    email: '', username: '', password : '', isStudent: true, profilePicture: ''
})

  const changeAccountType = () => {
    setIsStudentAccount(!isStudentAccount);
    console.log(!isStudentAccount)
  };

  const signUpClick = async () => {
    const endpoint = isStudentAccount ? 'customer/signup' : 'owner/signup'
    const body = {...signUpData, isStudent: isStudentAccount}
    const res = await axios.post(`http://localhost:6006/${endpoint}`, body)
    const newUser = res.data.result
    setUser(newUser)
    setCurrentUserId(newUser._id)
    navigate(`/`)
  }


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
        <Avatar src={`${signUpData.profilePicture}`} className="signup-page-profile-picture"></Avatar>
        <div className="fileInput">
            <FileBase 
                type = "file"
                multiple = {false}
                onDone = {({base64}) => setSignUpData({...signUpData, profilePicture : base64})}
            />
        </div>
        <TextField
          className="signup-page-form-input"
          required
          label="Email"
          onChange={ (e) => setSignUpData({...signUpData, email: e.target.value})}
        />
        <TextField
          className="signup-page-form-input"
          required
          label="Username"
          onChange={ (e) => setSignUpData({...signUpData, username: e.target.value})}
        />
        <TextField
          className="signup-page-form-input"
          required
          label="Password"
          type="password"
          onChange={ (e) => setSignUpData({...signUpData, password: e.target.value})}
        />
        <Button onClick={signUpClick} className="signup-page-submit-button" variant="contained">
          Sign Up
        </Button>
        <h4 className="signup-page-login-prompt">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")} className="signup-page-login-prompt-link">Log in</span>
        </h4>
      </div>
    </div>
  );
}

export default SignUpPage;
