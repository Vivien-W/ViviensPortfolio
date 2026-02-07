import UeberMich from "../../assets/images/UeberMich.png";
import Circle from "../../assets/images/Jellyfish.png";
import SlideInWhenVisible from "../../components/SlideInWhenVisible";
import { useState } from "react";
import Profilbild from "../../assets/images/Profilbild.jpg";

export const About = () => {
  const frontendSkills = [
    "React",
    "TypeScript",
    "JavaScript (ES6+)",
    "TailwindCSS",
    "Recharts (Data Viz)",
    "HTML5 & CSS3",
    "Accessibility (ARIA)",
    "Responsive Design",
  ];
  const backendSkills = [
    "Node.js",
    "Express.js",
    "PostgreSQL / SQL",
    "REST APIs",
    "Python",
    "Jest / Vitest",
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
    "Kreative Problemlösung",
    "Erfahrung in agiler Zusammenarbeit",
    "Kommunikationsstärke",
    "Hohe Eigeninitiative",
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
                Hi, ich bin{" "}
                <span className="font-semibold">Vivien Wallbaum</span>,
                angehende Softwareentwicklerin mit einem Master in
                Informationsmanagement. Mein Fokus liegt auf moderner{" "}
                <span className="font-semibold text-gray-700">
                  Webentwicklung mit React und TailwindCSS
                </span>
                . Ich liebe klare UI/UX, strukturiertes Arbeiten und
                datengetriebene Anwendungen. Aktuell vertiefe ich meine
                Kenntnisse in der{" "}
                <span className="font-semibold text-gray-700">
                  Fullstack-Entwicklung (PERN)
                </span>
                und suche den Einstieg in ein innovatives Entwicklerteam.
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
                  Fokus: IT-Grundlagen, Datenbanktechnologie, Usability & UX
                </li>
              </ul>
            </div>

            <p className="mb-6">
              Meine Begeisterung fürs Programmieren begann bereits im Studium,
              als ich meine erste datenbankgestützte Webanwendung mit HTML, CSS,
              JavaScript und MySQL entwickelte. Seit Anfang 2025 habe ich mein
              technisches Wissen aufgefrischt und gezielt vertieft – sowohl im
              Backend-Bereich als auch Frontend-Bereich mit Fokus auf moderne
              Webentwicklung mit React, TailwindCSS und JavaScript. Heute
              entwickle ich Fullstack-Lösungen im{" "}
              <span className="font-semibold text-gray-700">
                PERN-Stack (PostgreSQL, Express, React, Node.js)
              </span>
              . Dabei lege ich großen Wert auf sauberen, mit TypeScript
              typisierten Code und die Absicherung durch Unit-Tests
              (Jest/Vitest).
            </p>
            <p className="mb-20">
              Nach dem Studium war ich mehrere Jahre in einer leitenden Position
              im Kinobereich tätig. Nun, nach einer Elternzeit, habe ich mich
              bewusst für einen beruflichen Neustart entschieden: Ich möchte als
              Softwareentwicklerin einsteigen, meine Fähigkeiten weiter ausbauen
              und mich langfristig in einem professionellen Entwicklungsteam
              etablieren.
            </p>
          </div>
        </div>

        {/* BOX 2: Kenntnisse & Fähigkeiten */}

        <div className="px-4 sm:px-8">
          <div className="text-gray-700 leading-relaxed">
            <h3 className="text-4xl sm:text-5xl text-shadow  text-center mt-18 mb-12 text-pink-600 font-dancing">
              Was ich mitbringe:
            </h3>
            <p className="mb-20">
              Im Frontend sorge ich mit{" "}
              <span className="font-semibold text-gray-700">
                React und TailwindCSS
              </span>{" "}
              für performante, responsive UIs, wobei{" "}
              <span className="font-semibold text-gray-700">
                Barrierefreiheit (ARIA)
              </span>{" "}
              für mich kein Extra, sondern Standard ist. Im Backend konzipiere
              ich effiziente APIs und Datenstrukturen. Durch meine frühere
              Leitungstätigkeit bringe ich zudem eine{" "}
              <span className="font-semibold text-gray-700">
                {" "}
                strukturierte Arbeitsweise, Teamgeist und Erfahrung mit Tools
                wie Jira und Confluence
              </span>{" "}
              mit – Soft Skills, die besonders in agilen Entwicklungsteams den
              Unterschied machen.{" "}
            </p>

            {/* Skill Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Frontend */}
              <SlideInWhenVisible delay={200}>
                <div>
                  <h4 className="text-md font-semibold mb-4 text-gray-800 text-start sm:text-center">
                    Frontend & Design
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
                    Backend & Testing
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
                    Tools & Workflow
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
              Neben meiner technischen Expertise bringe ich Erfahrung im Umgang
              mit Tools wie{" "}
              <span className="font-semibold text-gray-700">
                Jira, Confluence, Jupyter Notebook und MS Office{" "}
              </span>{" "}
              mit – insbesondere in projektbasierter Zusammenarbeit und
              Dokumentation. Darüber hinaus zeichne ich mich in Projekten durch
              Teamwork, strukturierte Arbeitsweise und kreative Lösungsansätze
              aus. Meine Lernbereitschaft unterstützt mich dabei, mich zügig in
              neue Technologien einzuarbeiten und mein Know-how stetig zu
              erweitern.
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

        {/* Quallenbild*/}
        <img
          src={Circle}
          alt="Drei Quallen, die Intuition, Modernität und Performanz symbolisieren"
          className="block h-40 sm:h-64 mx-auto mt-8"
        />

        {/* BOX 3: Zukunftspläne */}

        <div className="p-8">
          <div className="text-gray-700 leading-relaxed text-sm sm:text-base">
            <h3 className="text-5xl sm:text-6xl text-shadow text-center mt-18 mb-12 text-pink-600 font-dancing">
              Zukunftspläne
            </h3>
            <p>
              Mein Schwerpunkt liegt in der{" "}
              <span className="font-semibold text-gray-600">
                modernen Webentwicklung
              </span>{" "}
              – mit Fokus auf das{" "}
              <span className="font-semibold text-gray-600">Frontend</span> und
              einer langfristigen Perspektive in Richtung{" "}
              <span className="font-semibold text-gray-600">
                Fullstack-Entwicklung
              </span>
              . Besonders begeistert mich die Arbeit mit dem{" "}
              <span className="font-semibold text-gray-600">PERN-Stack</span>{" "}
              (PostgreSQL, Express, React, Node.js), da ich hier sowohl mein
              technisches Verständnis als auch meine kreative Seite einbringen
              kann.
            </p>

            <p className="mb-4">
              Aktuell vertiefe ich mein Wissen in den Bereichen{" "}
              <span className="font-semibold text-gray-700">
                API-Architektur und Performance-Optimierung
              </span>
              . Mein Ziel ist es, mich als vielseitige Entwicklerin in einem
              Team einzubringen, das Wert auf Qualität und nutzerzentrierte
              Lösungen legt.
            </p>

            <p className="font-medium text-gray-700 italic">
              Ich suche eine Position in Teilzeit (20–30 Std./Woche), in der ich
              meine analytischen Fähigkeiten und meine Begeisterung für modernen
              Code einsetzen kann.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
