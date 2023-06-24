import { Avatar, Button, Typography } from "@mui/material"
import "./PostScanPage.css"

const PostScanPage = () => {
  return (
    <div className="post-scan-page-container">
        <div className="post-scan-page-header">
            <Avatar className="post-scan-page-avatar"/>
        </div>
        <div className="post-scan-page-username">
            <Typography>Hello John</Typography>
        </div>
        <div className="post-scan-page-buttons">
            <Button variant="contained">Redeem Points</Button>
            <Button variant="contained">Add Points</Button>
        </div>
    </div>
  )
}

export default PostScanPage