import React from "react";
import Tags from "../components/tags/Tags";
import VedioGrid from "../components/grid/VedioGrid";
import Pagination from "../components/ui/Pagination";

const Home = () => {
  return (
    <>
      <Tags></Tags>
      <VedioGrid></VedioGrid>
      <Pagination></Pagination>
    </>
  );
};

export default Home;
