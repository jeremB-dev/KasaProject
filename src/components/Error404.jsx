import { NavLink } from "react-router-dom";

const Error404 = () => {
    return (
        <div className="error404">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink to="/">
                <li>Retourner sur la page d'acceuil</li>
            </NavLink>
        </div>
    );
};

export default Error404;