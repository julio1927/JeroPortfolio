import React from 'react'
import classes from '../Cards/Cards.module.css';


function CardItem(props) {
    return (
        <>
            <li className={classes.CardsItem}>
                <a href={props.href} className={classes.CardsItemAnchor}>
                    <figure className={classes.CardsItemPic} data-category={props.label}>
                        <img src={props.src} alt={props.alt} className={classes.CardsItemsImg}/>
                        <div className={classes.CardsItemInfo}>
                            <h5 className={classes.CardsItemText}>

                            </h5>
                        </div>
                    </figure>
                </a>
            </li>
        </>
    )
}

export default CardItem
