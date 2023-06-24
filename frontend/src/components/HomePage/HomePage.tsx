import React from "react";
import RestaurantVerticalCard from "../RestaurantVerticalCard/RestaurantVerticalCard";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-page-container">
      <h3 className="app-logo">MunchPoints</h3>
      <h2 className="home-page-message">Hey John 👋</h2>
      <h3 className="home-page-your-restaurants">Your restaurants</h3>
      <div className="home-page-your-restaurants-card-carousel">
        <RestaurantVerticalCard />
        <RestaurantVerticalCard />
        <RestaurantVerticalCard />
      </div>
      <h3 className="home-page-discover-restaurants">
        Discover <span className="home-page-discover-emoji">👀</span>
      </h3>
    </div>
  );
}

export default HomePage;
