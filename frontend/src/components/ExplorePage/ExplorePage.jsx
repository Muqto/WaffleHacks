import React, { useState, useEffect, useContext } from "react";
import { fetchRestaurants } from "../../api/UserAPI";
import RestaurantHorizontalCard from "../RestaurantHorizontalCard/RestaurantHorizontalCard";
import "./ExplorePage.css";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { Context } from "../../context/context";

function ExplorePage() {
  const {allOwners} = useContext(Context)

  const navigate = useNavigate();

  return (
    <div className="explore-page-container">
      <h3 className="app-logo">MunchPoints</h3>
      <h3 className="explore-page-discover-restaurants">
        Discover <span className="explore-page-discover-emoji">👀</span>
      </h3>
      <div className="explore-page-discover-restaurants-container">
        {allOwners ? (
          allOwners.map((restaurant) => (
            <RestaurantHorizontalCard
              restaurantName={restaurant.username}
              numberOfStars={4}
              profilePicture= {restaurant.profilePicture}
              onClick={() => navigate(`/restaurantfocus/${restaurant._id}`)}
            />
          ))
        ) : (
          <div className="explore-page-progress-container">
            <CircularProgress />
          </div>
        )}
      </div>
    </div>
  );
}

export default ExplorePage;
