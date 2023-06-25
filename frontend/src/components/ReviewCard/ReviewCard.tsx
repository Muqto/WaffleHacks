import { Avatar } from "@mui/material";
import React, { useContext } from "react";
import "./ReviewCard.css";
import { Context } from "../../context/context";

interface IReviewCardProps {
  reviewer?: string;
  review?: string;
  numberOfStars: number;
  profilePicture: string;
}
function ReviewCard(props: IReviewCardProps) {
  return (
    <div className="review-card-container">
      <Avatar src={props.profilePicture} className="review-card-reviewer-avatar" />
      <div className="review-card-review-text">
        <div className="review-card-reviewer">{props.reviewer}</div>
        <div className="review-card-review">{props.review}</div>
        <div className="review-card-stars">
          {new Array(props.numberOfStars).fill(0).map(() => (
            <span>★</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
