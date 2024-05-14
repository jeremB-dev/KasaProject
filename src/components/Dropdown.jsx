import { useState } from "react";
import ArrowDown from "../assets/img-projet/ArrowDown.png";
import PropTypes from "prop-types";

const Dropdown = ({ title, children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const handleToggle = () => {
        setIsVisible(!isVisible);
    }

    return (
        <div className={`Dropdown ${isVisible ? "visible" : ""}`}>
            <div className="dropdownTitle" onClick={handleToggle}>
                <h3>{title}</h3>
                <img src={ArrowDown} alt="flèche" className={`arrow ${isVisible ? "down" : ""}`}/>
            </div>
            <div className={`paragraph ${isVisible ? "down" : ""}`}>
                {children}
            </div>    
            
        </div>
    );
};

Dropdown.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default Dropdown;