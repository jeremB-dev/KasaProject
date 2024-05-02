import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";



const Home = () => {
    return (
        <div className="home">
           <div className="homeDiv">
               <Banner /> 
               <Gallery />
               <Footer />
           </div>
        </div>
    );
};

export default Home;