import UeberMich from '../../assets/images/UeberMich.png';
import Circle from '../../assets/images/Circle.jpg';
import Lernquellen from '../../assets/images/Lernquelle.svg';
import SlideInWhenVisible from '../../components/SlideInWhenVisible';
import { useState } from 'react';
import WaterEffect from '../../components/WaterEffect'; 

export const About = () => {
  const frontendSkills = ["React", "HTML5", "CSS3", "TailwindCSS", "Javascript"];
  const backendSkills = ["SQL", "Python", "Javascript", "PHP", "Flask"];
  const softwareSkills = ["MySQL Workbench", "Github", "VS Code"];

  const [showSources, setShowSources] = useState(false);

  return (
    <section
      id="about" aria-label="Über mich Bereich"
      className="min-h-screen flex items-center justify-center bg-white py-12 md:py-24 px-4 md:px-8">
      <WaterEffect className="hidden sm:block" />

      <div className="max-w-[95vw] sm:max-w-4xl w-full mx-auto px-2 sm:px-10">
        <img src={UeberMich} alt="Überschrift: Über mich" className="h-14 mb-8 mx-auto" />

       

        {/* BOX 1: Vorstellung + Studium */}
        <SlideInWhenVisible delay={0}>
          <div className="max-w-[95vw] sm:max-w-4xl w-full backdrop-blur-md bg-white/80 border border-cyan-100 rounded-2xl hover:border-cyan-300 shadow-2xl hover:-translate-y-1 transition-transform p-6 sm:p-10 mb-8">
            <div className="text-gray-700 leading-relaxed text-sm sm:text-base">
              <p className="mb-6">
                Ich bin angehende Softwareentwicklerin mit einem Master in Informationsmanagement. Mein Fokus liegt auf moderner{" "}
                <span className="text-gray-600 font-semibold">
                  Webentwicklung mit React, TailwindCSS und JavaScript
                </span>
                . Besonders begeistern mich elegante UI/UX-Designs und datengetriebene Anwendungen. Ich suche den Einstieg in ein innovatives Entwicklerteam.
              </p>

              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center text-pink-600 font-dancing">Mein Studium:</h2>
              <div className="border-2 border-pink-500 rounded-xl p-4 sm:mx-24 mb-12">
                <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm sm:text-base">
                  <li><strong>M.S. in Information, Medien, Bibliothek</strong> – HAW Hamburg (2017–2019)</li>
                  <li><strong>B.S. in Bibliotheks- und Informationsmanagement</strong> – HAW Hamburg (2013–2017)</li>
                  <li>Fokus: IT-Grundlagen, Datenbanktechnologie, Usability & UX</li>
                </ul>
              </div>

              <p className="mb-6">
                Meine Begeisterung fürs Programmieren begann bereits im Studium, als ich meine erste datenbankgestützte Webanwendung mit HTML, CSS, JavaScript und MySQL entwickelte. Seit Anfang 2025 habe ich mein technisches Wissen aufgefrischt und gezielt vertieft – sowohl im Backend-Bereich als auch Frontend-Bereich mit Fokus auf moderne Webentwicklung mit React, TailwindCSS und JavaScript.
              </p>
              <p className="mb-6">
                Nach dem Studium war ich mehrere Jahre in einer leitenden Position im Kinobereich tätig. Nun, nach einer Elternzeit, habe ich mich bewusst für einen beruflichen Neustart entschieden: Ich möchte als Softwareentwicklerin einsteigen, meine Fähigkeiten weiter ausbauen und mich langfristig in einem professionellen Entwicklungsteam etablieren.
              </p>
            </div>
          </div>
        </SlideInWhenVisible>

        {/* BOX 2: Kenntnisse & Fähigkeiten */}
        <SlideInWhenVisible delay={200}>
          <div className="max-w-[95vw] sm:max-w-4xl w-full backdrop-blur-md bg-white/80 border border-cyan-100 rounded-2xl hover:border-cyan-300 shadow-2xl hover:-translate-y-1 transition-transform p-6 sm:p-10 mb-8">
            <div className="text-gray-700 leading-relaxed text-sm sm:text-base">
              <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-6 text-pink-600 font-dancing">Kenntnisse und Fähigkeiten</h3>
              <p className="mb-6">
                In den folgenden Bereichen verfüge ich über solide Grundkenntnisse bis hin zu routinierter Anwendung:
              </p>

              {/* Skill Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
                <SlideInWhenVisible delay={200}>
                  <div>
                    <h4 className="text-md font-semibold mb-4 text-gray-800">Frontend</h4>
                    <div className="flex flex-wrap gap-3">
                      {frontendSkills.map((skill, i) => (
                        <span key={i} className="bg-pink-100 text-pink-600 py-1 px-3 rounded-full text-sm hover:bg-pink-200 transition">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </SlideInWhenVisible>

                <SlideInWhenVisible delay={300}>
                  <div>
                    <h4 className="text-md font-semibold mb-4 text-gray-800">Backend</h4>
                    <div className="flex flex-wrap gap-3">
                      {backendSkills.map((skill, i) => (
                        <span key={i} className="bg-cyan-100 text-cyan-500 py-1 px-3 rounded-full text-sm hover:bg-cyan-200 transition">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </SlideInWhenVisible>

                <SlideInWhenVisible delay={400}>
                  <div className="md:col-span-2">
                    <h4 className="text-md font-semibold mb-4 text-gray-800 text-start sm:text-center">Tools & Anwendungen</h4>
                    <div className="flex flex-wrap gap-3 justify-start sm:justify-center mb-6">
                      {softwareSkills.map((skill, i) => (
                        <span key={i} className="bg-gray-100 text-gray-500 py-1 px-3 rounded-full text-sm hover:bg-gray-200 transition">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </SlideInWhenVisible>
              </div>

              <p className="mb-6">
                Zusätzlich bringe ich Erfahrung im Umgang mit Tools wie Jira, Confluence, Jupyter Notebook, MS Office sowie Photoshop und GIMP mit – insbesondere im Rahmen projektbasierter Zusammenarbeit, Dokumentation und visuellem Prototyping. Ich arbeite gerne mit modernen Tools und Technologien und erweitere mein Know-how durch kontinuierliches Lernen und praktische Anwendung.
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
                  <div className="mt-6 bg-cyan-50 border border-gray-200 rounded-xl p-6 text-sm text-gray-800 shadow-inner space-y-6"
                       aria-label="Liste meiner Lernquellen und Kursempfehlungen">
                    <div>
                      <p className="font-semibold mb-1">📚 Empfehlenswerte Bücher & E-Books</p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Korthaus, Claudia (2018): <em>Das Design-Buch für Nicht-Designer</em>. Rheinwerk Verlag GmbH.</li>
                        <li>Wegener, Gudrun (2020): <em>Stile & Looks: Design-Ideen für Print und Web</em>. Rheinwerk Verlag GmbH.</li>
                        <li>Semler, Jan / Tschierschke, Kira (2019): <em>App-Design: Das umfassende Handbuch</em>. Rheinwerk Verlag GmbH.</li>
                        <li>Jacobsen, Jens / Meyer, Lorena (2024): <em>Praxisbuch Usability und UX</em>. Rheinwerk Verlag GmbH.</li>
                        <li>Maurice, Florence (2023): <em>HTML & CSS für Dummies</em>. Wiley-VCH GmbH.</li>
                        <li>Lederer, Anke (2021): <em>GitHub – Eine praktische Einführung</em>. dpunkt.verlag GmbH.</li>
                        <li>Inden, Michael (2023): <em>Python lernen: kurz & gut</em>. dpunkt.verlag GmbH.</li>
                        <li>Zhao, Alice (2022): <em>SQL lernen: kurz & gut</em>. dpunkt.verlag GmbH.</li>
                        <li>Lampe, Jürgen (2020): <em>Clean Code für Dummies</em>. WILEY-VCH Verlag GmbH.</li>
                        <li>Springer, Sebastian (2023): <em>React: Das umfassende Handbuch</em>. Rheinwerk Verlag GmbH.</li>
                        <li>Kersken, Sascha (2023): <em>IT-Handbuch für Fachinformatiker*innen</em>. Rheinwerk Verlag GmbH.</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">💻 Online-Ressourcen</p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li><a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">TailwindCSS-Dokumentation</a></li>
                        <li><a href="https://www.w3schools.com" target="_blank" rel="noopener noreferrer">W3Schools</a></li>
                        <li><a href="https://home.edx.org/" target="_blank" rel="noopener noreferrer">MOOC HarvardX CS50</a></li>
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
        </SlideInWhenVisible>

        {/* BOX 3: Zukunftspläne */}
        <SlideInWhenVisible delay={400}>
          <div className="max-w-[95vw] sm:max-w-4xl w-full backdrop-blur-md bg-white/80 border border-cyan-100 rounded-2xl hover:border-cyan-300 shadow-2xl hover:-translate-y-1 transition-transform p-6 sm:p-10">
            <div className="text-gray-700 leading-relaxed text-sm sm:text-base">
              <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-6 text-pink-600 font-dancing">Zukunftspläne</h3>
              <p>
                Ich bin von der <span className="font-semibold text-gray-600">Webentwicklung</span> fasziniert und verfolge das Ziel, mich sowohl im Frontend als auch im Backend kontinuierlich weiterzuentwickeln.
                Besonders begeistert mich die <span className="font-semibold text-gray-600">Frontend-Entwicklung mit React</span> und modernes Webdesign. Hier kann ich meine kreative Ader voll ausleben und mein Gespür für Ästhetik und User Experience gezielt einsetzen, um <em>intuitive und ansprechende Benutzeroberflächen</em> zu gestalten.
                Gleichzeitig fasziniert mich die <span className="font-semibold text-gray-600">Backend-Entwicklung mit Python</span>. Insbesondere die Arbeit mit Datenbanken, APIs und serverseitiger Logik reizt mich, da ich hier meine analytischen Fähigkeiten einbringen kann, um <em>robuste und performante Anwendungen</em> zu entwickeln.
                Mein übergeordnetes Ziel ist es, meine Fähigkeiten in beiden Bereichen so zu vertiefen, dass ich als vielseitige Softwareentwicklerin in einem innovativen und kollaborativen Team zum Einsatz kommen kann. Ich freue mich darauf, an spannenden Projekten mitzuwirken, die sowohl technologisch herausfordernd sind als auch einen direkten <em>Mehrwert für Nutzer*innen</em> schaffen.
              </p>
              <img src={Circle} alt="Drei Kreise, die Innovation, Kreativität und Benutzerfreundlichkeit symbolisieren" className="h-32 sm:h-48 mx-auto my-8" />
            </div>
          </div>
        </SlideInWhenVisible>
      </div>
    </section>

    
 
  );
};
