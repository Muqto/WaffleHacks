import {
  Avatar,
  Button,
  Typography,
  TextField,
  InputAdornment,
  Snackbar,
  Alert,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../../context/context";
import "./PostScanPage.css";
import { modifyPoints } from "../../../api/UserAPI";

const PostScanPage = () => {
  const {
    currentUserId,
    slide,
    isStudentAccount,
    barcode,
    setBarcode,
    allCustomers,
    user,
  } = useContext(Context);

  const [userPoints, setUserPoints] = useState();
  const [convertedPoints, setConvertedPoints] = useState(0);
  const [purchaseAmount, setPurchaseAmount] = useState(0);
  const [discountedPoints, setDiscountedPoints] = useState();
  const [scannedUser, setScannedUser] = useState("");

  console.log(scannedUser);

  const getScannedUser = () => {
    const scannedUser =
      allCustomers && allCustomers.find((u) => u._id === barcode);
    setScannedUser(scannedUser);
  };

  const getUserPoints = () => {
    const subscribedResto =
      user &&
      user._id &&
      scannedUser &&
      scannedUser.subscribedRestos.find(
        (resto) => resto.restaurantUserId === user._id
      );
    return subscribedResto?.points ?? 0;
  };

  // initialize values
  useEffect(() => {
    getScannedUser();
  }, []);

  useEffect(() => {
    setUserPoints(getUserPoints());
  }, [scannedUser]);

  const handleDiscount = () => {
    // from barcode, get user
    const currentPoints = getUserPoints();
    if (currentPoints > 0) {
      // apply discount
      const subscribedResto =
        scannedUser &&
        scannedUser.subscribedRestos.find(
          (resto) => resto.restaurantUserId === currentUserId
        );
      subscribedResto.points = 0;
      setUserPoints(subscribedResto.points);
      // update backend here with new points
      modifyPoints(scannedUser._id, user._id, -currentPoints);
      setPurchaseAmount(purchaseAmount - discountedPoints);
      setSuccessOpen(true);
    } else {
      // no discount available message
    }
  };

  const handlePoints = () => {
    const subscribedResto =
      currentUserId &&
      scannedUser &&
      scannedUser.subscribedRestos.find(
        (resto) => resto.restaurantUserId === currentUserId
      );

    // send points over through API
    modifyPoints(scannedUser._id, user._id, convertedPoints);

    subscribedResto.points += convertedPoints;
    setUserPoints(subscribedResto.points);
    setPurchaseAmount(0);
    setSuccessOpenPoints(true);
  };

  useEffect(() => {
    const purchasePoints = Math.floor(purchaseAmount * 10);
    setConvertedPoints(purchasePoints);
  }, [purchaseAmount]);

  useEffect(() => {
    const discountApplicable = Math.floor(userPoints / 100);
    setDiscountedPoints(discountApplicable);
  }, [userPoints]);

  const [successOpen, setSuccessOpen] = useState(false);
  const [successOpenPoints, setSuccessOpenPoints] = useState(false);
  const handleClose = (event) => {
    setSuccessOpen(false);
  };
  const handlePointsClose = (event) => {
    setSuccessOpenPoints(false);
  };
  return (
    <div className="post-scan-page-container">
      <Snackbar
        open={successOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "50%" }}>
          Discount Applied!
        </Alert>
      </Snackbar>
      <Snackbar
        open={successOpenPoints}
        autoHideDuration={6000}
        onClose={handlePointsClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handlePointsClose}
          severity="success"
          sx={{ width: "50%" }}
        >
          Points Sent!
        </Alert>
      </Snackbar>
      <div className="post-scan-page-header">
        <Avatar className="post-scan-page-avatar" />
      </div>
      <div className="post-scan-bottom-div">
        <h1 className="post-scan-page-username">
          {scannedUser && scannedUser.username}
        </h1>

        <div className="post-scan-page-purchase-amount">
          <p className="post-scan-page-p">Purchase: </p>{" "}
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
            id="standard-basic"
            variant="standard"
            onChange={(e) => {
              setPurchaseAmount(e.target.value);
            }}
            value={purchaseAmount}
          />
        </div>
        <div className="post-scan-page-points-container">
          <p className="post-scan-page-p">Points Redeemable:</p>
          <h2 className="post-scan-page-points">{convertedPoints ?? 0}</h2>
        </div>
        <div className="post-scan-page-points-container">
          <p className="post-scan-page-p">Current User Points:</p>
          <h2 className="post-scan-page-points">{userPoints}</h2>
        </div>
        <div className="post-scan-page-points-container">
          <p className="post-scan-page-p">Discount Applicable:</p>
          <h2 className="post-scan-page-points">{discountedPoints}</h2>
        </div>

        <p className="post-scan-page-p">
          Choose to redeem user's current points or to add points
        </p>
        <div className="post-scan-page-buttons">
          <Button
            onClick={handleDiscount}
            className="post-scan-page-button1"
            variant="contained"
          >
            Give Discount
          </Button>
          <Button
            onClick={handlePoints}
            className="post-scan-page-button2"
            variant="contained"
          >
            Send Points
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostScanPage;
