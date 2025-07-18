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
      id="about"
      className="min-h-screen flex items-center justify-center bg-white py-12 md:py-24 px-4 md:px-8">
       {/* Wasser-Shader-Hintergrund */}
      <WaterEffect />

      <div className="max-w-5xl mx-auto px-4">

       {/* Header-Bild */}
        <img
          src={UeberMich}
          alt="Über mich"
          className="h-14 mb-8 mx-auto"
        />


      <SlideInWhenVisible delay={0}>
      <div className="max-w-4xl w-full backdrop-blur-md bg-white/80 border border-cyan-100 rounded-2xl 
                   hover:border-cyan-300 shadow-2xl hover:-translate-y-1 transition-transform p-10">
        
       
        
        {/* Abschnitt 1 */}
        <div className="mb-12 text-gray-700 leading-relaxed">
          <p className="mb-6">
            Ich bin angehende Softwareentwicklerin mit einem Master in Informationsmanagement. Mein Fokus liegt auf moderner <span class="text-gray-600 font-semibold text-md">Webentwicklung mit React, TailwindCSS und JavaScript</span>. Besonders begeistern mich elegante UI/UX-Designs und datengetriebene Anwendungen. Ich suche den Einstieg in ein innovatives Entwicklerteam.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-pink-600 font-xl ml-24 mt-12" >Mein Studium</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600 ml-24">
            <li><strong>M.S. in Information, Medien, Bibliothek</strong> – HAW Hamburg (2017–2019)</li>
            <li><strong>B.S. in Bibliotheks- und Informationsmanagement</strong> – HAW Hamburg (2013–2017)</li>
            <li>Fokus: IT-Grundlagen, Datenbanktechnologie, Usability & UX</li>
          </ul>
        </div>

        {/* Abschnitt 2 */}
        <div className="mb-12 text-gray-700 leading-relaxed">
          <p className="mb-6">
            Meine Begeisterung fürs Programmieren begann bereits im Studium, als ich meine erste datenbankgestützte Webanwendung mit HTML, CSS, JavaScript und MySQL entwickelte. Seit Anfang 2025 habe ich mein technisches Wissen aufgefrischt und gezielt vertieft – sowohl im Backend-Bereich als auch Frontend-Bereich mit Fokus auf moderne Webentwicklung mit React, TailwindCSS und Javascript.
          </p>
          <p className="mb-6">
            Nach dem Studium war ich mehrere Jahre in einer leitenden Position im Kinobereich tätig. Nun, nach einer Elternzeit, habe ich mich bewusst für einen beruflichen Neustart entschieden: Ich möchte als Softwareentwicklerin einsteigen, meine Fähigkeiten weiter ausbauen und mich langfristig in einem professionellen Entwicklungsteam etablieren.
          </p>
          <h3 className="text-xl font-semibold text-center mt-12 mb-6 text-pink-600 font-xl" >Kenntnisse und Fähigkeiten</h3>
        ` <p>
            In den folgenden Bereichen verfüge ich über solide Grundkenntnisse bis hin zu routinierter Anwendung: 

          </p>
        </div>

        {/* Skills */}
        <div className="grid md:grid-cols-2 gap-10 mb-8">
          <SlideInWhenVisible delay={100}>
          <div>
            <h3 className="text-md font-semibold mb-4 text-gray-800">Frontend</h3>
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
          <div>
            <SlideInWhenVisible delay={300}>
            <h3 className="text-md font-semibold mb-4 text-gray-800">Backend</h3>
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
            </SlideInWhenVisible>
          </div>
          </div>
          <SlideInWhenVisible delay={300}>
              <h3 className="text-md font-semibold mb-4 text-gray-800 text-center">Tools & Anwendungen</h3>
              <div className="flex flex-wrap gap-3 justify-center mb-18">
                {softwareSkills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-gray-500 py-1 px-3 rounded-full text-sm hover:bg-gray-200 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              </SlideInWhenVisible>
              <p className="text-gray-700">
              Zusätzlich bringe ich Erfahrung im Umgang mit Tools wie Jira, Confluence, Jupyter Notebook, MS Office sowie Photoshop und GIMP mit - insbesondere im Rahmen projektbasierter Zusammenarbeit, Dokumentation und visuellem Prototyping.
              Ich arbeite gerne mit modernen Tools und Technologien und erweitere mein Know-how durch kontinuierliches Lernen und praktische Anwendung.

          </p>

        {/* Lernquellen */}

  <div className="mt-12 mb-8">
    <img
  src={Lernquellen}
  alt="Lernquellen anzeigen"
  onClick={() => setShowSources(!showSources)}
  className="h-16 cursor-pointer mb-4 hover:scale-105 transition duration-200 justify-center"
/>

    {showSources && (
      <div className="mt-6 bg-cyan-50 border border-gray-200 rounded-xl p-6 text-xs text-gray-800 shadow-inner space-y-4">
        <div>
          <p className="font-semibold text-gray-700 mb-1">📚 Empfehlenswerte Bücher & E-Books</p>
          <ul className="list-disc list-inside ml-4">
            <li>Korthaus, Claudia (2018): <em>Das Design-Buch für Nicht-Designer</em>. Rheinwerk Verlag GmbH.  ISBN 978-3-8362-6580-5 </li>
            <li>Wegener, Gudrun (2020): <em>Stile & Looks: Design- Ideen für Print und Web </em>. Rheinwerk Verlag GmbH.  ISBN 978-3-8362-6738-0 </li>
            <li>Semler, Jan / Tschierschke, Kira (2019): <em>App-Design: Das umfassende Handbuch</em>. Rheinwerk Verlag GmbH.  ISBN 978-3-8362-7052-6 </li>
            <li>Jacobsen, Jens / Meyer, Lorena (2024): <em>Praxisbuch Usability und UX</em>. Rheinwerk Verlag GmbH.  ISBN 978-3-8362-9905-3 </li>
            <li>Maurice, Florence (2023): <em>HTML & CSS für Dummies</em>. Wiley-VCH GmbH.  ISBN 978-3-527-72014-9 </li>
            <li>Lederer, Anke (2021): <em>GitHub – Eine praktische Einführung</em>. dpunkt.verlag GmbH. ISBN 978-3-96010-427-8 </li>
            <li>Inden, Michael (2023): <em>Python lernen: kurz & gut</em>. dpunkt.verlag GmbH. ISBN 978-3-96010-721-7 </li>
            <li>Zhao, Alice (2022): <em>SQL lernen: kurz & gut</em>. dpunkt.verlag GmbH. ISBN 978-3-96010-693-7 </li>
            <li>Lampe, Jürgen (2020): <em>Clean Code für Dummies</em>. WILEY-VCH Verlag GmbH & Co. KGaA.  ISBN 978-3-527-82392-5 </li>
            <li>Springer, Sebastian (2023): <em>React: Das umfassende Handbuch</em>. Rheinwerk Verlag GmbH.  ISBN 978-3-8362-9256-6 </li>
            <li>Kersken, Sascha (2023): <em>IT-Handbuch für Fachinformatiker*innen: Der Ausbildungsbegleiter</em>. Rheinwerk Verlag GmbH. ISBN 978-3-8362-9593-2 </li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-gray-700 mb-1">💻 Online-Ressourcen</p>
          <ul className="list-disc list-inside ml-4">
            <li>Dokumentation: <em>TailwindCSS</em> https://tailwindcss.com </li>
            <li>W3School: https://www.w3schools.com/</li>
            <li>MOOC HarvardX CS50: <em>Introduction to Computer Science.</em> https://home.edx.org/</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-gray-700 mb-1">💻 FreeCodeCamp-Kurse</p>
          <ul className="list-disc list-inside ml-4">
            <li>Responsive Web Design</li>
            <li>JavaScript Algorithms and Data Structures</li>
            <li>Front End Development Libraries</li>
            <li>Scientific Computing with Python</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-gray-700 mb-1">▶ YouTube-Kanäle</p>
          <ul className="list-none ml-4">
            <li>@GreatStack</li>
            <li>@Programmierenlernen</li>
            <li>@Pedro Tech</li>
            <li>@Tech with Tim</li>
          </ul>
        </div>
      </div>
    )}
  </div>


       <SlideInWhenVisible delay={400}>
        <p className="text-gray-700">
           In meinen Projekten achte ich auf sauberen Code, Wiederverwendbarkeit, eine durchdachte Architektur und sorgfältige Dokumentation. Ebenso lege ich großen Wert auf eine benutzerfreundliche, barrierefreie und performante Umsetzung, die sich an den Bedürfnissen der Nutzer:innen orientiert. Ob im Code, im Layout oder in der User Experience – ich verbinde moderne Frontend-Technologien mit kreativen Ideen.  – für digitale Erlebnisse, die sowohl technisch als auch visuell überzeugen.
        </p>
          {/* Circle-Bild */}.
        <img
          src={Circle}
          alt="Über mich"
          className="h-48 mx-auto my-8"
        />
        </SlideInWhenVisible>

        {/* Zukunft */}
         <SlideInWhenVisible delay={500}>
        <div className="mb-12 mt-12 text-gray-700 leading-relaxed">
          <h3 className="text-xl font-semibold text-center mb-4 text-pink-600 font-xl" >Zukunftspläne</h3>
          <p className="text-gray-700">
          Ich bin von der <span class="text-gray-600 font-semibold text-md">Webentwicklung</span> fasziniert und verfolge das Ziel, mich sowohl im Frontend als auch im Backend kontinuierlich weiterzuentwickeln.
          Besonders begeistert mich die <span class="text-gray-600 font-semibold text-md">Frontend-Entwicklung mit React </span> und modernes Webdesign. Hier kann ich meine kreative Ader voll ausleben und mein Gespür für Ästhetik und User Experience gezielt einsetzen, um <em>intuitive und ansprechende Benutzeroberflächen</em> zu gestalten.
          Gleichzeitig fasziniert mich die <span class="text-gray-600 font-semibold text-md">Backend-Entwicklung mit Python</span>. Insbesondere die Arbeit mit Datenbanken, APIs und serverseitiger Logik reizt mich, da ich hier meine analytischen Fähigkeiten einbringen kann, um  <em>robuste und performante Anwendungen</em> zu entwickeln.
          Mein übergeordnetes Ziel ist es, meine Fähigkeiten in beiden Bereichen so zu vertiefen, dass ich als vielseitige Softwareentwicklerin in einem innovativen und kollaborativen Team zum Einsatz kommen kann. Ich freue mich darauf, an spannenden Projekten mitzuwirken, die sowohl technologisch herausfordernd sind als auch einen direkten <em>Mehrwert für Nutzer*innen</em> schaffen. 
          </p>
        </div>
        </SlideInWhenVisible>
      </div>
      </SlideInWhenVisible>
      </div>
    </section>
    
  );
};
