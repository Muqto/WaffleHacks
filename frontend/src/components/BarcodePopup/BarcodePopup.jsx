import { Button, Paper } from "@mui/material";
import "./BarcodePopup.css";
import Barcode from "react-jsbarcode";
import { useContext, useState } from "react";
import { Context } from "../../context/context";
import { useZxing } from "react-zxing";

const BarcodePopup = () => {
  const { slide, isStudentAccount } = useContext(Context);
  const [barcode, setBarcode] = useState("barcode");
  const { ref } = useZxing({
    onResult(result) {
      setBarcode(result.getText());
    },
  });
  return (
    <div className="barcode-popup-container">
      <Paper elevation={20} className={`barcode-popup-paper ${slide}`}>
        {isStudentAccount ? (
          <Barcode
            className="barcode-container"
            value="649634112950953cec504306"
          />
        ) : (
          <div className="barcode-scanner-container">
            <video ref={ref} />
            <h3>Barcode:</h3>
            <p>{barcode}</p>
          </div>
        )}
      </Paper>
    </div>
  );
};

export default BarcodePopup;
