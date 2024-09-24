import logoKasa from '../assets/img-projet/LOGO.png';
import { NavLink } from 'react-router-dom';

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