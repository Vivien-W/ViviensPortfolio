export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full z-40 flex flex-col items-center justify-center
        backdrop-blur-2xl bg-white/80 border-b border-white/60 transition-all duration-300 ease-in-out
        ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}
      `}
    >
      {/* Close Button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-gray-800 text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* Navigation Links */}
      {["Home", "About", "Projects", "Contact"].map((item, i) => (
        <a
          key={i}
          href={`#${item.toLowerCase()}`}
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-gray-800 my-4 transform transition-transform duration-300
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
          `}
        >
          {item}
        </a>
      ))}
    </div>
  );
};
