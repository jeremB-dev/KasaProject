// import composant Thumb et le fichier logements.json
import Thumb from "./Thumbs";
import logements from "../assets/data/logements.json";

// Définition du composant Gallery
const Gallery = () => {
  return (
    <div className="gallery">
        <Thumb logements={logements} />
    </div>
    );
};

export default Gallery;