/* eslint-disable react/no-unescaped-entities */ //permet de désactiver les erreurs d’ESLint pour les caractères non échappés
import { Link } from "react-router-dom";

//composant Error404
const Error404 = () => {
    return (
        <div className="error404">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <ul>
                <Link to="/">
                    <li>Retourner sur la page d'acceuil</li>
                </Link>
            </ul>
        </div>
    );
};

export default Error404;