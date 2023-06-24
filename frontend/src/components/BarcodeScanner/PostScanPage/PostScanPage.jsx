import {
  Avatar,
  Button,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../../context/context";
import "./PostScanPage.css";

const PostScanPage = () => {
  const {
    currentUserId,
    slide,
    isStudentAccount,
    barcode,
    setBarcode,
    allCustomers,
  } = useContext(Context);

  const [userPoints, setUserPoints] = useState();
  const [convertedPoints, setConvertedPoints] = useState(0);
  const [purchaseAmount, setPurchaseAmount] = useState();
  const [discountedPoints, setDiscountedPoints] = useState();
  const [userPurchaseValue, setUserPurchaseValue] = useState();

  const getUserPoints = () => {
    const scannedUser =
      allCustomers && allCustomers.find((user) => user._id === barcode);
    const subscribedResto =
      currentUserId &&
      scannedUser.subscribedRestos.find(
        (resto) => resto.restaurantUserId === currentUserId
      );
    return subscribedResto?.points ?? 0;
  };

  useEffect(() => {
    setUserPoints(getUserPoints());
  }, []);

  const handleDiscount = () => {
    // from barcode, get user
    const scannedUser =
      allCustomers && allCustomers.find((user) => user._id === barcode);
    const currentPoints = getUserPoints();
    if (currentPoints > 0) {
      // apply discount
      const subscribedResto = scannedUser.subscribedRestos.find(
        (resto) => resto.restaurantUserId === currentUserId
      );
      subscribedResto.points = 0;
      setUserPoints(subscribedResto.points);
    } else {
      // no discount available message
    }
  };

  const handlePoints = () => {
    // get user from barcode
    const scannedUser =
      allCustomers && allCustomers.find((user) => user._id === barcode);

    const subscribedResto =
      currentUserId &&
      scannedUser.subscribedRestos.find(
        (resto) => resto.restaurantUserId === currentUserId
      );

    subscribedResto.points += convertedPoints;
    setUserPoints(subscribedResto.points);
  };

  useEffect(() => {
    const purchasePoints = Math.floor(purchaseAmount * 10);
    setConvertedPoints(purchasePoints);
  }, [purchaseAmount]);

  useEffect(() => {
    const discountApplicable = Math.floor(userPoints / 100);
    setDiscountedPoints(discountApplicable);
  }, [userPoints]);

  return (
    <div className="post-scan-page-container">
      <div className="post-scan-page-header">
        <Avatar className="post-scan-page-avatar" />
      </div>
      <div className="post-scan-bottom-div">
        <h1 className="post-scan-page-username">John Wick</h1>

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