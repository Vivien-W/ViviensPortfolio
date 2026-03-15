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
          <img
            src={Kontakt}
            alt="Überschrift Kontakt"
            className="h-12 sm:h-14 mb-12 mx-auto"
          />

          <p
            className="text-center text-pink-600 text-2xl sm:text-2xl font-semibold mb-6 
  bg-white/60 backdrop-blur-md border border-pink-300/30 
  py-3 px-4 rounded-2xl shadow-sm"
          >
            Ich suche eine neue Herausforderung!
          </p>

          <p className="text-center text-white/90 text-lg sm:text-xl mb-12 leading-relaxed">
            Digitalisierung&nbsp;|&nbsp;Product
            Owner&nbsp;|&nbsp;IT-Projektarbeit – in <strong>Hamburg</strong>{" "}
            oder Remote.
          </p>

          {/* Textabschnitt */}
          <div className="text-white/90 text-sm sm:text-base leading-relaxed space-y-6 mb-10">
            <p>
              Ab{" "}
              <span className="font-semibold text-white text-lg">
                Sommer 2026
              </span>{" "}
              suche ich eine neue Herausforderung an der Schnittstelle von
              Technologie und Strategie. Ob in Hamburg oder Remote – mein Fokus
              liegt auf der zukunftsorientierten Gestaltung digitaler
              Landschaften.
            </p>

            <div className="space-y-3">
              <p className="font-semibold text-gray-100 border-b border-white/10 pb-1">
                Warum ich?
              </p>
              <ul className="space-y-2 list-none">
                <li className="flex gap-2">
                  <span className="text-pink-100">•</span>
                  <span>
                    <strong className="text-white">
                      Analyse & Konzeption:
                    </strong>{" "}
                    Ich übersetze komplexe fachliche Anforderungen in klare,
                    umsetzbare Konzepte.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-pink-100">•</span>
                  <span>
                    <strong className="text-white">Brückenbauerin:</strong> Dank
                    meiner Erfahrung in der Webentwicklung spreche ich die
                    Sprache der IT und verstehe die Bedürfnisse der
                    Fachbereiche.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-pink-100">•</span>
                  <span>
                    <strong className="text-white">Nutzerfokus:</strong> Mein
                    Ziel sind digitale Lösungen (z. B. in der Verwaltung), die
                    barrierearm, nachhaltig und intuitiv sind.
                  </span>
                </li>
              </ul>
            </div>

            <p>
              <span className="font-semibold text-white underline decoration-pink-500/50 underline-offset-4">
                Mein Ziel:
              </span>{" "}
              Ich suche eine Teilzeitposition (ca. 30h), in der ich als{" "}
              <strong>Product Owner</strong>, in der{" "}
              <strong>IT-Projektarbeit</strong> oder im Bereich{" "}
              <strong>Digitalisierung</strong> Verantwortung übernehmen kann.
              Besonders reizen mich Projekte, die moderne Verwaltungs- oder
              Fachverfahren auf das nächste Level heben.
            </p>

            <p
              className="text-center text-pink-700 text-md font-bold mt-12 
    bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg tracking-wide uppercase italic"
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
