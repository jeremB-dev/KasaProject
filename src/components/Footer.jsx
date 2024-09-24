// import du logo
import logoFooter from '../assets/img-projet/logoFooter.png';

//composant Footer
const Footer = () => {
    return (
        <div className='logoFooter'>
            <img src={logoFooter} alt="logo-kasa" />
            <h3>© 2020 Kasa. All rights reserved</h3>
        </div>
    );
}

export default Footer;
