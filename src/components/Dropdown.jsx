import { useState } from "react";    // ajoute un état local
import ArrowDown from "../assets/img-projet/ArrowDown.png";
import PropTypes from "prop-types";

const Dropdown = ({ title, children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleDropdown = () => {
        setIsVisible(!isVisible);
    }

    return (
        <div className={`dropdown ${isVisible ? "active" : ""}`}>
            <div className="dropdownTitle" onClick={toggleDropdown} >
                <h3>{title}</h3>
                <img src={ArrowDown} alt="flèche" className={`arrow ${isVisible ? "down" : ""}`}  />
            </div>
            <div className={`paragraph ${isVisible ? "animation" : ""}`}>
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