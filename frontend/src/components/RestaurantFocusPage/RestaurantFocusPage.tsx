import { Button, IconButton } from "@mui/material";
import React from "react";
import ReviewCard from "../ReviewCard/ReviewCard";
import "./RestaurantFocusPage.css";
import EditIcon from "@mui/icons-material/Edit";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export interface IRestaurantFocusPage {
  restaurantName: string;
}
function RestaurantFocusPage(props: IRestaurantFocusPage) {
  return (
    <div className="restaurant-focus-page-container">
      <IconButton className="restaurant-focus-page-return-arrow">
        <ArrowBackIosIcon className="restaurant-focus-page-return-arrow-icon"/>
      </IconButton>
      <div className="restaurant-focus-page-image"></div>
      <div className="restaurant-focus-page-info-panel">
        <h1 className="restaurant-focus-page-restaurant-name">
          {props.restaurantName}
        </h1>
        <ReviewCard
          reviewer="Jane Doe"
          review='"very good food"'
          numberOfStars={4}
        />
        <ReviewCard
          reviewer="Jane Doe"
          review='"very good food"'
          numberOfStars={4}
        />
        <ReviewCard
          reviewer="Jane Doe"
          review='"very good food"'
          numberOfStars={4}
        />
        ...
        <Button
          className="restaurant-focus-page-review-button"
          variant="contained"
          startIcon={<EditIcon />}
        >
          Leave a Review
        </Button>
      </div>
    </div>
  );
}

export default RestaurantFocusPage;