import React from "react";
import Products from "../components/Products";
import PageTitle from "./PageTitle";

const Home = () => {
  return (
      <div className="home-cart-body">
        <h1 className="heading">Welcome to the redux toolkit store</h1>
        <section>
          <PageTitle title="Products" />
          <Products />
        </section>
      </div>
  );
};

export default Home;
