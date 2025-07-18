
import PearlScene from '../../components/PearlScene'; 
import backgroundImage from '../../assets/images/Background4.png';

export const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-white px-6 py-2 overflow-hidden z-10"
    >
     

        {/* Container um Bild + Perle */}
  <div className="relative w-full max-w-3xl mx-auto">
    {/* Muschelbild */}
    <img
      src={backgroundImage}
      alt="Hintergrundbild mit Titel, Muschel und Zitat"
      className="w-full h-auto object-contain pointer-events-none select-none"
    />

    {/* Perle*/}
    <div className="hidden md:block absolute top-[58%] left-[27.5%] w-[30vw] max-w-[124px] aspect-square -translate-x-1/2 -translate-y-1/2 z-10 hover: cursor-pointer">
      <PearlScene />
    </div>
  

        {/* Button-Gruppe */}
        <div className="flex justify-center gap-4 px-6 py-6 bg-white/50 backdrop-blur-xl">
          <a
            href="#projekte"
            className="px-6 py-2 rounded-full bg-white/60 border border-pink-600/20 text-pink-600 hover:bg-white/80 hover:shadow transition duration-300 ease-in-out">
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
