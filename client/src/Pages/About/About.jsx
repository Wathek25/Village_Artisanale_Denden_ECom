import React from "react";
import "./About.scss";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="left">
          <h1>Village Artisanal Denden</h1>

          <p>
            Les villages d'artisans et les galeries artisanales sont inspirés
            d'un passé récent ou l'activité artisanale était regroupée dans des
            souks de metiers ayant impregné l'urbanisation des villes et
            developpé un style arabo-musulman bien spécifique. Aujourd'hui, le
            village de l'Artisanat du DenDen regroupe la majorité des
            spécialités et métiers de l'Artisanat tunisien dans un espace
            d'émulation et de création propice a l'interdisciplinarité des
            metiers, fonctionnant autour d'une dynamique d'apprentissage,
            d'animation et de commercialisation.
          </p>

          <p>
            Regroupant 42 artisans de spécialités différentes, l'espace couvre
            une superficie de 4000 m2 pour constituer une veritable vitrine de
            l'artisanat tunisien dans toute sa beauté et son originalité et en
            proposant une panoplie de produits dans les spécialités suivantes:
            Tissage manuel et tapisserie, poterie, céramique, mosaique,
            ferronnerie d'art, verre soufflé, fibres végétales, bois d'olivier,
            bijoux, cuivre ciselé, repoussé et émaillé, orfevrerie, lanternes,
            menuiserie traditionnelle, sculpture sur bois, cages
            traditionnelles, broderie manuelle, habits traditionnels, corail,
            peinture sur tout support, fabrication d'instruments de musique
            traditionnels, cuir et chaussures traditionnelles et thermoformage.
          </p>
          <div className="right">
            <img
              className="aboutImg"
              src="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1678903815/Carousel/villageImg_q1oxgr.jpg"
              alt="about_img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
