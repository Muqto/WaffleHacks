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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExplorePage from "./components/ExplorePage/ExplorePage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import RestaurantFocusPage from "./components/RestaurantFocusPage/RestaurantFocusPage";

function App() {
  const [slide, setSlide] = useState("");
  const [isStudentAccount, setIsStudentAccount] = useState(true);

  // bottom navigation selected option
  const [value, setValue] = React.useState(0);
  return (
    <div className="App">
      <Router>
        <Context.Provider
          value={{
            slide,
            setSlide,
            isStudentAccount,
            setIsStudentAccount,
            value,
            setValue,
          }}
        >
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/signup" element={<SignUpPage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/intro" element={<IntroPage />} />
            <Route exact path="/scan" element={<BarcodeScanner />} />
            <Route exact path="/postscan" element={<PostScanPage />} />
            <Route exact path="/explore" element={<ExplorePage />} />
            <Route exact path="/profile" element={<ProfilePage />} />
            <Route
              exact
              path="/restaurantfocus"
              element={<RestaurantFocusPage />}
            />
            {/* <IntroPage /> */}
            {/* <LoginPage /> */}
            {/* <SignUpPage /> */}
            {/* <HomePage /> */}
            {/* <BarcodeScanner/> */}
            {/* <PostScanPage/> */}
          </Routes>
          <BarcodePopup />
          <BottomNavigation />
        </Context.Provider>
      </Router>
    </div>
  );
}

export default App;
