import {
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Rating,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ReviewCard from "../ReviewCard/ReviewCard";
import "./RestaurantFocusPage.css";
import EditIcon from "@mui/icons-material/Edit";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export interface IRestaurantFocusPage {}
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

  // get restaurant name from url
  const [searchParams, setSearchParams] = useSearchParams();
  const [gotRestaurantName, setGotRestaurantName] = useState(false);
  const [restaurantName, setRestaurantName] = useState("");
  useEffect(() => {
    setRestaurantName(searchParams.get("restaurantName") as string);
    setGotRestaurantName(true);
  }, []);

  const navigate = useNavigate();
  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <div className="restaurant-focus-page-container">
      {gotRestaurantName ? (
        <>
          <IconButton
            className="restaurant-focus-page-return-arrow"
            onClick={handleReturn}
          >
            <ArrowBackIosIcon className="restaurant-focus-page-return-arrow-icon" />
          </IconButton>
          <div className="restaurant-focus-page-image"></div>
          <div className="restaurant-focus-page-info-panel">
            <IconButton className="restaurant-focus-page-add-icon-button">
              <AddCircleIcon className="restaurant-focus-page-add-icon" />
            </IconButton>
            <h1 className="restaurant-focus-page-restaurant-name">
              {restaurantName}
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
              <DialogTitle>{restaurantName}</DialogTitle>
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
        </>
      ) : (
        <div className="restaurant-focus-page-circular-progress">
          <CircularProgress />
        </div>
      )}
    </div>
  );
}

export default RestaurantFocusPage;
