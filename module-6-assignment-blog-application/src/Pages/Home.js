import React from "react";
import Filter from "../components/Layout/Filter";
import BlogGrid from "../components/Grid/BlogGrid";

const Home = () => {
  return (
    <section className="wrapper">
      <Filter></Filter>
      <BlogGrid></BlogGrid>
    </section>
  );
};

export default Home;
