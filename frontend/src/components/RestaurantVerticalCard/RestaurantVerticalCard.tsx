import { Avatar, IconButton } from "@mui/material";
import React from "react";
import "./RestaurantVerticalCard.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface IRestaurantVerticalCardProps {
  restaurantName: string;
  points: number;
  backgroundColor?: string;
}
function RestaurantVerticalCard(props: IRestaurantVerticalCardProps) {
  return (
    <div
      className="restaurant-vertical-card-container"
      style={{ backgroundColor: props.backgroundColor }}
    >
      <Avatar className="restaurant-vertical-card-restaurant-icon" />
      <IconButton size="small" className="subscribed-restaurant-icon-button">
        <CheckCircleIcon className="subscribed-restaurant-icon" />
      </IconButton>
      <h4 className="restaurant-vertical-card-restaurant-name">
        {props.restaurantName}
      </h4>
      <h1 className="restaurant-vertical-card-restaurant-points">
        {props.points}{" "}
        <span className="restaurant-vertical-card-restaurant-points-text">
          points
        </span>
      </h1>
    </div>
  );
}

export default RestaurantVerticalCard;
