import { NavLink }  from "react-router-dom";
import PropTypes from "prop-types";

const Thumb = ({ logements }) => {
  return (
    <>
      {logements.map((logement) => (
        <div key={`routePaths${logement.id}`} className="thumb">
          <NavLink to={`/logement/${logement.id}`}>
            <img src={logement.cover} alt={ `photo ${logement.title}`} />
            <h2 key={`${logement.id}`}>{logement.title}</h2>
          </NavLink>
        </div>
      ))}
    </>
  );
};

Thumb.prototype = {
  logements: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,
    })
).isRequired,
}

export default Thumb;