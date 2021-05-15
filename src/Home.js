import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

function Home() {
  return (
    <div className="home">
      <Banner></Banner>
      <div className="home__section">
        <Card
          src="https://shorttermrentalz.com/wp-content/uploads/2021/05/airbnb-hero-.jpg"
          title="Online Experience"
          description="New and unique activites"
        ></Card>
        <Card
          src="https://spaceoptimized.com/wp-content/uploads/2018/04/space-optimized-airbnb-rentals-berlin-5.png"
          title="Unique Stays"
          description="Unique activites"
        ></Card>
        <Card
          src="https://spaceoptimized.com/wp-content/uploads/2018/04/space-optimized-airbnb-rentals-berlin-5.png"
          title="Entire Homes"
          description="New and unique activites"
        ></Card>
      </div>
      <div className="home__section">
        <Card
          src="https://shorttermrentalz.com/wp-content/uploads/2021/05/airbnb-hero-.jpg"
          title="Online Experience"
          description="New and unique activites"
          price="$50/night"
        ></Card>
        <Card
          src="https://www.jonesaroundtheworld.com/wp-content/uploads/2020/08/Airbnb-in-Berlin-for-Groups.jpg"
          title="Online Experience"
          description="New and unique activites"
          price="$400/night"
        ></Card>
        <Card
          src="https://shorttermrentalz.com/wp-content/uploads/2021/05/airbnb-hero-.jpg"
          title="Online Experience"
          description="New and unique activites"
          price="$120/night"
        ></Card>
      </div>
    </div>
  );
}

export default Home;
