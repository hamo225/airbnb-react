import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 Stays | 26 august to 30 august | 2 guests</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of Place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://shorttermrentalz.com/wp-content/uploads/2021/05/airbnb-hero-.jpg"
        location="Private Room in Mitte Berlin"
        title="Stay at this cool loft"
        description="1 guest | 1 bedroom | 1 bed | open kitchen | WIFI | Free parking | Washing machine"
        star={5}
        price="$30 / night"
        total="$680 total"
      ></SearchResult>
      <SearchResult
        img="https://shorttermrentalz.com/wp-content/uploads/2021/05/airbnb-hero-.jpg"
        location="Private Room in Mitte Berlin"
        title="Stay at this cool loft"
        description="1 guest | 1 bedroom | 1 bed | open kitchen | WIFI | Free parking | Washing machine"
        star={5}
        price="$30 / night"
        total="$680 total"
      ></SearchResult>
      <SearchResult
        img="https://shorttermrentalz.com/wp-content/uploads/2021/05/airbnb-hero-.jpg"
        location="Private Room in Mitte Berlin"
        title="Stay at this cool loft"
        description="1 guest | 1 bedroom | 1 bed | open kitchen | WIFI | Free parking | Washing machine"
        star={5}
        price="$30 / night"
        total="$680 total"
      ></SearchResult>
      <SearchResult
        img="https://shorttermrentalz.com/wp-content/uploads/2021/05/airbnb-hero-.jpg"
        location="Private Room in Mitte Berlin"
        title="Stay at this cool loft"
        description="1 guest | 1 bedroom | 1 bed | open kitchen | WIFI | Free parking | Washing machine"
        star={5}
        price="$30 / night"
        total="$680 total"
      ></SearchResult>
      <SearchResult
        img="https://shorttermrentalz.com/wp-content/uploads/2021/05/airbnb-hero-.jpg"
        location="Private Room in Mitte Berlin"
        title="Stay at this cool loft"
        description="1 guest | 1 bedroom | 1 bed | open kitchen | WIFI | Free parking | Washing machine"
        star={5}
        price="$30 / night"
        total="$680 total"
      ></SearchResult>
      <SearchResult
        img="https://shorttermrentalz.com/wp-content/uploads/2021/05/airbnb-hero-.jpg"
        location="Private Room in Mitte Berlin"
        title="Stay at this cool loft"
        description="1 guest | 1 bedroom | 1 bed | open kitchen | WIFI | Free parking | Washing machine"
        star={5}
        price="$30 / night"
        total="$680 total"
      ></SearchResult>
      <SearchResult
        img="https://shorttermrentalz.com/wp-content/uploads/2021/05/airbnb-hero-.jpg"
        location="Private Room in Mitte Berlin"
        title="Stay at this cool loft"
        description="1 guest | 1 bedroom | 1 bed | open kitchen | WIFI | Free parking | Washing machine"
        star={5}
        price="$30 / night"
        total="$680 total"
      ></SearchResult>
      <SearchResult
        img="https://shorttermrentalz.com/wp-content/uploads/2021/05/airbnb-hero-.jpg"
        location="Private Room in Mitte Berlin"
        title="Stay at this cool loft"
        description="1 guest | 1 bedroom | 1 bed | open kitchen | WIFI | Free parking | Washing machine"
        star={5}
        price="$30 / night"
        total="$680 total"
      ></SearchResult>
      <SearchResult
        img="https://shorttermrentalz.com/wp-content/uploads/2021/05/airbnb-hero-.jpg"
        location="Private Room in Mitte Berlin"
        title="Stay at this cool loft"
        description="1 guest | 1 bedroom | 1 bed | open kitchen | WIFI | Free parking | Washing machine"
        star={5}
        price="$30 / night"
        total="$680 total"
      ></SearchResult>
      <SearchResult
        img="https://shorttermrentalz.com/wp-content/uploads/2021/05/airbnb-hero-.jpg"
        location="Private Room in Mitte Berlin"
        title="Stay at this cool loft"
        description="1 guest | 1 bedroom | 1 bed | open kitchen | WIFI | Free parking | Washing machine"
        star={5}
        price="$30 / night"
        total="$680 total"
      ></SearchResult>
      <SearchResult
        img="https://shorttermrentalz.com/wp-content/uploads/2021/05/airbnb-hero-.jpg"
        location="Private Room in Mitte Berlin"
        title="Stay at this cool loft"
        description="1 guest | 1 bedroom | 1 bed | open kitchen | WIFI | Free parking | Washing machine"
        star={5}
        price="$30 / night"
        total="$680 total"
      ></SearchResult>
    </div>
  );
}

export default SearchPage;
