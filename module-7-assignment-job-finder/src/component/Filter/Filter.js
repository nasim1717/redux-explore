import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { searchJob, sort } from "../../features/jobsFinder/jobsFinderSlice";

const Filter = () => {
  const [salary, setSalary] = useState("");
  const dispatch = useDispatch();

  const handleFilter = (event) => {
    dispatch(sort(event.target.value));
    setSalary(event.target.value);
  };

  let time;
  const handleSearch = (event) => {
    clearTimeout(time);
    time = setTimeout(() => {
      dispatch(searchJob(event.target.value));
    }, 1000);
  };

  return (
    <>
      <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
        <h1 className="lws-section-title">All Available Jobs</h1>
        <div className="flex gap-4">
          <div className="search-field group flex-1">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="search-icon group-focus-within:text-blue-500"
            />
            <input
              onChange={handleSearch}
              type="text"
              placeholder="Search Job"
              className="search-input"
              id="lws-searchJob"
            />
          </div>

          <select
            onChange={handleFilter}
            id="lws-sort"
            name="sort"
            autoComplete="sort"
            className="flex-1"
            value={salary}
          >
            <option value="">Default</option>
            <option value="Salary (Low to High)">Salary (Low to High)</option>
            <option value="Salary (High to Low)">Salary (High to Low)</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Filter;
