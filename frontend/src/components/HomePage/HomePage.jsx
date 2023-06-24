import { BottomNavigation, Button } from "@mui/material";
import React, { useState, useContext, useEffect } from "react";
import RestaurantHorizontalCard from "../RestaurantHorizontalCard/RestaurantHorizontalCard";
import RestaurantVerticalCard from "../RestaurantVerticalCard/RestaurantVerticalCard";
import { Context } from "../../context/context";
import "./HomePage.css";
import { useNavigate, useParams } from "react-router-dom";
import { fetchRestaurants } from "../../api/UserAPI";
import { setSyntheticLeadingComments } from "typescript";

function HomePage() {
  const {
    isStudentAccount,
    setIsStudentAccount,
    setValue,
    allCustomers,
    allOwners,
    allReviews,
    allUsers,
    currentUserId,
    setSlide,
  } = useContext(Context);
  const navigate = useNavigate();
  const currentStudentUser = allCustomers.find(
    (user) => user._id === currentUserId
  );
  console.log(currentStudentUser);
  setIsStudentAccount(!!currentStudentUser);
  return (
    <div className="home-page-container">
      <h3 className="app-logo">MunchPoints</h3>
      {isStudentAccount && currentStudentUser ? (
        <>
          <h2 className="home-page-message">
            Hey {currentStudentUser.username} 👋
          </h2>
          <h3 className="home-page-your-restaurants">Your restaurants</h3>
          <div className="home-page-your-restaurants-card-carousel">
            {currentStudentUser.subscribedRestos.map((resto) => {
              const restoName = allOwners.find(
                (r) => r._id === resto.restaurantUserId
              ).username;

              return (
                <RestaurantVerticalCard
                  restaurantName={restoName}
                  points={resto.points}
                  backgroundColor={"#E1ECC8"}
                  profilePicture={resto.profilePicture}
                  onClick={() =>
                    navigate(`/restaurantfocus/${resto.restaurantUserId}`)
                  }
                />
              );
            })}
          </div>
          <h3 className="home-page-discover-restaurants">
            Discover <span className="home-page-discover-emoji">👀</span>
          </h3>
          <div className="home-page-discover-restaurants-container">
            {allOwners &&
              allOwners.map((resto) => {
                console.log(resto);
                return (
                  <RestaurantHorizontalCard
                    restaurantName={resto.username}
                    numberOfStars={4}
                    backgroundColor={"#E1ECC8"}
                    profilePicture={resto.profilePicture}
                    onClick={() =>
                      navigate(`/restaurantfocus/${resto._id}`)
                    }
                  />
                );
              })}
          </div>
        </>
      ) : (
        <>
          <h1 className="home-page-owner-message">Scan A Barcode</h1>
          <Button
            className="home-page-scan-button"
            variant="contained"
            onClick={() => {
              navigate("/scan");
              setValue(1);
              setSlide("slide");
            }}
          >
            SCAN
          </Button>
        </>
      )}
    </div>
  );
}

export default HomePage;
