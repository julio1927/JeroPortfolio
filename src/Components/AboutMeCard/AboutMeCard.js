import React from 'react';
import AboutMeCardItem from '../AboutMeCardItem/AboutMeCardItem';
import { AboutCardContainer, AboutCardBoarder } from './AboutMeCardElements';

const AboutMeCard = () => {
  return (
    <AboutCardContainer>
      <AboutCardBoarder>
        <AboutMeCardItem title="Designer"/>
        <AboutMeCardItem title="Front-End Developer"/>
        <AboutMeCardItem title="Back-End Developer"/>
      </AboutCardBoarder>
    </AboutCardContainer>
  )
}

export default AboutMeCard
