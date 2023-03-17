import React from "react";
import Categories from "../../components/Categories/Categories";
import Contact from "../../components/Contact/Contact";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import PaymentSuccessModal from "../../components/PaymentSuccessModal/PaymentSuccessModal";
import Slider from "../../components/Slider/Slider";
import "./Home.scss";

const Home = () => {
  const url = window.location.href.split("?")[1];

  return (
    <div className="home">
      {url === "success=true" && <PaymentSuccessModal />}
      <Slider />
      <FeaturedProducts type="Produits populaires" />
      <h2>Les Catégories</h2>
      <Categories />
      <FeaturedProducts type="Produits en tendance" />
      <Contact />
    </div>
  );
};

export default Home;
