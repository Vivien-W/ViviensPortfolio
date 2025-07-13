import { useEffect } from "react";
import logo from "../assets/images/logo.gif";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-pink-300/50 backdrop-blur-md bg-white/10">
  <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
    
    {/* Logo */}
    <a href="#home" className="flex items-center gap-2">
      <img
        src={logo}
        alt="Logo"
        className="h-10 w-10 rounded-full border border-pink-300 object-cover"
      />
      <span className="text-sm font-italic text-gray-800 hidden sm:inline">
        Vivien Wallbaum
      </span>
    </a>

    {/* Desktop Links */}
    <div className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
      {["Home", "Über Mich", "Projekte", "Kontakt"].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase().replace(" ", "")}`}
          className="hover:text-pink-600 transition-colors"
        >
          {item}
        </a>
      ))}
    </div>

    {/* Burger Menu */}
    <div
      className="md:hidden flex flex-col justify-between w-5 h-4 cursor-pointer"
      onClick={() => setMenuOpen((prev) => !prev)}
    >
      <span className="block h-0.5 w-full bg-gray-800 rounded" />
      <span className="block h-0.5 w-full bg-gray-800 rounded" />
      <span className="block h-0.5 w-full bg-gray-800 rounded" />
    </div>
  </div>
</nav>

  );
};
