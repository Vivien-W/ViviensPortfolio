import Kontakt from '../../assets/images/Kontakt.png';
import SlideInWhenVisible from '../../components/SlideInWhenVisible';


export const Contact = () => {
  return (
    <section
      id="kontakt"
      className="min-h-screen flex items-center justify-center py-20 bg-white"
    >
      <SlideInWhenVisible delay={0}>
      <div
        className="backdrop-blur-md bg-white/80 border border-pink-100 shadow-xl rounded-2xl 
                   transition-all p-6 hover:shadow-2xl hover:border-pink-300"
      >
        <div className="px-4 w-full min-w-[300px] md:w-[600px] sm:w-2/3 p-2 text-center">
        <img src={Kontakt} alt="Überschrift Kontakt" className="h-14 mb-8 mx-auto" />

          <h2 className="text-3xl font-bold mb-6 mt-4 bg-gradient-to-r from-pink-600 to-cyan-400 bg-clip-text text-transparent">
            Jetzt mal Butter bei die Fische...
          </h2>

          <div className="mb-10 text-gray-700 leading-relaxed text-left">
            <p className="mb-4">
              Ab <strong>Herbst 2026</strong> suche ich eine neue Herausforderung als (Junior){" "}
              <strong>Frontend-Entwicklerin</strong> oder in einer vergleichbaren Rolle in <strong>Hamburg</strong>. Mit meinem
               M.S. in Informationsmanagement bringe ich eine analytische Denkweise
              und ein tiefes Verständnis für <strong>Usability und User Experience</strong> mit. Auch mit{" "}
              <strong>Barrierefreiheit</strong> von Webseiten (Stichwort: ARIA) habe ich mich intensiv befasst.
            </p>
            <p className="mb-4">
              Meine Leidenschaft für die Softwareentwicklung lebe ich in Projekten mit <strong> React, TailwindCSS und Javascript</strong> aus, wobei ich stets Wert auf
               saubere Code-Struktur und Wiederverwendbarkeit lege.
            </p>
            <p className="mb-4">
              Ich bin hochmotiviert, meine Fähigkeiten in einem professionellen Team weiter auszubauen
              und mich langfristig in der Webentwicklung zu etablieren – ich bin neugierig und lernbereit
              für vielseitige Aufgaben.
            </p>
            <p className="font-semibold text-lg text-pink-600">
              Haben Sie eine passende Position? Ich freue mich darauf, mehr zu erfahren!
            </p>
          </div>

          <div className="space-y-6">
            <button
              onClick={() =>
                window.location.href =
                  "mailto:vivienwbaum@gmail.com?subject=Bewerbung%20als%20Junior%20Frontend-Entwicklerin&body=Sehr%20geehrte/r%20Frau/Herr%20[Name],"
              }
              className="w-full bg-cyan-400 text-white py-3 px-6 rounded-lg font-medium transition hover:bg-cyan-500 hover:shadow-md hover:-translate-y-0.5"
            >
              E-Mail-Kontakt
            </button>

            <a
              href="https://github.com/Vivien-W"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-pink-600 text-white py-3 px-6 rounded-lg font-medium transition hover:bg-pink-700 hover:shadow-md hover:-translate-y-0.5"
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
