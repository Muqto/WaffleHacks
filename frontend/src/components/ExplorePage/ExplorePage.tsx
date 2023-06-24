import React from "react";
import RestaurantHorizontalCard from "../RestaurantHorizontalCard/RestaurantHorizontalCard";
import "./ExplorePage.css";

function ExplorePage() {
  return (
    <div className="explore-page-container">
      <h3 className="app-logo">MunchPoints</h3>
      <h3 className="explore-page-discover-restaurants">
        Discover <span className="explore-page-discover-emoji">👀</span>
      </h3>
      <div className="explore-page-discover-restaurants-container">
        <RestaurantHorizontalCard restaurantName="A" numberOfStars={4} />
        <RestaurantHorizontalCard
          restaurantName="B"
          numberOfStars={5}
          backgroundColor={"#FFEEBB"}
        />
        <RestaurantHorizontalCard
          restaurantName="C"
          numberOfStars={2}
          backgroundColor={"#FFDEDE"}
        />
        <RestaurantHorizontalCard restaurantName="D" numberOfStars={5} />
        <RestaurantHorizontalCard restaurantName="E" numberOfStars={5} />
        <RestaurantHorizontalCard
          restaurantName="F"
          numberOfStars={5}
          backgroundColor={"#FFDEDE"}
        />
      </div>
    </div>
  );
}

export default ExplorePage;
