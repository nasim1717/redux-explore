import React, { useState } from 'react';
import Logo from "../../assets/images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { seraching } from '../../features/search/searchSlice';
let time;
const Navbar = () => {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();

    const handleSearch = (event) => {
        setSearch(event.target.value);
        clearTimeout(time);
        time = setTimeout(() => {
            dispatch(seraching(event.target.value));
        }, 1000);
    }

    return (
        <nav className="container relative py-3">
            <div className="flex items-center justify-between">
                <Link to="/">
                    <img src={Logo} alt='' />
                </Link>
                <div className="flex-1 max-w-xs search-field group">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon group-focus-within:text-blue-500' />
                    <input onChange={handleSearch} style={{ color: "black" }} type="text" value={search} placeholder="Search Task" className="search-input" id="lws-searchTask" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;