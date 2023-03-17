import React from "react";
import "./Verre.scss";

export default function Verre() {
  return (
    <div className="verre">
      <h2 className="title">Verre Soufflé</h2>
      <p>
        Depuis fort longtemps, les artisans tunisiens sont reconnus pour leur
        maîtrise de l’art du verre soufflé. Tellement longtemps que certains ont
        retrouvé des objets du quotidien en verre soufflé datant des périodes
        puniques et romaines. Le style de cet art s’est modulé aux tendances du
        temps, mais la dextérité demandée pour la manier demeure toujours la
        même. Les souffleurs de verre chauffent, étirent, tournent, retournent,
        gonflent et sculptent pour créer de petites et grandes oeuvres!
        <br />
        La technique du verre soufflé est bien présente en Tunisie et l’on peut
        mesurer à quel point cette pratique s’est affinée au fil des siècles :
        on trouve des objets du quotidien en verre soufflé dans les différents
        musées historiques de Tunisie datant des périodes puniques puis
        romaines. Après une éclipse de quelques siècles, le verre revient en
        Tunisie par l’effort de l’Office National de l’Artisanat qui a
        réintroduit les techniques traditionnelles. Les artisans créateurs ont
        pris la relève et s’expriment désormais dans plusieurs registres qui
        allient traditions ancestrales et pratiques modernes. <br />
        <br />
        Makrem Zitoun est souffleur de verre près de Tunis. Vases, chandeliers,
        services à thé… Ses créations associent formes et matières entre
        tradition et design moderne. Visitez son atelier à Den-Den près de
        Tunis, au sein de village de denden
      </p>
      <iframe
        width="100%"
        height="420"
        margin="auto"
        src="https://www.youtube.com/embed/YA41VdIk1Oo"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <div>
        <div className="img1">
          <div>
            <a
              href="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635729828/Nos%20artisans/Verre%20Souffl%C3%A9/DSC_0135_whwxwf.jpg"
              data-fancybox="gallery"
              target="_blank"
            >
              <img
                src="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635729828/Nos%20artisans/Verre%20Souffl%C3%A9/DSC_0135_whwxwf.jpg"
                alt="img1"
              />
            </a>
          </div>
        </div>

        <div className="img2">
          <div>
            <a
              href="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635729837/Nos%20artisans/Verre%20Souffl%C3%A9/DSC_0134_-_Copy_cx6twr.jpg"
              data-fancybox="gallery"
              target="_blank"
            >
              <img
                src="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635729837/Nos%20artisans/Verre%20Souffl%C3%A9/DSC_0134_-_Copy_cx6twr.jpg"
                alt="img2"
              />
            </a>
          </div>
        </div>

        <div className="img3">
          <div>
            <a
              href="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1678288937/sample%20products/Verre%20Soufl%C3%A9/DSC_0138_fye4f7.jpg"
              data-fancybox="gallery"
              target="_blank"
            >
              <img
                src="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1678288937/sample%20products/Verre%20Soufl%C3%A9/DSC_0138_fye4f7.jpg"
                alt="img3"
              />
            </a>
          </div>
        </div>

        <div className="contacts">
          <p>
            <span>CONTACT :</span>
            <br />
            Artisan : Makrem Zitoun.
            <br />
            Tél : (+216 ) 23 268 026. <br />
            Adresse : Maison de l'artisanat DenDen, atelier num 11.
          </p>
        </div>
      </div>
      <br />
    </div>
  );
}
