import UeberMich from '../../assets/images/UeberMich.png';
import SlideInWhenVisible from '../../components/SlideInWhenVisible';

export const About = () => {
  const frontendSkills = ["React", "HTML5", "CSS3", "TailwindCSS", "Javascript"];
  const backendSkills = ["SQL", "Python", "Javascript", "MySQL Workbench", "Flask"];

  return (
    
    <section
      id="Über Mich"
      className="min-h-screen flex items-center justify-center bg-white px-4 py-24"
    >
      <SlideInWhenVisible delay={0}>
      <div className="max-w-4xl w-full backdrop-blur-md bg-white/80 border border-pink-100 rounded-2xl 
                   hover:border-pink-300 shadow-2xl hover:-translate-y-1 transition-transform p-10">
        
        {/* Header-Bild */}
        <img
          src={UeberMich}
          alt="Über mich"
          className="h-14 mb-8 mx-auto"
        />
        
        {/* Abschnitt 1 */}
        <div className="mb-12 text-gray-700 leading-relaxed">
          <p className="mb-6">
            Ich bin angehende Softwareentwicklerin mit einem Master in Informationsmanagement. Mein Fokus liegt auf moderner Webentwicklung mit React, TailwindCSS und JavaScript. Besonders begeistern mich elegante UI/UX-Designs und datengetriebene Anwendungen. Ich suche den Einstieg in ein innovatives Entwicklerteam.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-gray-800">🎓 Studium</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
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
          <p>
            In meinen Projekten achte ich auf sauberen Code, Wiederverwendbarkeit, durchdachte Architektur und sorgfältige Dokumentation.
          </p>
        </div>

        {/* Skills */}
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <SlideInWhenVisible delay={100}>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Frontend</h3>
            <div className="flex flex-wrap gap-3">
              {frontendSkills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-pink-100 text-pink-900 py-1 px-3 rounded-full text-sm hover:bg-pink-200 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          </SlideInWhenVisible>
          <div>
            <SlideInWhenVisible delay={300}>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Backend</h3>
            <div className="flex flex-wrap gap-3">
              {backendSkills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-cyan-100 text-cyan-800 py-1 px-3 rounded-full text-sm hover:bg-cyan-200 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
            </SlideInWhenVisible>
          </div>
        </div>

        {/* Zukunft */}
        <div>
          <h3 className="text-xl font-semibold py-4 mb-4 text-gray-800">Zukunftspläne 🌊</h3>
          <p className="text-gray-700">
          Ich bin von der <span class="text-gray-800 font-semibold">Webentwicklung</span> fasziniert und verfolge das Ziel, mich sowohl im Frontend als auch im Backend kontinuierlich weiterzuentwickeln.
          Besonders begeistert mich die <span class="text-pink-400 font-semibold">Frontend-Entwicklung mit React </span> und modernes Webdesign. Hier kann ich meine kreative Ader voll ausleben und mein Gespür für Ästhetik und User Experience gezielt einsetzen, um <span class="text-gray-800 font-semibold">intuitive und ansprechende Benutzeroberflächen</span> zu gestalten.
          Gleichzeitig fasziniert mich die <span class="text-cyan-500 font-semibold">Backend-Entwicklung mit Python</span>. Insbesondere die Arbeit mit Datenbanken, APIs und serverseitiger Logik reizt mich, da ich hier meine analytischen Fähigkeiten einbringen kann, um  <span class="text-gray-800 font-semibold">robuste und performante Anwendungen</span> zu entwickeln.
          Mein übergeordnetes Ziel ist es, meine Fähigkeiten in beiden Bereichen so zu vertiefen, dass ich als vielseitige Softwareentwicklerin in einem innovativen und kollaborativen Team zum Einsatz kommen kann. Ich freue mich darauf, an spannenden Projekten mitzuwirken, die sowohl technologisch herausfordernd sind als auch einen direkten Mehrwert für Nutzer*innen schaffen. 
          </p>
        </div>
      </div>
      </SlideInWhenVisible>
    </section>
    
  );
};
