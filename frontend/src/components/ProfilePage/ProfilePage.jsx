import { Avatar, Button } from "@mui/material";
import {useContext} from "react";
import "./ProfilePage.css";
import { Context } from "../../context/context";
import { useNavigate } from "react-router";
import RestaurantVerticalCard from "../RestaurantVerticalCard/RestaurantVerticalCard";

function ProfilePage() {
  const {user, setIsLoggedIn} = useContext(Context)
  const navigate = useNavigate()
  return (
    <div className="profile-page-container">
      <div className="profile-page-header">
        <Avatar src={user.profilePicture} className="profile-page-avatar" />
      </div>
      <div className="profile-bottom-div">
        <h1 className="profile-page-username">{user.username}</h1>
        <div className="profile-page-logout">
        <Button onClick={() => {
          setIsLoggedIn(false)
          navigate("/login")
          }} 
          className="profile-page-logout-button" 
          variant="outlined">
          Logout
        </Button>
      </div>
      </div>
      
    </div>
  );
}

export default ProfilePage;
