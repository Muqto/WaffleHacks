import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Rating,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import ReviewCard from "../ReviewCard/ReviewCard";
import "./RestaurantFocusPage.css";
import EditIcon from "@mui/icons-material/Edit";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export interface IRestaurantFocusPage {
  restaurantName: string;
}
function RestaurantFocusPage(props: IRestaurantFocusPage) {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmission = () => {
    setOpen(false);
  };
  const handleClick = () => {
    setOpen(true);
  };

  return (
    <div className="restaurant-focus-page-container">
      <IconButton className="restaurant-focus-page-return-arrow">
        <ArrowBackIosIcon className="restaurant-focus-page-return-arrow-icon" />
      </IconButton>
      <div className="restaurant-focus-page-image"></div>
      <div className="restaurant-focus-page-info-panel">
        <IconButton className="restaurant-focus-page-add-icon-button">
          <AddCircleIcon className="restaurant-focus-page-add-icon" />
        </IconButton>
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
          onClick={handleClick}
        >
          Leave a Review
        </Button>
        <Dialog
          style={{ borderRadius: "30px !important" }}
          fullWidth
          open={open}
          onClose={handleClose}
        >
          <DialogTitle>{props.restaurantName}</DialogTitle>
          <DialogContent>
            <DialogContentText>What'd you think?</DialogContentText>
            <TextField
              fullWidth
              autoFocus
              margin="dense"
              label="review"
              type="text"
              variant="standard"
              multiline
            />
            <DialogContent>
              <Rating />
            </DialogContent>
            <Button
              onClick={handleSubmission}
              variant="contained"
              className="restaurant-review-form-submit-button"
            >
              Post
            </Button>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default RestaurantFocusPage;
