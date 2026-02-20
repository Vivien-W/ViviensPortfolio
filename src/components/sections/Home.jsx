import Header from "../../assets/images/PortfolioHeader.png";
import Muschel from "../../assets/images/Muschel.png";
import PearlScene from "../../components/PearlScene";
import WaterEffect from "../../components/WaterEffect";

export const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-start bg-white px-2 md:px-6 pt-20 sm:pt-32 md:pt-10 pb-6 no-select"
    >
      {/* WaterEffect NUR im Hero */}
      <div className="absolute inset-0 z-0 hidden sm:block pointer-events-none">
        <WaterEffect />
      </div>
      {/* Header-Bild */}
      <img
        src={Header}
        alt="Titel- Portfolio in Wasserschrift"
        className="relative w-48 sm:w-64 max-w-5xl h-auto object-contain pointer-events-none select-none mb-8 mt-24"
      />

      <div className="w-full max-w-3xl flex flex-col items-center gap-4 text-center">
        <h1 className="text-3xl text-shadow sm:text-5xl md:text-6xl text-gray-800 font-dancing leading-snug max-w-[90%] sm:max-w-xl mx-auto">
          Hi, ich bin{" "}
          <span className="text-pink-500 sm:text-7xl md:text-8xl font-dancing inline">
            Vivien.
          </span>{" "}
          Ich entwickle barrierefreie digitale Anwendungen.
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl gap-6 px-4 mb-4 mt-4">
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
            className="
    w-full sm:w-auto px-8 py-3 rounded-full text-center
    bg-white/60 backdrop-blur-sm
    border border-pink-300/40
    text-pink-700 font-semibold
    shadow-sm
    hover:bg-white/80 hover:shadow-md
    transition-all duration-300
  "
          >
            Projekte
          </a>
          <button
            onClick={() =>
              (window.location.href =
                "mailto:vivienwbaum@gmail.com?subject=Bewerbung%20als%20Junior%20Frontend-Entwicklerin")
            }
            className="
                w-full sm:w-auto px-8 py-3 rounded-full 
                bg-white/80 text-cyan-900 font-semibold
                shadow-lg hover:bg-white hover:shadow-xl
                transition-all duration-300
              "
          >
            Kontakt per E-Mail
          </button>
        </div>
      </div>
    </section>
  );
};
