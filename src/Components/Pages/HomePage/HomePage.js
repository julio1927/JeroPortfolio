import React from 'react'
import AboutPage from '../AboutPage/AboutPage';
import Background from '../../UI/Background/Background';
import ProjectsPage from '../ProjectsPage/ProjectsPage';
import ResumePage from '../ResumePage/ResumePage';

function HomePage() {
    return (
        <div id="HomePage">
            <Background />
            <AboutPage />
            <ProjectsPage />
            <ResumePage />
        </div>
    )
}

export default HomePage
