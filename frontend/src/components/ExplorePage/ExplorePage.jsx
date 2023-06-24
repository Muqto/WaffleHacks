import React, { useState, useEffect } from "react";
import { fetchRestaurants } from "../../api/UserAPI";
import RestaurantHorizontalCard from "../RestaurantHorizontalCard/RestaurantHorizontalCard";
import "./ExplorePage.css";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

function ExplorePage() {
  const [allRestaurants, setAllRestaurants] = useState();
  const getAllRestaurants = async () => {
    const res = await fetchRestaurants()
      .then((res) => {
        setAllRestaurants(res.data);
        return res;
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllRestaurants();
  }, []);
  const navigate = useNavigate();

  return (
    <div className="explore-page-container">
      <h3 className="app-logo">MunchPoints</h3>
      <h3 className="explore-page-discover-restaurants">
        Discover <span className="explore-page-discover-emoji">👀</span>
      </h3>
      <div className="explore-page-discover-restaurants-container">
        {allRestaurants ? (
          allRestaurants.map((restaurant) => (
            <RestaurantHorizontalCard
              restaurantName={restaurant.username}
              numberOfStars={4}
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
