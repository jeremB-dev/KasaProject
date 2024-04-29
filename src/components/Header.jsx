import logoKasa from '../assets/img-projet/LOGO.png';

const Header = () => {
    return (
        <div className="header">
            <img className='header_logo' src={logoKasa} alt="logo-kasa" />
             <nav>
                <ul>
                    <li>Acceuil</li>
                    <li>A Propos</li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;