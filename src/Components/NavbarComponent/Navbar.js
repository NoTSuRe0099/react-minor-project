import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
    let [show, setShow] = useState(true);
    let { showForm } = props;

    return (
        <>
            <nav className=" h-14 flex items-center bg-gray-900 ">
                <div className="container flex justify-between items-center reletive ">
                    <NavLink
                        exact
                        to="/"
                        className="text-white font-bold text-sm sm:text-lg"
                    >
                        N0T_SuRe ✔
                    </NavLink>

                    {show ? (
                        <i
                            className="fas fa-bars text-white text-sm block sm:hidden cursor-pointer"
                            onClick={() => {
                                setShow(!show);
                            }}
                        ></i>
                    ) : (
                        <i
                            className="fas fa-times text-white text-sm block sm:hidden cursor-pointer"
                            onClick={() => {
                                setShow(!show);
                            }}
                        ></i>
                    )}

                    {show ? (
                        <div className=" absolute top-14 sm:static  z-20 w-full sm:w-max sm:left-0 left-0 hidden sm:block ">
                            <ul className=" links h-max ">
                                <li className=" ml-0 sm:ml-6 block py-3 px-3">
                                    <NavLink
                                        exact
                                        to="/"
                                        activeClassName="is-active"
                                        className="Link w-full"
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li className="block ml-0 sm:ml-6 py-3 px-3">
                                    {showForm ? (
                                        <button
                                            onClick={() => props.ToggleForm()}
                                            className="Link w-full font-semibold"
                                        >
                                            Go Back
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => props.ToggleForm()}
                                            className="Link w-full font-semibold"
                                        >
                                            New Card
                                        </button>
                                    )}
                                </li>
                                <li className="block ml-0 sm:ml-6 py-3 px-3">
                                    <NavLink
                                        to="/skills"
                                        activeClassName="is-active"
                                        className="Link w-full"
                                    >
                                        Skills
                                    </NavLink>
                                </li>
                                <li className="block ml-0 sm:ml-6 py-3 px-3">
                                    <NavLink
                                        to="/projects"
                                        activeClassName="is-active"
                                        className="Link w-full"
                                    >
                                        Projects
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <div className=" absolute top-14 sm:static z-20 w-full sm:w-max sm:left-0 left-0 block">
                            <ul className=" links h-max ">
                                <li className=" ml-0 sm:ml-6 block p-full py-3 ">
                                    <NavLink
                                        exact
                                        to="/"
                                        activeClassName="is-active"
                                        className="Link w-full"
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li className="block ml-0 sm:ml-6 py-3 px-3">
                                    {showForm ? (
                                        <button
                                            onClick={() => props.ToggleForm()}
                                            className="Link w-full font-semibold"
                                        >
                                            Go Back
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => props.ToggleForm()}
                                            className="Link w-full font-semibold"
                                        >
                                            New Card
                                        </button>
                                    )}
                                </li>
                                <li className="block ml-0 sm:ml-6 py-3">
                                    <NavLink
                                        to="/skills"
                                        activeClassName="is-active"
                                        className="Link w-full"
                                    >
                                        Skills
                                    </NavLink>
                                </li>
                                <li className="block ml-0 sm:ml-6 py-3">
                                    <NavLink
                                        to="/projects"
                                        activeClassName="is-active"
                                        className="Link w-full"
                                    >
                                        Projects
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
