import { Button, Paper } from "@mui/material";
import "./BarcodePopup.css";
import Barcode from "react-jsbarcode";
import { useContext, useState } from "react";
import { Context } from "../../context/context";
import { useZxing } from "react-zxing";
import { useNavigate } from "react-router-dom";

const BarcodePopup = () => {
  const { slide, isStudentAccount, barcode, setBarcode } = useContext(Context);
  const navigate = useNavigate();
  const { ref } = useZxing({
    onResult(result) {
      setBarcode(result.getText());
    },
  });

  const handleBarcodeConfirmation = () => {
    navigate("/postscanpage");
  };
  return (
    <div className="barcode-popup-container">
      <Paper elevation={20} className={`barcode-popup-paper ${slide}`}>
        {isStudentAccount ? (
          <Barcode
            className="barcode-container"
            value="649634112950953cec504306"
            // value="649634112950953504306"
          />
        ) : (
          <div className="barcode-scanner-container">
            <video ref={ref} />
            <h3>Barcode:</h3>
            <p>{barcode}</p>
            <Button
              onClick={handleBarcodeConfirmation}
              className="barcode-confirm-button"
              variant="contained"
            >
              Confirm Barcode
            </Button>
          </div>
        )}
      </Paper>
    </div>
  );
};

export default BarcodePopup;
