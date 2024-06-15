// import des modules et composants nécessaires
import PropTypes from "prop-types";
import starPink from "../assets/img-projet/StarPink.png";
import starGrey from "../assets/img-projet/StarGrey.png";

// Définit le composant Rating qui affiche les étoiles d'évaluation.
const Rating= ({ rating }) => {
  const totalStars = 5;

  // Crée un tableau vide pour les étoiles roses et grises.
  let starPinks = [];
  let starGreys = [];

  // Boucle pour ajouter les étoiles roses.
  for (let index = 0; index < rating; index++) {
    // Ajoute une image d'étoile rose à chaque itération.
    starPinks.push(<img className="starPinks" key={index} src={starPink} alt="Pink Star" />);
  }

  // Boucle pour ajouter les étoiles grises.
  for (let index = 0; index < (totalStars - rating); index++) {
    // Ajoute une image d'étoile grise à chaque itération.
    starGreys.push(<img className="starGreys" key={index} src={starGrey} alt="Grey Star" />);
  }

  // Retourne les étoiles roses et grises.
  return (
    <>
      {starPinks}
      {starGreys}
    </>
  );
};

// Définit le type des props de Rating.
Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;