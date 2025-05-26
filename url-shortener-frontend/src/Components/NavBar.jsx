import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/dashboard", label: "Dashboard" },
  ];

  return (
    <nav className="bg-blue-600 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="font-bold text-2xl">
          Linkify
        </Link>

        {/* Hamburger for mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>

        {/* Desktop links */}
        <ul className="hidden sm:flex space-x-6">
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                className={`hover:text-yellow-300 ${
                  location.pathname === path ? "underline" : ""
                }`}
              >
                {label}
              </Link>
            </li>
            
          ))}
          <li key="/register">
  <Link
    to="/register"
    className="bg-red-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-red-700 transition duration-200"
  >
    Sign Up
  </Link>
</li>
        </ul>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="sm:hidden bg-blue-700 px-4 py-3 space-y-3">
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                onClick={() => setIsOpen(false)}
                className={`block hover:text-yellow-300 ${
                  location.pathname === path ? "underline" : ""
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
