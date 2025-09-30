import Header from "../../assets/images/PortfolioHeader.png";
import Muschel from "../../assets/images/Muschel.png";

import PearlScene from "../../components/PearlScene";
import WaterEffect from "../../components/WaterEffect";

export const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-start bg-white px-2 md:px-6 pt-20 sm:pt-32 md:pt-10 pb-6"
    >
      <WaterEffect className="pointer-events-none" />
      {/* Header-Bild */}
      <img
        src={Header}
        alt="Titel- Portfolio in Wasserschrift"
        className="relative w-64 max-w-5xl h-auto object-contain pointer-events-none select-none mb-4 mt-14"
      />

      <div className="w-full max-w-3xl flex flex-col items-center gap-4 text-center">
        <h1 className="text-xl text-shadow sm:text-2xl md:text-3xl text-gray-800 font-dancing leading-snug max-w-[90%] sm:max-w-xl mx-auto">
          Hi, ich bin{" "}
          <span className="text-pink-500 text-4xl font-dancing inline">
            Vivien
          </span>{" "}
          und ich liebe es, Code und Kreativität zu verbinden.
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl gap-6 px-4 mb-4">
          <div className="relative z-10 w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60">
            <img
              src={Muschel}
              alt="Bild einer geöffneten Muschel"
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-0 flex items-center justify-center hover:cursor-pointer">
              <div className="relative z-10 w-4/5 h-4/5 translate-y-[12px] sm:translate-y-[16px] md:translate-y-[24px] lg:translate-y-[28px]">
                <PearlScene />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 px-6 py-4 relative z-10">
          <a
            href="#projekte"
            className="px-6 py-2 rounded-full bg-white/60 border border-pink-600/20 text-pink-600 hover:bg-white/80 hover:shadow transition duration-300 ease-in-out"
            aria-label="zum Projektbereich navigieren"
          >
            Projekte
          </a>
          <button
            onClick={() =>
              (window.location.href =
                "mailto:vivienwbaum@gmail.com?subject=Kontaktanfrage&body=Hallo Vivien,")
            }
            className="px-6 py-2 rounded-full bg-white/40 border border-cyan-600/20 text-cyan-600 hover:bg-white/60 hover:text-cyan-700 hover:shadow-sm transition duration-300 ease-in-out"
            aria-label="E-Mail KOntakt aufnehmen"
          >
            Kontakt
          </button>
        </div>
      </div>
    </section>
  );
};
