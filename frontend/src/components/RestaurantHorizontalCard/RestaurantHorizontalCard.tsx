import { Avatar, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./RestaurantHorizontalCard.css";
import React from "react";

interface IRestaurantHorizontalCardProps {
  restaurantName: string;
  numberOfStars: number;
}
function RestaurantHorizontalCard(props: IRestaurantHorizontalCardProps) {
  return (
    <div className="restaurant-horizontal-card-container">
      <Avatar className="restaurant-horizontal-card-restaurant-icon" />
      <div className="restaurant-horizontal-card-text-container">
        <h4 className="restaurant-vertical-card-restaurant-name">
          {props.restaurantName}
        </h4>
        <div className="restaurant-horizontal-card-stars">
          {new Array(props.numberOfStars).fill(0).map(() => (
            <span>★</span>
          ))}
        </div>
      </div>
      <IconButton
        size="small"
        className="restaurant-horizontal-card-more-info-icon-button"
      >
        <ArrowForwardIosIcon className="restaurant-horizontal-card-more-info-icon" />
      </IconButton>
    </div>
  );
}

export default RestaurantHorizontalCard;
