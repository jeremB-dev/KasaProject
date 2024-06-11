// Importations des modules nécessaires
import { NavLink } from "react-router-dom";  // Importe composant NavLink pour créer liens de navigation
import PropTypes from "prop-types";  // Importe module PropTypes pour définir les types de propriétés


const Thumbs = ({ logements }) => {
  return (
    <>
      {logements.map((logement) => (       
        // Pour chaque logement, crée un lien de navigation (NavLink)
          <NavLink to={`/logement/${logement.id}`} key={`routePaths${logement.id}`} className="thumb">
          {/* Affiche l'image du logement */}
            <img src={logement.cover} alt={`photo de l'appartement ${logement.title}`} />
          {/* Affiche le titre du logement */}
            <h2 className="title-thumb">{logement.title}</h2>
          </NavLink>      
      ))}
    </>
  );
};

// Définition des types de propriétés attendus pour le composant Thumbs
Thumbs.propTypes = {
  logements: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,  // Propriété id de type string requise
      title: PropTypes.string.isRequired,  // Propriété title de type string requise
      cover: PropTypes.string.isRequired,  // Propriété cover de type string requise
    })
).isRequired,
}
// Exportation du composant Thumbs
export default Thumbs;