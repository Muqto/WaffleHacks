import {
  BottomNavigation as MUIBottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import React, { useContext, useState } from "react";
import "./BottomNavigation.css";
import HomeIcon from "@mui/icons-material/Home";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import ExploreIcon from "@mui/icons-material/Explore";
import Person2Icon from "@mui/icons-material/Person2";
import { Context } from "../../context/context";

function BottomNavigation() {
  const [value, setValue] = React.useState(0);
  const [isStudentAccount, setIsStudentAccount] = useState(true);
  const {slide, setSlide} = useContext(Context)
  return (
    <div className="bottom-navigation-container">
      {isStudentAccount ? (
        <MUIBottomNavigation
          className="bottom-navigation-bar"
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            onClick={() => {setSlide("")}}
            label="Home"
            icon={<HomeIcon className="bottom-navigation-icon" />}
          />
          <BottomNavigationAction
            onClick={() => {setSlide(slide === "" ? "slide" : "")}}
            label="Barcode"
            icon={<QrCode2Icon className="bottom-navigation-icon" />}
          />
          <BottomNavigationAction
            onClick={() => {setSlide("")}}
            label="Explore"
            icon={<ExploreIcon className="bottom-navigation-icon" />}
          />
          <BottomNavigationAction
            onClick={() => {setSlide("")}}
            label="Profile"
            icon={<Person2Icon className="bottom-navigation-icon" />}
          />
        </MUIBottomNavigation>
      ) : (
        <MUIBottomNavigation
          className="bottom-navigation-bar"
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Home" />
          <BottomNavigationAction label="Scan" />
          <BottomNavigationAction label="Profile" />
        </MUIBottomNavigation>
      )}
    </div>
  );
}

export default BottomNavigation;
