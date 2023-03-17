import React from "react";
import "./Tapisserie.scss";

export default function Tapisserie() {
  return (
    <div className="tapisserie">
      <h2 className="title">Tapisserie</h2>
      <p>
        La Tunisie est réputée pour ses tapis, mergoums, klims et autres
        tapisseries et tissages. De tous temps et aujourd’hui encore, du nord au
        sud, dans les villes et les campagnes, les activités de tissage
        foisonnent.
        <br />
        Mais en réalité, le tissage du tapis existait bien auparavant; et
        aujourd’hui, le tapis à point noués est produit dans toutes les régions
        de la Tunisie. Le tapis, dit de Kairouan, comporte un champ, central
        généralement hexagonal, des écoinçons semés de motifs stylisés et des
        bandes d’encadrement où s’alternent des motifs géométriques et floraux.
        <br />
        La production de tapis en Tunisie s’est développée avec l’amélioration
        et la diversification du produit qui a connu une véritable mutation au
        niveau des textures , des technologies de traitement et de production
        des composants (laine, lin, soie…), et de l’esthétique (composition,
        motifs,gamme…).
        <br />
        La finesse du point des tapis tunisiens estompe le contour des motifs et
        leur donne l’aspect fondu qui les caractérise et qui est du meilleur
        effet lorsqu’il est soutenu par une harmonie de couleurs dont les
        artisanes tunisiennes ont le secret.
      </p>
      <iframe
        width="100%"
        height="420"
        margin="auto"
        src="https://www.youtube.com/embed/d52jhMoisrk"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <div>
        <div className="img1">
          <div>
            <a
              href="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1678288798/sample%20products/Tapis/DSC_0233_js2fnp.jpg"
              data-fancybox="gallery"
              target="_blank"
            >
              <img
                src="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1678288798/sample%20products/Tapis/DSC_0233_js2fnp.jpg"
                alt="img1"
              />
            </a>
          </div>
        </div>

        <div className="img2">
          <div>
            <a
              href="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635728564/Nos%20artisans/Tapisserie/DSC_0228_izj8fu.jpg"
              data-fancybox="gallery"
              target="_blank"
            >
              <img
                src="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635728564/Nos%20artisans/Tapisserie/DSC_0228_izj8fu.jpg"
                alt="img2"
              />
            </a>
          </div>
        </div>

        <div className="img3">
          <div>
            <a
              href="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1678288896/sample%20products/Tapis/DSC_0242_fykljh.jpg"
              data-fancybox="gallery"
              target="_blank"
            >
              <img
                src="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1678288896/sample%20products/Tapis/DSC_0242_fykljh.jpg"
                alt="img3"
              />
            </a>
          </div>
        </div>

        <div className="contacts">
          <p>
            <span>CONTACT :</span>
            <br />
            Artisan : Monia Negra. <br />
            Tél : (+216 ) 98 330 360. <br />
            Adresse : Maison de l'artisanat DenDen.
          </p>
        </div>
      </div>
      <br />
    </div>
  );
}
