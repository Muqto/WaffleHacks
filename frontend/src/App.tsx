import React from "react";
import "./App.css";
import BottomNavigation from "./components/BottomNavigation/BottomNavigation";
import ExplorePage from "./components/ExplorePage/ExplorePage";
import HomePage from "./components/HomePage/HomePage";
import IntroPage from "./components/IntroPage/IntroPage";
import LoginPage from "./components/LoginPage/LoginPage";
import RestaurantFocusPage from "./components/RestaurantFocusPage/RestaurantFocusPage";
import SignUpPage from "./components/SignUpPage/SignUpPage";

function App() {
  return (
    <div className="App">
      {/* <IntroPage /> */}
      {/* <LoginPage /> */}
      {/* <SignUpPage /> */}
      {/* <HomePage /> */}
      {/* <ExplorePage /> */}
      <RestaurantFocusPage restaurantName="Boop" />
      <BottomNavigation />
    </div>
  );
}

export default App;
