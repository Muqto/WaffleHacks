import React from "react";
import "./App.css";
import BottomNavigation from "./components/BottomNavigation/BottomNavigation";
import HomePage from "./components/HomePage/HomePage";
import IntroPage from "./components/IntroPage/IntroPage";
import LoginPage from "./components/LoginPage/LoginPage";
import SignUpPage from "./components/SignUpPage/SignUpPage";

function App() {
  return (
    <div className="App">
      {/* <IntroPage /> */}
      {/* <LoginPage /> */}
      {/* <SignUpPage /> */}
      <HomePage />
      <BottomNavigation />
    </div>
  );
}

export default App;
