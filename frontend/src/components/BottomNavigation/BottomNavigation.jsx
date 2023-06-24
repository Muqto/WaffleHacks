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
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import { Context } from "../../context/context";
import { Link } from "react-router-dom";

function BottomNavigation() {
  const { slide, setSlide, isStudentAccount, value, setValue } =
    useContext(Context);
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
            component={Link}
            to="/"
            onClick={() => {
              setSlide("");
            }}
            label="Home"
            icon={<HomeIcon className="bottom-navigation-icon" />}
          />
          <BottomNavigationAction
            component={Link}
            to="/scan"
            onClick={() => {
              setSlide(slide === "" ? "slide" : "");
            }}
            label="Barcode"
            icon={<QrCode2Icon className="bottom-navigation-icon" />}
          />
          <BottomNavigationAction
            component={Link}
            to="/explore"
            onClick={() => {
              setSlide("");
            }}
            label="Explore"
            icon={<ExploreIcon className="bottom-navigation-icon" />}
          />
          <BottomNavigationAction
            component={Link}
            to="/profile"
            onClick={() => {
              setSlide("");
            }}
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
          <BottomNavigationAction
            label="Home"
            component={Link}
            to="/"
            icon={<HomeIcon className="bottom-navigation-icon" />}
          />
          <BottomNavigationAction
            label="Scan"
            component={Link}
            to="/scan"
            icon={<QrCodeScannerIcon className="bottom-navigation-icon" />}
          />
          <BottomNavigationAction
            label="Profile"
            component={Link}
            to="/profile"
            icon={<Person2Icon className="bottom-navigation-icon" />}
          />
        </MUIBottomNavigation>
      )}
    </div>
  );
}

export default BottomNavigation;
