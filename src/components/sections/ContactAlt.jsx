import Kontakt from '../../assets/images/Kontakt.png';
import Butterfische from '../../assets/images/Butterfische.png';
import SlideInWhenVisible from '../../components/SlideInWhenVisible';


export const Contact = () => {
  return (
    <section
      id="kontakt"
      className="min-h-screen flex items-center justify-center py-20 bg-white scroll-mt-24"
    > 
      <SlideInWhenVisible delay={0}>
      <img src={Kontakt} alt="Überschrift Kontakt" className="h-14 mx-auto mb-8" />
      <div
        className="backdrop-blur-md bg-white/80 border border-cyan-100 rounded-2xl 
                   hover:border-cyan-300 p-6 shadow-2xl hover:-translate-y-1 transition-transform"
      >
        
        <div className="px-4 w-full min-w-[300px] md:w-[600px] sm:w-2/3 p-2 text-center">
        
        <img src={Butterfische} alt="Slogan" className="h-58 mx-auto" />
        
          <div className="mb-12 mt-4 text-gray-700 leading-relaxed text-left">
            <div className="bg-pink-100">
             <p className="mb-4">
              Ab <strong>Herbst 2026</strong> suche ich eine neue Herausforderung als (Junior){" "}
              <strong>Frontend-Entwicklerin</strong> oder in einer vergleichbaren Rolle in <strong>Hamburg</strong>.
            </p>
             </div>
            
            <p className="mb-4">
               Mit meinem
               M.S. in Informationsmanagement bringe ich eine analytische Denkweise
              und ein tiefes Verständnis für <span class="text-gray-600 font-semibold">Usability und User Experience</span> mit. Auch mit{" "}
              <span class="text-gray-600 font-semibold">Barrierefreiheit</span> von Webseiten (Stichwort: ARIA) habe ich mich intensiv befasst.
            </p>
            <p className="mb-4">
              Meine Leidenschaft für die Softwareentwicklung lebe ich in Projekten mit <span class="text-gray-600 font-semibold">React, TailwindCSS und Javascript</span> aus, wobei ich stets Wert auf
               saubere Code-Struktur und Wiederverwendbarkeit lege.
            </p>
            <p className="mb-4">
              Ich bin hochmotiviert, meine Fähigkeiten in einem professionellen Team weiter auszubauen
              und mich langfristig in der Webentwicklung zu etablieren – ich bin neugierig und lernbereit
              für vielseitige Aufgaben.
            </p>
            <p className="font-bold text-md text-pink-600 font-dancing text-xl mt-8">
              Haben Sie eine passende Position? Ich freue mich darauf, mehr zu erfahren!
            </p>
            
          </div>

          <div className="flex justify-center gap-4 px-6 py-6 bg-white/50 backdrop-blur-xl">
            <button
              onClick={() =>
                window.location.href =
                  "mailto:vivienwbaum@gmail.com?subject=Bewerbung%20als%20Junior%20Frontend-Entwicklerin&body=Sehr%20geehrte/r%20Frau/Herr%20[Name],"
              }
              className="px-6 py-2 rounded-full bg-white/40 border border-cyan-600/20 text-cyan-600 hover:bg-white/60 hover:text-cyan-700 hover:shadow-sm transition duration-300 ease-in-out"
            >
              E-Mail-Kontakt
            </button>

            <a
              href="https://github.com/Vivien-W"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full bg-white/60 border border-pink-600/20 text-pink-600 hover:bg-white/80 hover:shadow transition duration-300 ease-in-out"
            >
              Mein GitHub Profil 
            </a>
          </div>
        </div>
       </div>
      </SlideInWhenVisible>
    </section>
  );
};
