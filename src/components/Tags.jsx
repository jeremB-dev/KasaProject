// import de PropTypes depuis le package prop-types
import PropTypes from "prop-types";

//
const Tags = ({text}) => { //Définit le composant Tags qui affiche les tags.
  return <p className="tags">{text}</p>; // Retourne le tag.
};

// Définit le type des props de Tags.
Tags.propTypes = {
  text : PropTypes.string.isRequired, // Texte du tag.
};

export default Tags;