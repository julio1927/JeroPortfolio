import React from "react";
import classes from "../Cards/Cards.module.css";

function CardItem(props) {
  return (
    <>
      <li className={classes.CardsItem}>
        <a href={props.href} className={classes.CardsItemAnchor} target="_blank" rel="noreferrer">
          <figure className={classes.CardsItemPic} data-category={props.label}>
            <img
              src={props.src}
              alt={props.alt}
              className={classes.CardsItemImg}

            />
            <div className={classes.CardsItemInfo}>
              <h5 className={classes.CardsItemText}>{props.title}</h5>
              <p className={classes.ProjDesc}>This is a test msg</p>
            </div>
          </figure>
        </a>
      </li>
    </>
  );
}

export default CardItem;
