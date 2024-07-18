import Contract from "../Components/Contract/Contract";
import EducationExperience from "../Components/EducationExperience/EducationExperience";
import Introduction from "../Components/Introduction/Introduction";
import MyHome from "../Components/MyHome/MyHome";
import Portfolio from "../Components/Portfolio/Portfolio";
import Skills from "../Components/Skills/Skills";

const Home = () => {
    return (
        <div>
            
            <div id="myhome-section">
                <MyHome />
            </div>
            <div id="introduction-section">
                <Introduction />
            </div>
            <div id="skills-section">
                <Skills/>
            </div>
            <div id="educationExperience-section">
                <EducationExperience/>
            </div>
            <div id="portfolio-section">
                <Portfolio/>
            </div>
            <div id="contract-section">
                <Contract/>
            </div>

        </div>
    );
};

export default Home;
