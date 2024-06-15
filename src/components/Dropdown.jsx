import { useState } from "react";  // Importe le hook useState du module react
import ArrowDown from "../assets/img-projet/ArrowDown.png"; // Importe l'image de la flèche
import PropTypes from "prop-types"; // Importe le module PropTypes pour définir les types de propriétés

// Définit le composant Dropdown

//compsant Dropdown prend deux props: title et children
const Dropdown = ({ title, children }) => { //définit le composant Dropdown qui prend deux props
    const [isVisible, setIsVisible] = useState(false);
    const toggleDropdown = () => { //définit la fonction toggleDropdown qui inverse la valeur de isVisible
        setIsVisible(!isVisible);
    }
//retourne un élément div avec la classe dropdown et une classe active si isVisible est vrai
    return (

        <div className={`dropdown ${isVisible ? "active" : ""}`}>
            <div className="dropdownTitle"  >
                <h3>{title}</h3>
                <img src={ArrowDown} onClick={toggleDropdown} 
                alt="flèche" className={`arrow ${isVisible ? "down" : ""}`}  />
            </div>
            <div className={`paragraph ${isVisible ? "animation" : ""}`}>
                {children}
            </div>    
        </div>
    );
};

Dropdown.propTypes = { //Définit les types de propriétés attendus pour le composant Dropdown
    title: PropTypes.string.isRequired, //Propriété title de type string obligatoire
    children: PropTypes.node.isRequired, //Propriété children de type noeud obligatoire
};

export default Dropdown;