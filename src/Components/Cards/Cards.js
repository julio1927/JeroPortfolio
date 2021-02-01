import React from "react";
import CardItem from "../CardItem/CardItem";
import classes from "./Cards.module.css";
import ICMKitchener from "../../Assets/Images/ICMKitchener.png";
import JeroPortfolio from "../../Assets/Images/JeroPortfolio.png";
import GrowthWatch from "../../Assets/Images/GrowthWatch.png";

function Cards() {
  return (
    <div className={classes.Cards}>
      <h1 className={classes.TitleText}>Jero Projects</h1>
      <div className={classes.CardsContainer}>
        <div className={classes.CardsWrapper}>
          <ul className={classes.CardsItems}>
            <CardItem
              src={ICMKitchener}
              text="ICM Kitchener Church Website created with ReactJS"
              label="Web app"
              href="https://www.icmkitchener.org"
              alt="ICM Kitchener Site"
            />
            
            { /*
            <div>
              <a className={classes.Btn} href="">
                <span>View Code</span>
              </a>
            </div> */}

            <CardItem
              src={GrowthWatch}
              text="JWC Autonomous plant monitoring system"
              label="Desktop App"
              href="https://github.com/julio1927/JWCCapStone"
              alt="GrowthWatch"
            />

            <CardItem
              src={JeroPortfolio}
              text="My Portfolio Website"
              label="Web App"
              href="https://github.com/julio1927/JeroPortfolio"
              alt="JeroPortfolio"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
