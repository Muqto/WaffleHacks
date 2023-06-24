import React from "react";
import RestaurantHorizontalCard from "../RestaurantHorizontalCard/RestaurantHorizontalCard";
import RestaurantVerticalCard from "../RestaurantVerticalCard/RestaurantVerticalCard";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-page-container">
      <h3 className="app-logo">MunchPoints</h3>
      <h2 className="home-page-message">Hey John 👋</h2>
      <h3 className="home-page-your-restaurants">Your restaurants</h3>
      <div className="home-page-your-restaurants-card-carousel">
        <RestaurantVerticalCard restaurantName="McDucknalds" points={95} />
        <RestaurantVerticalCard restaurantName="noodles" points={30} />
        <RestaurantVerticalCard restaurantName="Snoopy's" points={25} />
        <RestaurantVerticalCard restaurantName="Naruto's Ramen" points={105} />
      </div>
      <h3 className="home-page-discover-restaurants">
        Discover <span className="home-page-discover-emoji">👀</span>
      </h3>
      <div className="home-page-discover-restaurants-container">
        <RestaurantHorizontalCard restaurantName="A" numberOfStars={4} />
        <RestaurantHorizontalCard restaurantName="B" numberOfStars={5} />
        <RestaurantHorizontalCard restaurantName="C" numberOfStars={2} />
        <RestaurantHorizontalCard restaurantName="D" numberOfStars={5} />
      </div>
    </div>
  );
}

export default HomePage;
