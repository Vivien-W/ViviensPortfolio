import UeberMich from "../../assets/images/UeberMich.png";
import Circle from "../../assets/images/Wasserblasen.png";
import Lernquellen from "../../assets/images/Lernquelle.svg";
import SlideInWhenVisible from "../../components/SlideInWhenVisible";
import { useState } from "react";
import WaterEffect from "../../components/WaterEffect";
import Profilbild from "../../assets/images/Profilbild.jpg";

export const About = () => {
  const frontendSkills = [
    "React",
    "HTML5",
    "CSS3",
    "TailwindCSS",
    "Javascript",
  ];
  const backendSkills = ["SQL", "Python", "Javascript", "PHP", "Flask"];
  const softwareSkills = [
    "MySQL Workbench",
    "Github",
    "VS Code",
    "Jira",
    "Confluence",
    "Slack",
  ];

  const softSkills = [
    "Selbstorganisation",
    "Analytisches Denken",
    "teamfähig",
    "kreativ",
    "lernbereit",
  ];

  const [showSources, setShowSources] = useState(false);

  return (
    <section
      id="about"
      aria-label="Über mich Bereich"
      className="min-h-screen flex items-center justify-center bg-white py-12 md:py-24 px-4 md:px-8"
    >
      <WaterEffect className="hidden sm:block" />

      <div className="max-w-[95vw] sm:max-w-4xl w-full mx-auto px-2 sm:px-10">
        <img
          src={UeberMich}
          alt="Überschrift: Über mich"
          className=" h-12 sm:h-14 mb-8 mx-auto"
        />

        {/* BOX 1: Vorstellung + Studium */}
        <SlideInWhenVisible delay={0}>
          <div
            className="max-w-[95vw] sm:max-w-4xl w-full p-6 sm:p-10 mt-12 mb-8 
            rounded-3xl bg-white/70 backdrop-blur-lg 
            border border-cyan-100 
            shadow-[0_10px_25px_rgba(0,255,255,0.15),0_4px_10px_rgba(0,255,255,0.10)] 
            hover:-translate-y-3 hover:scale-105 
            hover:shadow-[0_20px_40px_rgba(0,255,255,0.25),0_10px_20px_rgba(0,255,255,0.15)] 
            transition-transform duration-300 ease-out"
          >
            <div className="text-gray-700 leading-relaxed text-sm sm:text-base">
              {/* Grid für Bild + Text */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 items-center mb-12">
                {/* Bild */}
                <div className="flex justify-center">
                  <img
                    src={Profilbild}
                    alt="Vorstellung"
                    className="rounded-xl shadow-lg max-h-60 object-cover"
                  />
                </div>
                <p className="mt-4 mb-2">
                  Ich bin Vivien Wallbaum, angehende Softwareentwicklerin mit
                  einem Master in Informationsmanagement. Mein Fokus liegt auf
                  moderner{" "}
                  <span className="text-gray-600 font-semibold">
                    Webentwicklung mit React, TailwindCSS und JavaScript
                  </span>
                  . Besonders begeistern mich elegante UI/UX-Designs und
                  datengetriebene Anwendungen. Ich suche den Einstieg in ein
                  innovatives Entwicklerteam.
                </p>
              </div>

              <h2 className="text-2xl text-shadow sm:text-3xl font-semibold mb-4 text-center text-pink-600 font-dancing">
                Mein Studium:
              </h2>
              <div className="border-2 border-pink-500 rounded-xl p-4 sm:mx-24 mb-12">
                <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm sm:text-base">
                  <li>
                    <strong>M.S. in Information, Medien, Bibliothek</strong> –
                    HAW Hamburg (2017–2019)
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
                als ich meine erste datenbankgestützte Webanwendung mit HTML,
                CSS, JavaScript und MySQL entwickelte. Seit Anfang 2025 habe ich
                mein technisches Wissen aufgefrischt und gezielt vertieft –
                sowohl im Backend-Bereich als auch Frontend-Bereich mit Fokus
                auf moderne Webentwicklung mit React, TailwindCSS und
                JavaScript.
              </p>
              <p className="mb-6">
                Nach dem Studium war ich mehrere Jahre in einer leitenden
                Position im Kinobereich tätig. Nun, nach einer Elternzeit, habe
                ich mich bewusst für einen beruflichen Neustart entschieden: Ich
                möchte als Softwareentwicklerin einsteigen, meine Fähigkeiten
                weiter ausbauen und mich langfristig in einem professionellen
                Entwicklungsteam etablieren.
              </p>
            </div>
          </div>
        </SlideInWhenVisible>

        {/* BOX 2: Kenntnisse & Fähigkeiten */}
        <SlideInWhenVisible delay={200}>
          <div
            className="max-w-[95vw] sm:max-w-4xl w-full p-6 sm:p-10 mt-12 mb-8 
            rounded-3xl bg-white/70 backdrop-blur-lg 
            border border-cyan-100 
            shadow-[0_10px_25px_rgba(0,255,255,0.15),0_4px_10px_rgba(0,255,255,0.10)] 
            hover:-translate-y-3 hover:scale-105 
            hover:shadow-[0_20px_40px_rgba(0,255,255,0.25),0_10px_20px_rgba(0,255,255,0.15)] 
            transition-transform duration-300 ease-out"
          >
            <div className="text-gray-700 leading-relaxed text-sm sm:text-base">
              <h3 className="text-2xl sm:text-3xl text-shadow font-semibold text-center mb-6 text-pink-600 font-dancing">
                Kenntnisse und Fähigkeiten
              </h3>
              <p className="mb-12">
                Im Frontend bewege ich mich sicher von soliden Grundlagen bis
                hin zu routinierter Anwendung – vor allem im Zusammenspiel
                moderner Frameworks wie React und Styling mit TailwindCSS. Im
                Backend habe ich bereits erste Erfahrungen gesammelt und
                kleinere Projekte umgesetzt, stehe hier aber noch am Anfang
                meiner Lernkurve und erweitere kontinuierlich mein Wissen.
              </p>

              {/* Skill Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <SlideInWhenVisible delay={200}>
                  <div>
                    <h4 className="text-md font-semibold mb-4 text-gray-800 text-start sm:text-center">
                      Frontend
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {frontendSkills.map((skill, i) => (
                        <span
                          key={i}
                          className="bg-pink-100 text-pink-600 py-1 px-3 rounded-full text-sm hover:bg-pink-200 transition"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </SlideInWhenVisible>

                <SlideInWhenVisible delay={300}>
                  <div>
                    <h4 className="text-md font-semibold mb-4 text-gray-800 text-start sm:text-center">
                      Backend
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {backendSkills.map((skill, i) => (
                        <span
                          key={i}
                          className="bg-cyan-100 text-cyan-500 py-1 px-3 rounded-full text-sm hover:bg-cyan-200 transition"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </SlideInWhenVisible>

                <SlideInWhenVisible delay={400}>
                  <div className="md:col-span-2">
                    <h4 className="text-md font-semibold mb-4 text-gray-800 text-start sm:text-center">
                      Tools & Anwendungen
                    </h4>
                    <div className="flex flex-wrap gap-3 ">
                      {softwareSkills.map((skill, i) => (
                        <span
                          key={i}
                          className="bg-gray-100 text-gray-500 py-1 px-3 rounded-full text-sm hover:bg-gray-200 transition"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </SlideInWhenVisible>
                <SlideInWhenVisible delay={500}>
                  <div className="md:col-span-2">
                    <h4 className="text-md font-semibold mb-4 text-gray-800 text-start sm:text-center">
                      Softskills
                    </h4>
                    <div className="flex flex-wrap gap-3  ">
                      {softSkills.map((skill, i) => (
                        <span
                          key={i}
                          className="bg-purple-50 text-gray-600 py-1 px-3 rounded-full text-sm hover:bg-purple-100 transition"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </SlideInWhenVisible>
              </div>

              <p className="mb-6 mt-12">
                Neben meiner technischen Expertise bringe ich Erfahrung im
                Umgang mit Tools wie Jira, Confluence, Jupyter Notebook und MS
                Office mit – insbesondere in projektbasierter Zusammenarbeit und
                Dokumentation. Darüber hinaus zeichne ich mich in Projekten
                durch Teamwork, strukturierte Arbeitsweise und kreative
                Lösungsansätze aus. Meine Lernbereitschaft unterstützt mich
                dabei, mich zügig in neue Technologien einzuarbeiten und mein
                Know-how stetig zu erweitern.
              </p>

              {/* Lernquellen */}
              <div className="mt-12 mb-8">
                <img
                  src={Lernquellen}
                  alt="Lernquellen anzeigen"
                  onClick={() => setShowSources(!showSources)}
                  className="h-16 cursor-pointer mb-4 hover:scale-105 transition duration-200 mx-auto"
                />
                {showSources && (
                  <div
                    className="mt-6 bg-cyan-50 border border-gray-200 rounded-xl p-6 text-sm text-gray-800 shadow-inner space-y-6"
                    aria-label="Liste meiner Lernquellen und Kursempfehlungen"
                  >
                    <div>
                      <p className="font-semibold mb-4">
                        Folgende Quellen haben mir geholfen, meine Fähigkeiten
                        zu verbessern:
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
                          <em>Informatik für Dummies. Das Lehrbuch</em>.
                          Wiley-VCH GmbH.
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
                          <em>Python lernen: kurz & gut</em>. dpunkt.verlag
                          GmbH.
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
                          <em>Stile & Looks: Design-Ideen für Print und Web</em>
                          . Rheinwerk Verlag GmbH.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-1 ">
                        💻 Online-Ressourcen
                      </p>
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
                      <p className="font-semibold mb-1">
                        💻 FreeCodeCamp-Kurse
                      </p>
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
        </SlideInWhenVisible>

        {/* BOX 3: Zukunftspläne */}
        <SlideInWhenVisible delay={400}>
          <div
            className="max-w-[95vw] sm:max-w-4xl w-full p-6 sm:p-10 mt-12 mb-8 
            rounded-3xl bg-white/70 backdrop-blur-lg 
            border border-cyan-100 
            shadow-[0_10px_25px_rgba(0,255,255,0.15),0_4px_10px_rgba(0,255,255,0.10)] 
            hover:-translate-y-3 hover:scale-105 
            hover:shadow-[0_20px_40px_rgba(0,255,255,0.25),0_10px_20px_rgba(0,255,255,0.15)] 
            transition-transform duration-300 ease-out"
          >
            <div className="text-gray-700 leading-relaxed text-sm sm:text-base">
              <h3 className="text-2xl sm:text-3xl text-shadow font-semibold text-center mb-6 text-pink-600 font-dancing">
                Zukunftspläne
              </h3>
              <p>
                Ich bin von der{" "}
                <span className="font-semibold text-gray-600">
                  Webentwicklung
                </span>{" "}
                fasziniert und verfolge das Ziel, mich sowohl im Frontend als
                auch im Backend kontinuierlich weiterzuentwickeln. Besonders
                begeistert mich die{" "}
                <span className="font-semibold text-gray-600">
                  Frontend-Entwicklung mit React
                </span>{" "}
                und modernes Webdesign. Hier kann ich meine kreative Ader voll
                ausleben und mein Gespür für Ästhetik und User Experience
                gezielt einsetzen, um{" "}
                <em>intuitive und ansprechende Benutzeroberflächen</em> zu
                gestalten. Gleichzeitig fasziniert mich die{" "}
                <span className="font-semibold text-gray-600">
                  Backend-Entwicklung mit Python
                </span>
                . Insbesondere die Arbeit mit Datenbanken, APIs und
                serverseitiger Logik reizt mich, da ich hier meine analytischen
                Fähigkeiten einbringen kann, um{" "}
                <em>robuste und performante Anwendungen</em> zu entwickeln. Mein
                übergeordnetes Ziel ist es, meine Fähigkeiten in beiden
                Bereichen so zu vertiefen, dass ich als vielseitige
                Softwareentwicklerin in einem innovativen und kollaborativen
                Team zum Einsatz kommen kann. Ich freue mich darauf, an
                spannenden Projekten mitzuwirken, die sowohl technologisch
                herausfordernd sind als auch einen direkten{" "}
                <em>Mehrwert für Nutzer*innen</em> schaffen.
              </p>
              <img
                src={Circle}
                alt="Drei Wasserblasen, die Innovation, Kreativität und Performanz symbolisieren"
                className="h-32 sm:h-56 mx-auto my-6"
              />
            </div>
          </div>
        </SlideInWhenVisible>
      </div>
    </section>
  );
};
