import React from "react";
import classes from "../Cards/Cards.module.css";

function CardItem(props) {
  return (
    <>
      <li className={classes.CardsItem}>
        <a href={props.href} className={classes.CardsItemAnchor}>
          <figure className={classes.CardsItemPic} data-category={props.label}>
            <img
              src={props.src}
              alt={props.alt}
              className={classes.CardsItemImg}
            />
            <div className={classes.CardsItemInfo}>
              <h5 className={classes.CardsItemText}>{props.text}</h5>
            </div>
          </figure>
          <div className={classes.BtnContainer}>
            <div className={classes.Btn}>
              <a href="">
                <span>View Code</span>
              </a>
            </div>
          </div>
        </a>
      </li>
    </>
  );
}

export default CardItem;
