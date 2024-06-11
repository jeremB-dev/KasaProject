import { useState } from "react";  // Importe le hook useState du module react
import ArrowDown from "../assets/img-projet/ArrowDown.png"; // Importe l'image de la flèche
import PropTypes from "prop-types"; // Importe le module PropTypes pour définir les types de propriétés

// Définit le composant Dropdown
const Dropdown = ({ title, children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleDropdown = () => {
        setIsVisible(!isVisible);
    }

    return (
        <div className={`dropdown ${isVisible ? "active" : ""}`}>
            <div className="dropdownTitle"  >
                <h3>{title}</h3>
                <img src={ArrowDown} onClick={toggleDropdown} alt="flèche" className={`arrow ${isVisible ? "down" : ""}`}  />
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