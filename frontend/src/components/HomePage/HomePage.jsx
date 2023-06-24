import { BottomNavigation, Button } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import RestaurantHorizontalCard from "../RestaurantHorizontalCard/RestaurantHorizontalCard";
import RestaurantVerticalCard from "../RestaurantVerticalCard/RestaurantVerticalCard";
import { Context } from "../../context/context";
import "./HomePage.css";
import { useNavigate, useParams } from "react-router-dom";

function HomePage() {
  const { isStudentAccount, setIsStudentAccount, setValue, allCustomers, allOwners, allReviews, allUsers } = useContext(Context);
  
  
  const { userId } = useParams()
  const navigate = useNavigate();
  const currentStudentUser = allCustomers.find(user => user._id === userId)
  console.log(currentStudentUser)
  setIsStudentAccount(!!currentStudentUser)
  return (
    <div className="home-page-container">
      <h3 className="app-logo">MunchPoints</h3>
      {isStudentAccount && currentStudentUser ? (
        <>
          <h2 className="home-page-message">Hey {currentStudentUser.username} 👋</h2>
          <h3 className="home-page-your-restaurants">Your restaurants</h3>
          <div className="home-page-your-restaurants-card-carousel">
            {currentStudentUser.subscribedRestos.map((resto) => { 
              const restoName = allOwners.filter(r => r._id === resto.restaurantUserId)
              
              return <RestaurantVerticalCard 
                  restaurantName={restoName} 
                  points={resto.points} 
                  backgroundColor={"#E1ECC8" }
                  onClick={() => navigate(`/restaurantfocus/${resto.restaurantUserId}`)}
              />
            })}
            {/* <RestaurantVerticalCard
              restaurantName="McDucknalds"
              points={95}
              onClick={() =>
                navigate(`/restaurantfocus?restaurantName=${"McDucknalds"}`)
              }
            />
            <RestaurantVerticalCard
              restaurantName="noodles"
              points={30}
              backgroundColor={"#E1ECC8"}
            />
            <RestaurantVerticalCard
              restaurantName="Snoopy's"
              points={25}
              backgroundColor={"#FFDEDE"}
            />
            <RestaurantVerticalCard
              restaurantName="Naruto's Ramen"
              points={105}
            /> */}
          </div>
          <h3 className="home-page-discover-restaurants">
            Discover <span className="home-page-discover-emoji">👀</span>
          </h3>
          <div className="home-page-discover-restaurants-container">
            {currentStudentUser.subscribedRestos.map((resto) => { 
              const restoName = allOwners.filter(r => r._id === resto.restaurantUserId)
              
              return <RestaurantHorizontalCard 
                  restaurantName={restoName} 
                  numberOfStars={4} 
                  backgroundColor={"#E1ECC8"}
                  onClick={() => navigate(`/restaurantfocus/${resto.restaurantUserId}`)}
            />
            })}
            {/* <RestaurantHorizontalCard
              restaurantName="A"
              numberOfStars={4}
              onClick={() => navigate(`/restaurantfocus?restaurantName=${"A"}`)}
            />
            <RestaurantHorizontalCard
              restaurantName="B"
              numberOfStars={5}
              backgroundColor={"#FFEEBB"}
            />
            <RestaurantHorizontalCard
              restaurantName="C"
              numberOfStars={2}
              backgroundColor={"#FFDEDE"}
            />
            <RestaurantHorizontalCard restaurantName="D" numberOfStars={5} /> */}
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
