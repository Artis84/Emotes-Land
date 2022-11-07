/* eslint-disable react/react-in-jsx-scope */
// import React from "react";
// import PropTypes from "prop-types";

function NavBar() {
    return (
        <div className="w-full bg-slate-700">
            <nav className="flex justify-between">
                <div className="flex items-center py-5 px-4 w-full">
                    <a href="/" className="ease-linear duration-200 hover:rotate-45">
                        <img className="m-2" src="https://cdn.frankerfacez.com/emote/243789/2" />
                    </a>
                    <ul className="flex gap-4 px-5 bg-">
                        <div className="dropdown relative">
                            <button className="p-2 text-lg dropdown-toggle hover:text-orange-600" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Emotes
                            </button>
                            <ul
                                className="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none"
                                aria-labelledby="dropdownMenuButton1">
                                <li>
                                    <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="top">
                                        Top Emotes
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="hot">
                                        Hot Emotes
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">
                                        Search
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <a href="#" className="p-2 text-lg hover:text-orange-600">
                            <li>Streams</li>
                        </a>
                        <a href="#" className="p-2 text-lg hover:text-orange-600">
                            <li>Chat</li>
                        </a>
                    </ul>
                </div>
                <div className="flex items-center justify-end py-5 px-4 w-full">
                    <ul className="flex gap-4 px-5">
                        <a href="#" className="p-2 hover:text-orange-600">
                            <li className="text-lg">Profil</li>
                        </a>
                        <a href="#" className="p-2 text-lg hover:text-orange-600">
                            <li>Paramétres</li>
                        </a>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

NavBar.propTypes = {};

export default NavBar;
