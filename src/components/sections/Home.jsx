import blume from '../../assets/images/background.png';

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-white px-6 py-2"
    >
      <div className="max-w-4xl w-full rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.05)] border border-white/80 backdrop-blur-2xl bg-white/60">
        
        {/* Headerbild */}
        <img
          src={blume}
          alt="Header"
          className="w-full object-cover h-auto"
        />

        {/* Button-Gruppe */}
        <div className="flex justify-center gap-4 px-6 py-6 bg-white/50 backdrop-blur-xl">
          <a
            href="#projects"
            className="px-6 py-2 rounded-full bg-white/60 border border-pink-600/20 text-pink-600 hover:bg-white/80 hover:shadow transition duration-300 ease-in-out"
          >
            Projekte
          </a>

          <button
            onClick={() =>
              window.location.href =
                "mailto:vivienwbaum@gmail.com?subject=Kontaktanfrage&body=Hallo Vivien,"
            }
            className="px-6 py-2 rounded-full bg-white/40 border border-cyan-600/20 text-cyan-600 hover:bg-white/60 hover:text-cyan-700 hover:shadow-sm transition duration-300 ease-in-out"
          >
            Kontakt
          </button>
        </div>
      </div>
    </section>
  );
};
