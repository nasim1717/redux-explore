import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sort } from "../../features/filter/filterSlice";

const Sort = () => {
  const dispatch = useDispatch();
  const { sort: filterSort } = useSelector((state) => state.filters);

  const handleSort = (event) => {
    const select = event.target.value;
    dispatch(sort(select));
  };
  console.log("sort-> ", filterSort);

  return (
    <div className="sidebar-content">
      <h4>Sort</h4>
      <select
        name="sort"
        id="lws-sort"
        className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
        defaultValue={filterSort}
        onChange={handleSort}
      >
        <option value="default">Default</option>
        <option value="newest">Newest</option>
        <option value="most_liked">Most Liked</option>
      </select>
    </div>
  );
};

export default Sort;
