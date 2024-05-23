import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import logements from "../assets/data/logements.json";
import Dropdown from "./Dropdown";
import Rating from "./Stars";
import Caroussel from "./Caroussel";
import Tags from "./Tags";

const Apartment = () => {
    // Récupère les paramètres de l'URL.
    const { id } = useParams(); 
    // Permet de naviguer entre les pages.
    const navigate = useNavigate();
    // Récupère les données du logement correspondant à l'ID.
    const apartment = logements.find((item) => item.id === id); //null ou undefined

    // Redirige vers la page d'erreur si l'ID n'existe pas.
    useEffect(() => {
        if (!apartment) {
            navigate('/Error');
        }
    }, [apartment, navigate, id]);
    
    if (!apartment) {
        return null 
    }

 return (
    <>
      <div className="appt">
        <Caroussel slides={apartment.pictures}/>
        <div className="appt-container-up-down">
          <div className="appt-content-up">
            <div className="appt-content-up-left">
              <h2>{apartment.title}</h2>
              <h3>{apartment.location}</h3>
              <div className="container-tags">
                {apartment.tags.map((tag, index) => (
                  <Tags key={index} text={tag} />
                ))}
              </div>
            </div>
            <div className="hostRating">
              <div className="host">
                <h3>{apartment.host.name}</h3>
                <img src={apartment.host.picture} alt={apartment.title} />
              </div>
              <div className="rating">
                <Rating rating = {parseInt(apartment.rating,10)}/>
              </div>
            </div>
          </div>
          <div className="appt-content-down">
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