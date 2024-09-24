//page qui affiche les détails d'un logement
// Importations des modules et composants nécessaires 

// Importe le module (hook) useEffect pour déclencher des effets de bord dans les composants.
import { useEffect } from "react";
//Importe les modules useParams/useNavigate pour récupérer les paramètres de l'URL 
//et naviguer entre les pages.
import { useParams, useNavigate } from "react-router-dom"; 
// Importe les composants
import logements from "../assets/data/logements.json";
import Dropdown from "./Dropdown";
import Rating from "./Stars";
import Caroussel from "./Caroussel";
import Tags from "./Tags";

// Définition du composant Apartment
const Apartment = () => {
  // Récupère les paramètres de l'URL.
  const { id } = useParams();
  // Permet de naviguer entre les pages.
  const navigate = useNavigate();
  // Récupère les données du logement correspondant à l'ID.
  const apartment = logements.find((item) => item.id === id); //

  //Redirige vers la page d'erreur si l'ID n'existe pas.
  useEffect(() => {
    if (!apartment) {
      navigate('/Error');
    }
  }, [apartment, navigate, id]); //Déclenche l'effet si l'ID, l'appartement ou la navigation change.

  if (!apartment) { 
    return null //Retourne null si l'appartement n'existe pas.
  }

  return (
    <>
      <div className="appt">
        <Caroussel slides={apartment.pictures} />
        <div className="appt-container">
          <div className="appt-container-up">
            <div className="appt-container-up-left">
              <h2 className="appt-title">{apartment.title}</h2>
              <h3 className="appt-loc">{apartment.location}</h3>
            </div>
            <div className="container-tags">
              {apartment.tags.map((tag, index) => (
                <Tags key={index} text={tag} />
              ))}
            </div>
            <div className="container-hostRating">
              <div className="host">
                <h3 className="host-name">{apartment.host.name}</h3>
                <img className="host-img" src={apartment.host.picture} alt={apartment.title} />
              </div>
              <div className="rating">
                <Rating rating={parseInt(apartment.rating, 10)} />
              </div>
            </div>
          </div>
          <div className="appt-container-down">
            <Dropdown title="Description">{apartment.description}</Dropdown>
            <Dropdown title="Equipement">
              <ul>
                {apartment.equipments.map((equip, index) => (
                  <li key={index}>{equip}</li>
                ))}
              </ul>
            </Dropdown>
          </div>
        </div>
      </div>
    </>
  );
};


export default Apartment;