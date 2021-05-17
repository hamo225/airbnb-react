import { FavoriteBorder } from "@material-ui/icons";
import React, { useState } from "react";
import "./SearchResult.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";

function SearchResult({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) {
  const [colorHeart, setColorHeart] = useState("");

  function redHeart(e) {
    setColorHeart("red");
  }

  return (
    <div className="searchResult">
      <img src={img} alt="" />
      <FavoriteBorderIcon
        className="searchResult__heart"
        style={{ fill: colorHeart }}
        onClick={redHeart}
      />
      <div className="searchResult__info">
        <div className="searchResult__infoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>____</p>
          <p>{description}</p>
        </div>
        <div className="searchResult__infoBottom">
          <div className="searchResult__stars">
            <StarIcon className="searchResult__star" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className="searchResult__price">
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
