import Thumb from "./Thumb";
import logements from "../assets/data/logements.json";


const Gallery = () => {
  return (
    <div className="gallery">
        <Thumb logements={logements} />
    </div>
    );
};

export default Gallery;