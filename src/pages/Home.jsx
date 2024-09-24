// import composants
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import imgBannerHome from '../assets/img-projet/imgAccueil.png';

// Définition du composant Home
const Home = () => {
    return (
        <div className="home">
           <div>
                <Banner title="Chez vous, partout et ailleurs" showTitle={true} imgSrc={imgBannerHome} 
                    imgClass="homeBanner" filterClass="bannerFilter"/>
               <Gallery />
           </div>
        </div>
    );
};

export default Home;