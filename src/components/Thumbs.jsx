// Importations des modules nécessaires
import { NavLink } from "react-router-dom";  // Importe composant NavLink pour créer liens de navigation
import PropTypes from "prop-types";  // Importe module PropTypes pour définir les types de propriétés(props)


const Thumbs = ({ logements }) => {
  return (
    <>
        {/*Itére sur le tableau logements en utilisant la méthode map. 
        Pour chaque logement, création d'url dynamique et une clé unique avec l'id du logement*/}
      {logements.map((logement) => (       
        <NavLink to={`/logement/${logement.id}`} key={`routePaths${logement.id}`} className="thumb">
            {/* crée une balise img par l'attribut src defini par la propriété cover du logement*/}
              {/*et défini un texte alternatif pour l'img en utilisant le titre du logement*/}
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
  logements: PropTypes.arrayOf( // Propriété logements de type tableau
    PropTypes.shape({ // Chaque élément du tableau est un objet avec les propriétés obligatoire suivantes: 
      id: PropTypes.string.isRequired, 
      title: PropTypes.string.isRequired, 
      cover: PropTypes.string.isRequired, 
    })
  ).isRequired, //Indique que la propriété logements elle-même est obligatoire.
}

export default Thumbs;