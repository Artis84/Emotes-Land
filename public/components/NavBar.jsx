/* eslint-disable react/react-in-jsx-scope */
// import React from "react";
// import PropTypes from "prop-types";

import { useState, useCallback, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import PopupCv from "./PopupCv";

function NavBar() {
    const [query, setQueryParam] = useState("");
    const activeStyle = {
        color: "#ea580c",
    };
    const btnSearch = useRef(null);
    const refInputSearch = useCallback((node) => {
        node?.focus();
    }, []);

    const refButtonSearch = useCallback((node) => {
        btnSearch.current = node;
        console.log(btnSearch);
    }, []);

    function handleKeypress(e) {
        if (e.key === "Enter") {
            console.log("hit");
            console.log(btnSearch);
            btnSearch.current.click();
        }
    }

    return (
        <>
            <PopupCv />
            <div className=" bg-slate-700 border-b-2 border-black">
                <nav className="flex justify-between">
                    <div className="flex items-center py-5 px-4 w-full">
                        <NavLink to="/" className="ease-linear duration-200 hover:rotate-45">
                            <img className="m-2" src="https://cdn.frankerfacez.com/emote/243789/2" />
                        </NavLink>
                        <ul className="flex gap-4 px-5">
                            <div className="dropdown relative">
                                <button className="p-2 text-lg dropdown-toggle hover:text-orange-600" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Emotes
                                </button>
                                <ul
                                    className="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none"
                                    aria-labelledby="dropdownMenuButton1">
                                    <li>
                                        <Link className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" to="top">
                                            Top Emotes
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" to="hot">
                                            Hot Emotes
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" to="#">
                                            Search
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <NavLink to="stream" style={({ isActive }) => (isActive ? activeStyle : undefined)} className="p-2 text-lg hover:text-orange-600">
                                <li>Streams</li>
                            </NavLink>
                            <NavLink to="chat" style={({ isActive }) => (isActive ? activeStyle : undefined)} className="p-2 text-lg hover:text-orange-600">
                                <li>Chat</li>
                            </NavLink>
                        </ul>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="mb-3 md:hidden lg:block lg:w-96">
                            <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                                <input
                                    required
                                    type="search"
                                    value={query}
                                    ref={refInputSearch}
                                    onChange={(e) => {
                                        setQueryParam(e.currentTarget.value);
                                    }}
                                    onKeyPress={handleKeypress}
                                    className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding focus:border-2 rounded-full transition ease-in-out m-0 focus:text-gray-700 focus:border-orange-600 focus:outline-none"
                                    placeholder="Search"
                                    aria-label="Search"
                                    aria-describedby="button-search"
                                />
                                <Link
                                    className="btn inline-block px-6 py-2.5 bg-orange-600 font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                                    ref={refButtonSearch}
                                    to={`results/${query}`}>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path
                                            fill="currentColor"
                                            d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-end py-5 px-4 w-full">
                        <ul className="flex gap-4 px-5">
                            <NavLink to="profile" style={({ isActive }) => (isActive ? activeStyle : undefined)} className="p-2 hover:text-orange-600">
                                <li className="text-lg">Profil</li>
                            </NavLink>
                            <NavLink to="parametres" style={({ isActive }) => (isActive ? activeStyle : undefined)} className="p-2 text-lg hover:text-orange-600">
                                <li>Paramétres</li>
                            </NavLink>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
}

NavBar.propTypes = {};

export default NavBar;
