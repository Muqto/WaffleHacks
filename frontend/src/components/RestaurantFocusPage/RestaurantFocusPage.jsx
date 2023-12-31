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
  Avatar,
} from "@mui/material";
import React, { useEffect, useState, useContext } from "react";
import { Context } from "../../context/context";
import ReviewCard from "../ReviewCard/ReviewCard";
import "./RestaurantFocusPage.css";
import EditIcon from "@mui/icons-material/Edit";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useParams, useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  fetchReviews,
  fetchRestaurants,
  addSubscription,
  addNewReview,
  modifyPoints,
} from "../../api/UserAPI";

function RestaurantFocusPage() {
  const { currentUserId, allCustomers, setAllCustomers, user, setUser } =
    useContext(Context);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setReviewStars(0);
    setOpen(false);
  };
  const handleSubmission = () => {
    setOpen(false);
    postNewReview();
  };
  const handleClick = () => {
    setOpen(true);
  };
  const currentStudentUser = allCustomers.find(
    (user) => user._id === currentUserId
  );

  // get restaurant name from url
  const [gotCurrentRestaurant, setGotCurrentRestaurant] = useState(false);
  let { id } = useParams();

  // get restaurant name from id
  const [currentRestaurant, setCurrentRestaurant] = useState();
  const getCurrentRestaurant = async () => {
    const res = await fetchRestaurants()
      .then((res) => {
        setCurrentRestaurant(
          res.data.filter((restaurant) => restaurant._id === id)
        );
        setGotCurrentRestaurant(true);
        return res;
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getCurrentRestaurant();
  }, [id]);

  // get all reviews corresponding to current restaurant
  const [restaurantReviews, setRestaurantReviews] = useState();
  const getAllRestaurantReviews = async () => {
    const res = await fetchReviews()
      .then((res) => {
        setRestaurantReviews(
          res.data.filter((review) => review.restaurantId === id)
        );
        return res;
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getAllRestaurantReviews();
  }, [id]);

  // add restaurant to subscription (student accounts)
  const handleSubscriptionAddition = async () => {
    // TO DO WHEN WE GET USER ID
    const res = await addSubscription({
      customerId: currentUserId,
      ownerId: currentRestaurant[0]._id,
    });
    setAllCustomers([
      ...allCustomers.filter((student) => student._id !== currentUserId),
      res.data,
    ]);
  };

  const [reviewText, setReviewText] = useState("");
  const [reviewStars, setReviewStars] = useState();
  // post a review
  const postNewReview = async () => {
    //TO DO WHEN WE GET USER ID
    // get user id from global username (from context)
    const res = await addNewReview({
      reviewerId: user._id, // USER ID
      restaurantId: id,
      reviewText: reviewText,
      stars: reviewStars,
    });
    console.log(res.data);
    setRestaurantReviews([...restaurantReviews, res.data.newReview]);
    if (!currentStudentUser.earnedReviewPoints) {
      const result = await modifyPoints(user._id, id, 100);

      setAllCustomers([
        ...allCustomers.filter((student) => student._id !== currentUserId),
        result.data,
      ]);
    }
  };

  const navigate = useNavigate();
  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <div className="restaurant-focus-page-container">
      {gotCurrentRestaurant ? (
        <>
          <IconButton
            className="restaurant-focus-page-return-arrow"
            onClick={handleReturn}
          >
            <ArrowBackIosIcon className="restaurant-focus-page-return-arrow-icon" />
          </IconButton>

          <Avatar src={currentRestaurant[0]?.profilePicture} className="restaurant-focus-page-avatar" />
          <div className="restaurant-focus-page-info-panel">
            <h1 className="restaurant-focus-page-restaurant-name">
              {currentRestaurant[0]?.username}
            </h1>
            {restaurantReviews ? (
              restaurantReviews.slice(0, 3).map((review) => {
                const reviewerUser = allCustomers.find(
                  (cus) => cus._id === review.reviewerId
                );
                console.log(reviewerUser);
                const reviewerProfilePicture = reviewerUser.profilePicture;
                const reviewerName = reviewerUser.username;
                return (
                  <ReviewCard
                    review={`"${review.reviewText}"`}
                    numberOfStars={review.stars}
                    profilePicture={reviewerProfilePicture}
                    reviewer={reviewerName}
                  />
                );
              })
            ) : (
              <div className="restaurant-focus-page-progress-container">
                <CircularProgress />
              </div>
            )}
            ...
            {currentStudentUser.subscribedRestos.find(
              (resto) => resto.restaurantUserId === id
            ) ? (
              <>
                <Button
                  className="restaurant-focus-page-review-button"
                  variant="contained"
                  startIcon={<EditIcon />}
                  onClick={handleClick}
                >
                  Leave a Review
                </Button>
                <Button
                  className="restaurant-focus-page-review-button-unsubscribe"
                  variant="outlined"
                  color="error"
                  onClick={handleSubscriptionAddition}
                >
                  Unsubscribe
                </Button>
              </>
            ) : (
              <Button
                className="restaurant-focus-page-review-button"
                variant="contained"
                onClick={handleSubscriptionAddition}
              >
                Subscribe
              </Button>
            )}
            <Dialog
              style={{ borderRadius: "30px !important" }}
              fullWidth
              open={open}
              onClose={handleClose}
            >
              <DialogTitle>{currentRestaurant[0]?.username}</DialogTitle>
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
                  onChange={(e) => setReviewText(e.target.value)}
                />
                <DialogContent>
                  <Rating onChange={(e) => setReviewStars(e.target.value)} />
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
