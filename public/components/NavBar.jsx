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
                        <a href="emotes" className="p-2 hover:text-orange-600">
                            <li className="text-lg">Emotes</li>
                        </a>
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
