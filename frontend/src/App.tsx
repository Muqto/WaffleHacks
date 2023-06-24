import React, { useState } from "react";
import "./App.css";
import BottomNavigation from "./components/BottomNavigation/BottomNavigation";
import HomePage from "./components/HomePage/HomePage";
import IntroPage from "./components/IntroPage/IntroPage";
import LoginPage from "./components/LoginPage/LoginPage";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import BarcodePopup from "./components/BarcodePopup/BarcodePopup";
import BarcodeScanner from "./components/BarcodeScanner/BarcodeScanner";
import PostScanPage from "./components/BarcodeScanner/PostScanPage/PostScanPage";
import { Context } from "./context/context";

function App() {
  const [slide, setSlide] = useState("")
  return (
    <div className="App">
      <Context.Provider value={{slide, setSlide}}>
      {/* <IntroPage /> */}
      {/* <LoginPage /> */}
      {/* <SignUpPage /> */}
      {/* <HomePage /> */}
      <BarcodePopup/>
      {/* <BarcodeScanner/> */}
      {/* <PostScanPage/> */}
      <BottomNavigation />
      </Context.Provider>
    </div>
  );
}

export default App;
