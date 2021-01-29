import React from 'react'
import CardItem from '../CardItem/CardItem';
import classes from './Cards.module.css';

function Cards() {
    return (
        <div className={classes.Cards}>
            <h1 className={classes.TitleText}>Jero Projects</h1>
            <div className={classes.CardsContainer}>
                <div className={classes.CardsWrapper}>
                    <ul className={classes.CardsItems}>
                        <CardItem src="../../Assets/Images/ICMKitchener.png" text="ICM Kitchener Church Website" label="Project" href="https://www.icmkitchener.org" alt="ICM Kitchener Site"/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
