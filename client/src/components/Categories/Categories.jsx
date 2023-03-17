import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1678287905/sample%20products/Bois/DSC_0255_acqcdx.jpg"
            alt="Bois_Categories_img"
          />
          <button>
            <Link className="link" to="/products/1">
              Bois
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1678288550/sample%20products/Cuivre/DSC_0332_slmrxv.jpg"
            alt="Cuivre_Categories_img"
          />
          <button>
            <Link to="/products/2" className="link">
              Cuivre
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1678288991/sample%20products/Verre%20Soufl%C3%A9/DSC_0146_rftdbu.jpg"
            alt="Verre_Souflé_Categories_img"
          />
          <button>
            <Link to="/products/3" className="link">
              Verre Souflé
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1678288621/sample%20products/Mosaique/DSC_0053_nkkrwo.jpg"
            alt="Mosaique_Categories_img"
          />
          <button>
            <Link to="/products/4" className="link">
              Mosaïque
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1678288782/sample%20products/Tapis/DSC_0253_unkvbg.jpg"
                alt="Tapis_Categories_img"
              />
              <button>
                <Link to="/products/5" className="link">
                  Tapis
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1678288453/sample%20products/C%C3%A9ramique/DSC_0200_beddiy.jpg"
                alt="Céramique_Categories_img"
              />
              <button>
                <Link to="/products/6" className="link">
                  Céramique
                </Link>
              </button>
            </div>
          </div>
        </div>

        <div className="row">
          <img
            src="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1678288720/sample%20products/Rotin/DSC_0094_flkuct.jpg"
            alt="Rotin_Categories_img"
          />
          <button>
            <Link to="/products/7" className="link">
              Rotin
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
