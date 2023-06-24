import React from "react";
import "./App.css";
import BottomNavigation from "./components/BottomNavigation/BottomNavigation";
import ExplorePage from "./components/ExplorePage/ExplorePage";
import HomePage from "./components/HomePage/HomePage";
import IntroPage from "./components/IntroPage/IntroPage";
import LoginPage from "./components/LoginPage/LoginPage";
import RestaurantFocusPage from "./components/RestaurantFocusPage/RestaurantFocusPage";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import BarcodePopup from "./components/BarcodePopup/BarcodePopup";
import BarcodeScanner from "./components/BarcodeScanner/BarcodeScanner";
import PostScanPage from "./components/BarcodeScanner/PostScanPage/PostScanPage";

function App() {
  return (
    <div className="App">
      {/* <IntroPage /> */}
      {/* <LoginPage /> */}
      {/* <SignUpPage /> */}
      {/* <HomePage /> */}
      {/* <BarcodePopup/> */}
      {/* <BarcodeScanner/> */}
      {/* <ExplorePage /> */}
      <PostScanPage/>
      {/* <BottomNavigation /> */}
    </div>
  );
}

export default App;
