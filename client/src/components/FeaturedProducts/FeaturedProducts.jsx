import React, { useState } from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";

const FeaturedProducts = ({ type }) => {
  const [features, setFeatures] = useState([]);
  const [trending, setTrending] = useState([]);
  const { data, loading, error } = useFetch(`/products?populate=*`);

  useEffect(() => {
    if (!data) {
      return;
    }
    const feat = [];
    const trend = [];
    for (const d of data) {
      if (d.attributes.type === "featured") {
        feat.push(d);
      } else if (d.attributes.type === "trending") {
        trend.push(d);
      }
    }
    setFeatures(feat);
    setTrending(trend);
  }, [data]);
  console.log(features);

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} </h1>
      </div>
      <div className="bottom">
        {error
          ? "Erreur!"
          : loading
          ? "loading"
          : type === "Produits populaires"
          ? features.length &&
            features
              .slice(0, 4)
              .map((item) => <Card item={item} key={item.id} />)
          : trending.length &&
            trending
              .slice(0, 4)
              .map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
