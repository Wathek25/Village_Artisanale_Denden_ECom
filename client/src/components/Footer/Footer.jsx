import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Catégories</h1>
          <span>
            <Link className="link" to="/products/1">
              Bois
            </Link>
          </span>
          <span>
            <Link className="link" to="/products/2">
              Cuivre
            </Link>
          </span>
          <span>
            <Link className="link" to="/products/3">
              Verre Soufflé
            </Link>
          </span>
          <span>
            <Link className="link" to="/products/4">
              Mosaique
            </Link>
          </span>
          <span>
            <Link className="link" to="/products/5">
              Tapis
            </Link>
          </span>
          <span>
            <Link className="link" to="/products/6">
              Céramique
            </Link>
          </span>
          <span>
            <Link className="link" to="/products/7">
              Rotin
            </Link>
          </span>
        </div>
        <div className="item">
          <h1>Métiers</h1>
          <span>
            <Link className="link" to="/fibre">
              Fibres Végétales
            </Link>
          </span>
          <span>
            <Link className="link" to="/mosaique">
              Mosaique
            </Link>
          </span>
          <span>
            <Link className="link" to="/peinture">
              Peinture sur le bois
            </Link>
          </span>
          <span>
            <Link className="link" to="/tapisserie">
              Tapisserie
            </Link>
          </span>
          <span>
            <Link className="link" to="/verre">
              Verre Soufflé
            </Link>
          </span>
        </div>
        <div className="item">
          <h1>À propos</h1>
          <span>
            Le village de l'Artisanat du DenDen regroupe la majorité des
            spécialités et métiers de l'Artisanat tunisien dans un espace
            d'émulation et de création propice a l'interdisciplinarité des
            metiers, fonctionnant autour d'une dynamique d'apprentissage,
            d'animation et de commercialisation.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            La maison de l'artisanat du denden est sous la tutelle de l'Office
            National de l'Artisanat.
            <br />
            Contactez nous :
            <br />
            <b>Adresse: </b> Avenue de l'independance 2011 Denden Mannouba
            <br />
            <b>Tél: </b> (+216)71.610.919
            <br />
            <b>Fax: </b> (+216)71.610.922
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Village Artisanal Denden</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img
            src="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1678304683/payment/stripe_visa_mastercard_1_akuxxz.png"
            alt="payment"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
