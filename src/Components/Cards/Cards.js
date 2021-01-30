import React from 'react'
import CardItem from '../CardItem/CardItem';
import classes from './Cards.module.css';
import ICMKitchener from '../../Assets/Images/ICMKitchener.png';


function Cards() {
    return (
        <div className={classes.Cards}>
            <h1 className={classes.TitleText}>Jero Projects</h1>
            <div className={classes.CardsContainer}>
                <div className={classes.CardsWrapper}>
                    <ul className={classes.CardsItems}>
                        <CardItem src={ICMKitchener} text="ICM Kitchener Church Website" label="Website" href="https://www.icmkitchener.org" alt="ICM Kitchener Site"/>
                        <CardItem src={ICMKitchener} text="JWC" label="Desktop App" href="https://www.icmkitchener.org" alt="GrowthWatch"/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
