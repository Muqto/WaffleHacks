import { Avatar, IconButton } from "@mui/material";
import React from "react";
import "./RestaurantVerticalCard.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from '@mui/icons-material/Cancel';

interface IRestaurantVerticalCardProps {
  restaurantName: string;
  points: number;
  backgroundColor?: string;
  profilePicture: string;
  onClick?: () => void;
  onUnsub?: () => void;
}
function RestaurantVerticalCard(props: IRestaurantVerticalCardProps) {
  return (
    <div
      className="restaurant-vertical-card-container"
      style={{ backgroundColor: props.backgroundColor }}
    >
      <Avatar onClick={props.onClick} src = {props.profilePicture} className="restaurant-vertical-card-restaurant-icon" />
      <IconButton size="small" className="subscribed-restaurant-icon-button">
        <CancelIcon onClick = {props.onUnsub} className="subscribed-restaurant-icon" />
      </IconButton>
      <h4 onClick={props.onClick} className="restaurant-vertical-card-restaurant-name">
        {props.restaurantName}
      </h4>
      <h1 onClick={props.onClick} className="restaurant-vertical-card-restaurant-points">
        {props.points}{" "}
        <span onClick={props.onClick} className="restaurant-vertical-card-restaurant-points-text">
          points
        </span>
      </h1>
    </div>
  );
}

export default RestaurantVerticalCard;
