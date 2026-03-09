import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const link = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/FAQ">FAQ</NavLink>
      <NavLink to="/changelog">Changelog</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/download">Download</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </>
  );
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar  w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">CS — Ticket System</a>
        </div>
        <div className="navbar-end">
          <div className="flex gap-5 mr-5">{link}</div>
          <button className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white">
            <span className="text-xl">+</span> New Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
