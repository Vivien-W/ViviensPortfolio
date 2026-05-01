import UeberMich from "../../assets/images/UeberMich.png";
import Rochen from "../../assets/images/Rochen.png";
import SlideInWhenVisible from "../../components/SlideInWhenVisible";
import { useState } from "react";
import Profilbild from "../../assets/images/Profilbild.jpg";

export const About = () => {
  const frontendSkills = [
    "React",
    "TypeScript",
    "JavaScript (ES6+)",
    "UI/UX (Basics)",
    "HTML5 & CSS3",
    "Accessibility (ARIA)",
    "Responsive Design",
  ];
  const backendSkills = [
    "Node.js",
    "Express.js",
    "PostgreSQL / SQL",
    "REST APIs",
    "Datenstrukturen",
  ];
  const softwareSkills = [
    "GitHub",
    "VS Code",
    "Jira & Confluence",
    "Figma (UI/UX)",
    "MySQL Workbench",
  ];

  const softSkills = [
    "Strukturierte Arbeitsweise",
    "Serviceorientierung",
    "Schnittstellenkompetenz",
    "Kommunikationsstärke",
    "Hohe Eigeninitiative",
    "Strukturierte Denkweise",
  ];

  const [showSources, setShowSources] = useState(false);

  return (
    <section
      id="about"
      aria-label="Über mich Bereich"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-cyan-50 to-cyan-400
  py-12 md:py-24 px-4 md:px-8"
    >
      <div className="max-w-5xl w-full mx-auto px-2 sm:px-10 z-10">
        <img
          src={UeberMich}
          alt="Überschrift: Über mich"
          className=" h-12 sm:h-14 mb-8 mx-auto"
        />

        {/* BOX 1: Vorstellung + Studium */}

        <div className="px-4 sm:px-8">
          <div className="text-gray-700 leading-relaxed text-sm sm:text-base">
            {/* Bild + Text */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center mb-20">
              {/* Bild */}
              <div className="flex justify-center">
                <img
                  src={Profilbild}
                  alt="Profilbild von Vivien"
                  className="rounded-2xl shadow-[0_0_20px_rgba(255,192,203,0.25)] max-h-72 object-cover"
                />
              </div>

              {/* Text */}
              <p className="text-gray-600">
                Moin, ich bin{" "}
                <span className="font-semibold">Vivien Wallbaum</span>,
                Absolventin im Bereich Informationsmanagement mit Schwerpunkt IT
                und Usability. Ich verbinde organisatorische Erfahrung aus dem
                Kulturbereich mit einem fundierten Verständnis für digitale
                Systeme. Dabei liegt mein Fokus darauf, Anforderungen klar zu
                strukturieren, verständlich aufzubereiten und in praktikable
                Lösungen zu überführen – sowohl im organisatorischen als auch im
                digitalen Kontext.{" "}
              </p>
            </div>

            <h2 className="text-4xl text-shadow sm:text-5xl mt-18 mb-8 text-center text-pink-600 font-dancing tracking-tight">
              Mein Studium:
            </h2>
            <div className="border-2 border-pink-500 rounded-xl p-4 sm:mx-24 mb-16">
              <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm sm:text-base">
                <li>
                  <strong>M.S. in Information, Medien, Bibliothek</strong> – HAW
                  Hamburg (2017–2019)
                </li>
                <li>
                  <strong>
                    B.S. in Bibliotheks- und Informationsmanagement
                  </strong>{" "}
                  – HAW Hamburg (2013–2017)
                </li>
                <li>
                  Fokus: IT-Grundlagen, Datenbanktechnologie, Usability & UX,
                  Informationssysteme und Projektarbeit
                </li>
              </ul>
            </div>

            <p className="mb-6">
              Nach meinem Studium war ich mehrere Jahre im Kulturbereich tätig
              und habe dort Abläufe organisiert, strukturiert und
              weiterentwickelt. In dieser Zeit wurde mir zunehmend bewusst, wie
              wichtig gut funktionierende digitale Systeme für effiziente
              Prozesse sind. Daher habe ich meine technischen Kenntnisse gezielt
              ausgebaut und mich intensiv mit Webentwicklung und
              datenbankgestützten Anwendungen beschäftigt. Heute verbinde ich
              meine Erfahrung aus der Praxis mit technischem Verständnis und
              kann Anforderungen strukturiert erfassen, verständlich aufbereiten
              und sowohl aus fachlicher als auch aus technischer Perspektive
              betrachten.
            </p>
          </div>
        </div>

        {/* BOX 2: Kenntnisse & Fähigkeiten */}

        <div className="px-4 sm:px-8">
          <div className="text-gray-700 leading-relaxed text-sm sm:text-base">
            <h3 className="text-4xl sm:text-5xl text-shadow  text-center mt-18 mb-12 text-pink-600 font-dancing">
              Was ich mitbringe:
            </h3>
            <p className="mb-8">
              Ich bringe eine{" "}
              <span className="bg-pink-100/60 px-1 rounded">
                strukturierte und zuverlässige Arbeitsweise
              </span>{" "}
              mit, die ich sowohl in organisatorischen als auch in digitalen
              Kontexten einsetzen konnte. Durch meine{" "}
              <span className="bg-pink-100/60 px-1 rounded">
                Erfahrung in Koordination, Projektunterstützung und
                administrativen Abläufen
              </span>{" "}
              arbeite ich mich schnell in neue Strukturen und Systeme ein und
              behalte auch in komplexeren Prozessen den Überblick.
            </p>
            <p className="mb-8">
              Ich habe ein{" "}
              <span className="bg-pink-100/60 px-1 rounded">
                gutes Verständnis für digitale Anwendungen
              </span>{" "}
              und dafür, wie Informationen, Daten und Prozesse zusammenwirken.
              Dabei ist mir wichtig, fachliche Anforderungen nachvollziehbar zu
              erfassen und in klar strukturierte, praktikable Lösungen zu
              überführen.
            </p>
            <p className="mb-20">
              Besonders achte ich auf{" "}
              <span className="bg-pink-100/60 px-1 rounded">
                Verständlichkeit, Nutzerfreundlichkeit und barrierearme
                Gestaltung.
              </span>{" "}
              Diese Aspekte fließen für mich selbstverständlich sowohl in
              organisatorische Abläufe als auch in digitale Anwendungen ein.
            </p>

            {/* Skill Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Frontend */}
              <SlideInWhenVisible delay={200}>
                <div>
                  <h4 className="text-md font-semibold mb-4 text-gray-800 text-start sm:text-center">
                    Digitale Anwendungen
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {frontendSkills.map((skill, i) => (
                      <span
                        key={i}
                        className="
              px-3 py-1 rounded-full text-sm
              bg-cyan-50/40
              text-cyan-800
              border border-cyan-200/40
              backdrop-blur-sm
              shadow-sm
              hover:bg-cyan-50/60
              transition-all
            "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </SlideInWhenVisible>

              {/* Backend */}
              <SlideInWhenVisible delay={300}>
                <div>
                  <h4 className="text-md font-semibold mb-4 text-gray-800 text-start sm:text-center">
                    Daten & Systemlogik
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {backendSkills.map((skill, i) => (
                      <span
                        key={i}
                        className="
              px-3 py-1 rounded-full text-sm
              bg-teal-50/40
              text-teal-800
              border border-teal-200/40
              backdrop-blur-sm
              shadow-sm
              hover:bg-teal-50/60
              transition-all
            "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </SlideInWhenVisible>

              {/* Tools & Anwendungen */}
              <SlideInWhenVisible delay={400}>
                <div className="md:col-span-2">
                  <h4 className="text-md font-semibold mb-4 text-gray-800 text-start sm:text-center">
                    Tools & Zusammenarbeit
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {softwareSkills.map((skill, i) => (
                      <span
                        key={i}
                        className="
              px-3 py-1 rounded-full text-sm
              bg-white/40
              text-gray-700
              border border-white/30
              backdrop-blur-sm
              shadow-sm
              hover:bg-white/60
              transition-all
            "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </SlideInWhenVisible>

              {/* Softskills */}
              <SlideInWhenVisible delay={500}>
                <div className="md:col-span-2">
                  <h4 className="text-md font-semibold mb-4 text-gray-800 text-start sm:text-center">
                    Softskills
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {softSkills.map((skill, i) => (
                      <span
                        key={i}
                        className="
              px-3 py-1 rounded-full text-sm
              bg-rose-50/40
              text-rose-800
              border border-rose-200/40
              backdrop-blur-sm
              shadow-sm
              hover:bg-rose-50/60
              transition-all
            "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </SlideInWhenVisible>
            </div>

            <p className="mt-20">
              Ich arbeite mich schnell in neue Technologien und Systeme ein und
              entwickle mein Wissen kontinuierlich weiter. Im Rahmen einzelner
              Projekte habe ich zudem erste Erfahrungen mit Python und Flask
              sowie mit Datenvisualisierung (Recharts) gesammelt.
            </p>

            {/* Lernquellen */}
            <div className="mt-12 mb-8">
              <button
                onClick={() => setShowSources(!showSources)}
                className="mx-auto mb-6 cursor-pointer text-sm sm:text-md font-semibold text-cyan-700 
             hover:text-cyan-900 transition duration-200 underline underline-offset-4"
              >
                Lernquellen anzeigen
              </button>
              {showSources && (
                <div
                  className="mt-6 backdrop-blur-lg bg-white/50 border border-cyan-200 rounded-3xl p-6 text-sm text-gray-800 shadow-inner space-y-6"
                  aria-label="Liste meiner Lernquellen und Kursempfehlungen"
                >
                  <div>
                    <p className="font-semibold mb-4">
                      Folgende Quellen haben mir geholfen, meine Fähigkeiten zu
                      verbessern:
                    </p>
                    <p className="font-semibold mb-1">
                      📚 Empfehlenswerte Bücher & E-Books
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        Kersken, Sascha (2023):{" "}
                        <em>IT-Handbuch für Fachinformatiker*innen</em>.
                        Rheinwerk Verlag GmbH.
                      </li>
                      <li>
                        Haffner, Ernst-Georg (2024):{" "}
                        <em>Informatik für Dummies. Das Lehrbuch</em>. Wiley-VCH
                        GmbH.
                      </li>
                      <li>
                        Maurice, Florence (2023):{" "}
                        <em>HTML & CSS für Dummies</em>. Wiley-VCH GmbH.
                      </li>
                      <li>
                        Lederer, Anke (2021):{" "}
                        <em>GitHub – Eine praktische Einführung</em>.
                        dpunkt.verlag GmbH.
                      </li>
                      <li>
                        Inden, Michael (2023):{" "}
                        <em>Python lernen: kurz & gut</em>. dpunkt.verlag GmbH.
                      </li>
                      <li>
                        Zhao, Alice (2022): <em>SQL lernen: kurz & gut</em>.
                        dpunkt.verlag GmbH.
                      </li>
                      <li>
                        Lampe, Jürgen (2020): <em>Clean Code für Dummies</em>.
                        WILEY-VCH Verlag GmbH.
                      </li>
                      <li>
                        Jacobsen, Jens / Meyer, Lorena (2024):{" "}
                        <em>Praxisbuch Usability und UX</em>. Rheinwerk Verlag
                        GmbH.
                      </li>
                      <li>
                        Springer, Sebastian (2023):{" "}
                        <em>React: Das umfassende Handbuch</em>. Rheinwerk
                        Verlag GmbH.
                      </li>
                      <li>
                        Korthaus, Claudia (2018):{" "}
                        <em>Das Design-Buch für Nicht-Designer</em>. Rheinwerk
                        Verlag GmbH.
                      </li>
                      <li>
                        Wegener, Gudrun (2020):{" "}
                        <em>Stile & Looks: Design-Ideen für Print und Web</em>.
                        Rheinwerk Verlag GmbH.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1 ">💻 Online-Ressourcen</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        <a
                          href="https://tailwindcss.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-gray-400"
                        >
                          TailwindCSS-Dokumentation
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://threejs.org/docs/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-gray-400"
                        >
                          ThreeJS-Dokumentation
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://react.dev/learn"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-gray-400"
                        >
                          React-Website: Learn React
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://vuejs.org"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-gray-400"
                        >
                          Vue.js-Website: The progressive Javascript Framework
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.w3schools.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-gray-400"
                        >
                          W3Schools
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://home.edx.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-gray-400"
                        >
                          MOOC HarvardX CS50
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.a11yproject.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-gray-400"
                        >
                          A11YProject - Leitfaden für Accessibility
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.w3.org/WAI/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-gray-400"
                        >
                          Web Accessibility Initiative WAI
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://vitest.dev/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-gray-400"
                        >
                          Vite Testing Framework Guide
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">💻 FreeCodeCamp-Kurse</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Responsive Web Design</li>
                      <li>JavaScript Algorithms and Data Structures</li>
                      <li>Front End Development Libraries</li>
                      <li>Scientific Computing with Python</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">▶ YouTube-Kanäle</p>
                    <ul className="list-none ml-4 space-y-1">
                      <li>@GreatStack</li>
                      <li>@Programmierenlernen</li>
                      <li>@Pedro Tech</li>
                      <li>@Tech with Tim</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="relative group flex flex-col items-center">
          {/* ROCHEN */}
          <img
            src={Rochen}
            alt="Illustration eines Rochens"
            className="h-52 sm:h-64 w-auto z-10 
               group-hover:animate-[bubble-once_9s_ease-out_forwards]
"
          />
        </div>

        {/* BOX 3: Zukunftspläne */}

        <div className="p-8">
          <div className="text-gray-700 leading-relaxed text-sm sm:text-base">
            <h3 className="text-5xl sm:text-6xl text-shadow text-center mt-18 mb-12 text-pink-600 font-dancing">
              Zukunftspläne
            </h3>

            <p className="mb-6">
              Ich möchte meine organisatorischen Fähigkeiten und mein digitales
              Verständnis in einem Umfeld einbringen, in dem strukturierte
              Prozesse, Kommunikation und digitale Anwendungen zusammenkommen –
              beispielsweise im Hochschul- oder Verwaltungskontext. Dabei
              interessiert mich insbesondere die Schnittstelle zwischen
              fachlichen Anforderungen, organisatorischen Abläufen und digitalen
              Lösungen.
            </p>

            <p className="mb-6">
              Aktuell suche ich eine qualifizierte Teilzeitposition ( 20 - 30
              Wochenstunden), in der ich meine Kenntnisse einbringen und
              weiterentwickeln kann.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
