import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filter } from "../../features/filter/filterSlice";

const Filters = () => {
  const dispatch = useDispatch();
  const { filter: check } = useSelector((state) => state.filters);

  const handleFilter = (event) => {
    const checked = event.target.value;
    dispatch(filter(checked));
  };

  return (
    <div className="sidebar-content">
      <h4>Filter</h4>
      <div className="radio-group">
        <div>
          <input
            type="radio"
            name="filter"
            id="lws-all"
            value="all"
            defaultChecked={check === "all" && true}
            className="radio"
            onClick={handleFilter}
          />
          <label htmlFor="lws-all">All</label>
        </div>
        <div>
          <input
            type="radio"
            name="filter"
            id="lws-saved"
            value="saved"
            className="radio"
            defaultChecked={check === "saved" && true}
            onClick={handleFilter}
          />
          <label htmlFor="lws-saved">Saved</label>
        </div>
      </div>
    </div>
  );
};

export default Filters;
