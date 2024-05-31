import { NavLink }  from "react-router-dom";
import PropTypes from "prop-types";


const Thumbs = ({ logements }) => {
  return (
    <>
      {logements.map((logement) => (
          <NavLink to={`/logement/${logement.id}`} className="thumb" key={`routePaths${logement.id}`}>  
            <img src={logement.cover} alt={ `photo ${logement.title}`} />
            <h2 className="title-thumb" key={`${logement.id}`}>{logement.title}</h2>
          </NavLink>
      ))}
    </>
  );
};

Thumbs.propType = {
  logements: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,
    })
).isRequired,
}

export default Thumbs;