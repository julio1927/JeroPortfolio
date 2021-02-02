import React from 'react'
import AboutPage from '../AboutPage/AboutPage';
import Background from '../../UI/Background/Background';
import ProjectsPage from '../ProjectsPage/ProjectsPage';
import ResumePage from '../ResumePage/ResumePage';
import ContactPage from '../ContactPage/ContactPage';

function HomePage() {
    return (
        <div id="HomePage">
            <Background />
            <AboutPage />
            <ProjectsPage />
            <ResumePage />
            <ContactPage />
        </div>
    )
}

export default HomePage
