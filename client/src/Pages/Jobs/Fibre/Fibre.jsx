import React from "react";
import "./Fibre.scss";

export default function Fibre() {
  return (
    <div className="fibre">
      <h2 className="title">Fibres Végétales</h2>
      <p>
        Le travail des fibres végétales -une matière naturelle très abondante en
        Tunisie- est de retour. Le fameux couffin, célèbre dans le monde entier,
        est un objet utilitaire qui accompagne aussi la majorité des tunisiens
        dans leur marché. La natte, un tapis d’alfa, de jonc ou de palme coloré,
        a toujours fait partie de l’ameublement rural et citadin Les meubles en
        vannerie (cannage) sont une production récente qui gagne les faveurs
        d’une clientèle de plus en plus moderne.
      </p>
      <p>
        <iframe
          width="100%"
          height="420"
          margin="auto"
          src="https://www.youtube.com/embed/sopao_sJFhw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </p>

      <div>
        <div className="img1">
          <div>
            <a
              href="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635729056/Nos%20artisans/Fibre%20v%C3%A9g%C3%A9tale/DSC_0097_vddhhm.jpg"
              data-fancybox="gallery"
              target="_blank"
            >
              <img
                src="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635729056/Nos%20artisans/Fibre%20v%C3%A9g%C3%A9tale/DSC_0097_vddhhm.jpg"
                alt="img1"
              />
            </a>
          </div>
        </div>

        <div className="img2">
          <div>
            <a
              href="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635729170/Nos%20artisans/Fibre%20v%C3%A9g%C3%A9tale/DSC_0102_1_iy5cli.jpg"
              data-fancybox="gallery"
              target="_blank"
            >
              <img
                src="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635729170/Nos%20artisans/Fibre%20v%C3%A9g%C3%A9tale/DSC_0102_1_iy5cli.jpg"
                alt="img2"
              />
            </a>
          </div>
        </div>

        <div className="img3">
          <div>
            <a
              href="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635729176/Nos%20artisans/Fibre%20v%C3%A9g%C3%A9tale/DSC_0093_gjkfpl.jpg"
              data-fancybox="gallery"
              target="_blank"
            >
              <img
                src="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635729176/Nos%20artisans/Fibre%20v%C3%A9g%C3%A9tale/DSC_0093_gjkfpl.jpg"
                alt="img2"
              />
            </a>
          </div>
        </div>
        <div className="contacts">
          <p>
            <span>CONTACT :</span>
            <br />
            Artisan : M.Hammami.
            <br />
            Tél : (+216 ) 98 367 459. <br />
            Adresse : Maison de l'artisanat DenDen.
          </p>
        </div>
      </div>
      <br />
    </div>
  );
}
