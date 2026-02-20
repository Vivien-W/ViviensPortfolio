import Kontakt from "../../assets/images/Kontakt.png";
import SlideInWhenVisible from "../../components/SlideInWhenVisible";

export const Contact = () => {
  return (
    <section
      id="kontakt"
      className="
        relative min-h-screen flex items-center justify-center 
        bg-gradient-to-b from-cyan-600 to-cyan-900
        px-4 md:px-8 py-20
      "
    >
      {/* Soft Water Light Overlay */}
      <div className="absolute top-0 left-0 w-full h-48 bg-white/10 blur-3xl opacity-60 pointer-events-none"></div>

      <SlideInWhenVisible delay={0}>
        <div
          className="
            relative max-w-[95vw] sm:max-w-3xl w-full
            p-8 sm:p-12 rounded-3xl
            bg-white/20 backdrop-blur-2xl
            shadow-[0_0_50px_-5px_rgba(0,200,255,0.35)]
            ring-1 ring-white/10 border border-white/10
            transition-all duration-300
            hover:shadow-[0_0_80px_-5px_rgba(0,200,255,0.5)]
            hover:-translate-y-1
          "
        >
          {/* Titel */}

          <img
            src={Kontakt}
            alt="Überschrift Kontakt"
            className="h-12 sm:h-14 mb-12 mx-auto"
          />

          {/* Haupt-CTA */}
          <p
            className="text-center text-pink-600 text-2xl sm:text-3xl font-semibold mb-6 
  bg-white/60 backdrop-blur-md border border-pink-300/30 
  py-3 px-4 rounded-2xl shadow-sm"
          >
            Ich suche ab <span className="text-pink-500"> sofort </span>
            eine neue Herausforderung.
          </p>

          <p className="text-center text-white/90 text-lg sm:text-xl mb-12 leading-relaxed">
            Webentwicklung&nbsp;|&nbsp;Fullstack&nbsp;|&nbsp;Digitale
            Anwendungen – in <strong>Hamburg</strong> oder Remote.
          </p>

          {/* Textabschnitt */}
          <div className="text-white/90 text-sm sm:text-base leading-relaxed space-y-4 mb-10">
            <p>
              Mit einem{" "}
              <span className="font-semibold text-white">
                M.A. in Informationsmanagement
              </span>{" "}
              verbinde ich analytisches Denken mit praktischer Erfahrung in der
              Entwicklung datenbankgestützter Webanwendungen. In meinen
              Projekten liegt der Schwerpunkt auf der strukturierten Umsetzung
              fachlicher Anforderungen – von klar modellierten Datenstrukturen
              und APIs bis hin zu nutzerfreundlichen, barrierearmen Oberflächen.
            </p>

            <p>
              Besonders wichtig ist mir, technische Lösungen nachvollziehbar
              aufzubauen und komplexe Zusammenhänge verständlich abzubilden.
              Dabei arbeite ich strukturiert, dokumentiere sauber und denke
              Systeme ganzheitlich – sowohl aus technischer als auch aus
              organisatorischer Perspektive.
            </p>

            <p
              className="text-center text-pink-600 text-md font-semibold mt-8 
   bg-white/70 backdrop-blur-md px-3 py-1 rounded-xl shadow-sm tracking-wide"
            >
              Haben Sie eine passende Position? Ich freue mich auf Ihre
              Nachricht!
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
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

            <a
              href="https://github.com/Vivien-W"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-full sm:w-auto px-8 py-3 rounded-full text-center
                bg-white/20 text-white border border-white/20
                hover:bg-white/30 transition-all duration-300
              "
            >
              GitHub ansehen
            </a>
          </div>
        </div>
      </SlideInWhenVisible>
    </section>
  );
};
