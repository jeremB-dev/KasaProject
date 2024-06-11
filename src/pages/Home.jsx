import Banner from "../components/Banner";
import Gallery from "../components/Gallery";


const Home = () => {
    return (
        <div className="home">
           <div>
               <Banner /> 
               <Gallery />
           </div>
        </div>
    );
};

export default Home;