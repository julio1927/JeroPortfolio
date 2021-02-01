import React from 'react'
import CardItem from '../CardItem/CardItem';
import classes from './Cards.module.css';
import ICMKitchener from '../../Assets/Images/ICMKitchener.png';
import JeroPortfolio from '../../Assets/Images/JeroPortfolio.png';


function Cards() {
    return (
        <div className={classes.Cards}>
            <h1 className={classes.TitleText}>Jero Projects</h1>
            <div className={classes.CardsContainer}>
                <div className={classes.CardsWrapper}>
                    <ul className={classes.CardsItems}>
                        <CardItem src={ICMKitchener} text="ICM Kitchener Church Website created with ReactJS" label="Web app" href="https://www.icmkitchener.org" alt="ICM Kitchener Site"/>
                        <CardItem src={ICMKitchener} text="JWC Autonomous plant monitoring system" label="Desktop App" href="https://www.icmkitchener.org" alt="GrowthWatch"/>
                        <CardItem src={JeroPortfolio} text="My Portfolio Website" label="Web App" href="https://www.icmkitchener.org" alt="JeroPortfolio"/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
