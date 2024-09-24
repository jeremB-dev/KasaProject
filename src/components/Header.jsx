//import du logo de Kasa
import logoKasa from '../assets/img-projet/LOGO.png';
// Importation de NavLink depuis react-router-dom pour la navigation entre les pages
import { NavLink } from 'react-router-dom';

//composant Header
const Header = () => {
    return (
        <div className="header">
            <img className='header__logo' src={logoKasa} alt="logo-kasa" />
             <nav>
                <ul>
                   <NavLink to="/" className={({isActive}) => (isActive ? "underline" : "")}> 
                    <li>Accueil</li>
                    </NavLink>
                    <NavLink to="/about" className={({isActive}) => (isActive ? "underline" : "")}>
                    <li>A Propos</li>
                    </NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default Header;