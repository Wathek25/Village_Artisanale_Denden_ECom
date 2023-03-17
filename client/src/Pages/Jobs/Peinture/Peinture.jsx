import React from "react";
import "./Peinture.scss";

export default function Peinture() {
  return (
    <div className="peinture">
      <h2 className="title">Peinture sur le bois</h2>
      <p>
        Le travail du bois est fortement enraciné dans l’artisanat L’artisan
        tunisien n’a pas seulement excellé dans la sculpture du bois. D’autres
        techniques, telles que la peinture acrylique et les ciseaux à bois
        reprenant de magnifiques formes et de sublimes couleurs provenant de sa
        culture visuelle qu'il alimente d'inspirations de la céramique
        qallaline, des carreaux de faïence andalous, de la broderie du sud des
        bakhnoug ou encore de la mosaïque romaine.
      </p>
      <iframe
        width="100%"
        height="420"
        margin="auto"
        src="https://www.youtube.com/embed/UnI2W7oNU2E"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <div>
        <div className="img1">
          <div>
            <a
              href="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635728076/Nos%20artisans/Peinture%20sur%20le%20bois/DSC_0267_lvcqle.jpg"
              data-fancybox="gallery"
              target="_blank"
            >
              <img
                src="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635728076/Nos%20artisans/Peinture%20sur%20le%20bois/DSC_0267_lvcqle.jpg"
                alt="img1"
              />
            </a>
          </div>
        </div>

        <div className="img2">
          <div>
            <a
              href="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635728099/Nos%20artisans/Peinture%20sur%20le%20bois/DSC_0268_1_xmaar9.jpg"
              data-fancybox="gallery"
              target="_blank"
            >
              <img
                src="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635728099/Nos%20artisans/Peinture%20sur%20le%20bois/DSC_0268_1_xmaar9.jpg"
                alt="img2"
              />
            </a>
          </div>
        </div>

        <div className="img3">
          <div>
            <a
              href="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635728125/Nos%20artisans/Peinture%20sur%20le%20bois/DSC_0274_mjknsf.jpg"
              data-fancybox="gallery"
              target="_blank"
            >
              <img
                src="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635728125/Nos%20artisans/Peinture%20sur%20le%20bois/DSC_0274_mjknsf.jpg"
                alt="img3"
              />
            </a>
          </div>
        </div>

        <div className="contacts">
          <p>
            <span>CONTACT :</span>
            <br />
            Artisan : Bilel Fekih. <br />
            Tél : (+216 ) 98 215 293. <br />
            Adresse : Maison de l'artisanat DenDen, atelier num 8.
          </p>
        </div>
      </div>
      <br />
    </div>
  );
}
