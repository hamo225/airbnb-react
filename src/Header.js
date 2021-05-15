import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg"
          alt="Air Bnb Logo"
        />
      </Link>
      <div className="header__center">
        <input type="text" />
        <SearchIcon></SearchIcon>
      </div>
      <div className="header__right">
        <p>Become a host</p>
        <LanguageIcon></LanguageIcon>
        <ExpandMoreIcon></ExpandMoreIcon>
        <Avatar></Avatar>
      </div>
    </div>
  );
}

export default Header;
