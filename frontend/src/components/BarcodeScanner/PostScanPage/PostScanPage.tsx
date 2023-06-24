import { Avatar, Button, Typography } from "@mui/material";
import "./PostScanPage.css";

const PostScanPage = () => {
  const handleDiscount = () => {
    // give discount functionality here 
  };
  const handlePoints = () => {};
  return (
    <div className="post-scan-page-container">
      <div className="post-scan-page-header">
        <Avatar className="post-scan-page-avatar" />
      </div>
      <div className="post-scan-bottom-div">
        <h1 className="post-scan-page-username">John Wick</h1>
        <h2 className="post-scan-page-points">150 Points</h2>
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