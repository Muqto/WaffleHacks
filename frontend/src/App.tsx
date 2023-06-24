import React from "react";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import IntroPage from "./components/IntroPage/IntroPage";
import LoginPage from "./components/LoginPage/LoginPage";
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
      <PostScanPage/>
      {/* <BottomNavigation /> */}
    </div>
  );
}

export default App;
