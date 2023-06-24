import { Avatar, Button } from "@mui/material";
import React from "react";
import "./ProfilePage.css";

function ProfilePage() {
  return (
    <div className="profile-page-container">
      <div className="profile-page-header">
        <Avatar className="profile-page-avatar" />
      </div>
      <div className="profile-bottom-div">
        <h1 className="profile-page-username">John Wick</h1>
      </div>
    </div>
  );
}

export default ProfilePage;
