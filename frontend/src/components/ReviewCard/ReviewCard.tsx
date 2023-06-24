import { Avatar } from "@mui/material";
import React from "react";
import "./ReviewCard.css";

interface IReviewCardProps {
  reviewer?: string;
  review?: string;
  numberOfStars: number;
}
function ReviewCard(props: IReviewCardProps) {
  return (
    <div className="review-card-container">
      <Avatar className="review-card-reviewer-avatar" />
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
