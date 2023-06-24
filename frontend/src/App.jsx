import React, { useState, useEffect } from "react";
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
import axios from "axios";

function App() {
  const [slide, setSlide] = useState("");
  const [isStudentAccount, setIsStudentAccount] = useState(true);
  const [allCustomers, setAllCustomers] = useState([]);
  const [allOwners, setAllOwners] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [allReviews, setAllReviews] = useState();
  const [user, setUser] = useState({
    username: "",
    profilePicture: "",
    isStudent: true,
  });

  const [currentUserId, setCurrentUserId] = useState(0)

  useEffect(() => {
    setAllUsers([...allCustomers, ...allOwners]);
  }, [allOwners, allCustomers]);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    const restoRes = await axios.get("http://localhost:6006/owner/restaurants");
    const studentRes = await axios.get(
      "http://localhost:6006/customer/customers"
    );
    const reviewRes = await axios.get("http://localhost:6006/review/reviews");
    setAllCustomers(studentRes.data);
    setAllOwners(restoRes.data);
    setAllReviews(reviewRes);
  };

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
            user,
            setUser,
            allCustomers,
            allOwners,
            allReviews,
            allUsers,
            setAllUsers,
            currentUserId,
            setCurrentUserId
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
              path="/restaurantfocus/:id"
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
