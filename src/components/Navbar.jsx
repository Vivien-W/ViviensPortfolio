import { useEffect } from "react";
import logo from "../assets/images/logo.gif";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-30 bg-white/60 backdrop-blur-xl border-b border-white/50 shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Logo"
              className="h-12 object-cover rounded-full border-1 border-pink-500"
            />
            <span className="text-black tracking-wider text-shadow-2xs hidden sm:inline">
              Vivien Wallbaum
            </span>
          </a>

          {/* Burger Icon */}
          <div
            className="md:hidden flex flex-col justify-between w-6 h-5 cursor-pointer z-50"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-full bg-gray-800 rounded"></span>
            <span className="block h-0.5 w-full bg-gray-800 rounded"></span>
            <span className="block h-0.5 w-full bg-gray-800 rounded"></span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "Über Mich", "Projekte", "Kontakt"].map((item, i) => (
              <a
                key={i}
                href={`#${item.toLowerCase()}`}
                className="text-black hover:text-pink-600 transition font-medium"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
