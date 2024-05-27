import PropTypes from "prop-types";
import starPink from "../assets/img-projet/StarPink.png";
import starGrey from "../assets/img-projet/StarGrey.png";

const Rating= ({ rating }) => {
  const totalStars = 5;

  let starPinks = [];
  let starGreys = [];

  for (let index = 0; index < rating; index++) {
    starPinks.push(<img className="starPinks" key={index} src={starPink} alt="Pink Star" />);
  }

  for (let index = 0; index < (totalStars - rating); index++) {
    starGreys.push(<img className="starGreys" key={index} src={starGrey} alt="Grey Star" />);
  }

  return (
    <>
      {starPinks}
      {starGreys}
    </>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;