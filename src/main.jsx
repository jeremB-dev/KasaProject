// importation des modules nécessaires pour créer une application React.
import React from 'react'; // est importé pour utiliser les fonctionnalités de React.
import ReactDOM from 'react-dom/client'; //est importé pour gérer le rendu des composants dans le DOM.
import App from './App.jsx'; // App est importé pour afficher le composant App dans le DOM.

// Crée un root pour le rendu des composants dans le DOM grace a l'id de la page html.
ReactDOM.createRoot(document.getElementById('root')).render( 
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
