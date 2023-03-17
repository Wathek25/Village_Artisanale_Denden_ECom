import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import useFetch from "../../hooks/useFetch";
import "./Products.scss";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState("asc");
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Tous les produits de cette catégorie</h2>
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>
        <div className="filterItem">
          <h2>Filter par prix</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Trier par</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value={sort}
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Prix croissants</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value={sort}
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Prix décroissants</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635736256/Carousel/GettyImages-478319994-1024x576_yea8ac.jpg"
          alt="cat_cover_img"
        />
        <List
          catId={catId}
          maxPrice={maxPrice}
          sort={sort}
          subCats={selectedSubCats}
        />
      </div>
    </div>
  );
};

export default Products;
