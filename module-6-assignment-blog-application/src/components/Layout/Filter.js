import React from "react";
import Sort from "./Sort";
import Filters from "./Filters";

const Filter = () => {
  return (
    <>
      <aside>
        <div className="sidebar-items">
          <Sort></Sort>
          <Filters></Filters>
        </div>
      </aside>
    </>
  );
};

export default Filter;
