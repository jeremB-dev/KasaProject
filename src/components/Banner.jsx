// Importations de l'img nécessaires 
//import de l'img pour la bannière
import PropTypes from 'prop-types';


function Banner({ title, showTitle, imgSrc, imgClass, filterClass }) {
  return (
    <div className="banner">
      <img src={imgSrc} className={`bannerImg ${imgClass}`} alt="image de la bannière" />
      <div className={`bannerFilter ${filterClass}`}></div>
      {showTitle && <h1>{title}</h1>}
    </div>
  );
}

Banner.propTypes = {
  title: PropTypes.string,
  showTitle: PropTypes.bool,
  imgSrc: PropTypes.string.isRequired,
  imgClass: PropTypes.string,
  filterClass: PropTypes.string
};

Banner.defaultProps = {
  title: '',
  showTitle: false,
  imgClass: '',
  filterClass: ''
};

export default Banner;