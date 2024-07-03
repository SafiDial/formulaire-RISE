import React from 'react';
import './styles.css'; // Importe tes styles CSS
import ReCAPTCHA from "react-google-recaptcha";

function App() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Ajoute ici la logique pour gérer la soumission du formulaire
        console.log("Formulaire soumis !");
    };

    return (
        <div>
            <div className="container">
                <form id="loginForm" className="login-form" onSubmit={handleSubmit}>
                    <h2>Se connecter</h2>
                    <input type="email" id="email" placeholder="Adresse email" required />
                    <input type="password" id="password" placeholder="Mot de passe" required />
                    <ReCAPTCHA
                        sitekey="CLÉ_SITE"
                        onChange={(value) => {
                            console.log("reCAPTCHA value:", value);
                            // Ajoute ici la logique pour gérer la valeur de reCAPTCHA
                        }}
                    />
                    <button type="submit">Se connecter</button>
                    <div className="options">
                    <a href="#">Mot de passe oublié?</a>
                    <br />  <br /> 
                    <span>Vous n'avez pas de compte? <a href="#">  Inscrivez-vous</a></span>
                    </div>
                </form>
            </div>

            <div className="connexion-secondaire">
                <h3>Connectez-vous en tant que</h3>
                <hr />
                <ul>
                    <li>
                        <span>Administrateur</span>
                        <span>admin@demo.com</span>
                        <span>Démo de rise</span>
                    </li>
                    <hr />
                    <li>
                        <span>Client</span>
                        <span>client@demo.com</span>
                        <span>Démo de rise</span>
                    </li>
                    <hr />
                </ul>
                <p>Pour vérifier les membres de l'équipe, utilisez les adresses e-mail de la liste des membres de l'équipe. Le mot de passe est le même que riseDemo.</p>
            </div>

          
            <footer className="footer">
                <div className="footer-left">
                    Droits d'auteur © 2016 - 2024 Démo RISE
                </div>
                <div className="footer-right">
                    <a href="#">Boutique</a>
                    <a href="#">Base de connaissances</a>
                    <a href="#">Page personnalisée</a>
                </div>
            </footer>
        </div>
    );
}

export default App;
