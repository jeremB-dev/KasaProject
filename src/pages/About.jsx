// import des composant et du fichier collapse.json
import Banner from '../components/Banner';
import imgBannerAbout from '../assets/img-projet/imgAbout.png';
import Dropdown from "../components/Dropdown";
import CollapseJson from "../assets/data/collapse.json";

const About = () => {
    return (
        
        <div className="about">
            <Banner showTitle={false} imgSrc={imgBannerAbout} imgClass="aboutBanner" 
                filterClass="bannerFilterAbout"/>
            <div className="about-dropdown">
                {CollapseJson.map((collapse, index) => (
                    <Dropdown key={index} index={index} title={collapse.title} >
                        {collapse.text}
                    </Dropdown>
                ))}
            </div>
        </div>
    );
};

export default About;