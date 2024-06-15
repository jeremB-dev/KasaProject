import PropTypes from 'prop-types';
import arrowRight from '../assets/img-projet/arrowRight.png';
import arrowLeft from '../assets/img-projet/arrowLeft.png';
import { useState } from 'react';

const Caroussel = ({ slides }) => {
    // currentImage stocke l'index de l'image actuelle, et setCurrentImage permet de changer cette valeur.
    const [currentImage, setCurrentImage] = useState(0);

    // Fonction pour passer à l'image suivante.
    const nextImage = () => {
        setCurrentImage((preImage) => (preImage === slides.length - 1 ? 0 : preImage + 1));
    };

    // Fonction pour passer à l'image précédente.
    const previousImage = () => {
        setCurrentImage((preImage) => (preImage === 0 ? slides.length - 1 : preImage - 1));
    };

    // Stocke l'URL de l'image actuelle pour l'affichage et le nombre total d'images.
    const currentSlide = slides[currentImage];
    const numberSlide = slides.length;

    // Vérifier si plus d'une slide est présente avant d'afficher les flèches et les indicatifs.
    const showArrow = numberSlide > 1; 
    const showIndic = numberSlide > 1;

    return (
        <div className='caroussel'>
            {/* Affiche l'image actuelle du carrousel. */}
            <img className='slider' src={currentSlide} alt={'Slide ${currentImage + 1}'} />
            {/* Affiche les flèches de navigation si plusieurs images sont présentes. */}
            {showArrow && ( 
                <>
                {/* flèches de navigation*/}
                <img className='arrowRight' src={arrowRight} alt='flèche droite' onClick={nextImage} />
                <img className='arrowLeft' src={arrowLeft} alt='flèche gauche' onClick={previousImage} />
                </>
            )}
            {/* Affiche les indicatifs du nombre d'images si plusieurs images sont présentes. */}
            {showIndic && (
                <div className='indic'>{`${currentImage + 1}/${slides.length}`}</div>
                )}
        </div>
            );
};

// Définit le type des props de Caroussel.
Caroussel.propTypes = {
   slides: PropTypes.arrayOf(PropTypes.string).isRequired, // Tableau d'URLs d'images.
};

export default Caroussel;
