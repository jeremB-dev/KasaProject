import BannerAbout from "../components/BannerAbout";
import Dropdown from "../components/Dropdown";
import CollapseJson from "../assets/data/collapse.json";

const About = () => {
    return (
        <div className="about">
               <BannerAbout />
               {CollapseJson.map((collapse, index) => (
                <Dropdown key={index} index={index} title={collapse.title}>
                    {collapse.text}
                </Dropdown>
               ))} 
        </div>
    );
};

export default About;