import { useEffect } from "react";
import logo from "../assets/images/logo.gif";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-cyan-300/30 backdrop-blur-lg bg-white/20 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-10 rounded-full border border-pink-300 object-cover shadow-md"
          />
          <span className="text-sm font-italic text-gray-800 hidden sm:inline">
            Vivien Wallbaum
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          {["Home", "About", "Projekte", "Kontakt"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className="relative group hover:text-pink-600 transition-colors"
            >
              {item}
              {/* Unterstrich-Animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-pink-400 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Burger Menu */}
        <div
          className="md:hidden flex flex-col justify-between w-6 h-5 cursor-pointer"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span
            className={`block h-0.5 w-full bg-gray-800 rounded transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-gray-800 rounded transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-gray-800 rounded transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          />
        </div>
      </div>
    </nav>
  );
};
