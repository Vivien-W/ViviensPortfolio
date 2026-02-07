import MeineProjekte from "../../assets/images/MeineProjekte.png";
import SlideInWhenVisible from "../../components/SlideInWhenVisible";
import ScreenshotPortfolio from "../../assets/images/Portfolio.JPG";
import ScreenshotDashboard from "../../assets/images/KI-Kosten-Dashboard.png";
import ScreenshotLeaflist from "../../assets/images/LeafList.png";

export const Projects = () => {
  return (
    <section
      id="projekte"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-cyan-400 to-cyan-600 py-12 md:py-24 px-4 md:px-8"
    >
      <div className="w-full max-w-5xl mx-auto px-2 sm:px-4">
        <SlideInWhenVisible delay={0}>
          <img
            src={MeineProjekte}
            alt="Überschrift meine Projekte"
            className="h-12 sm:h-14 mb-8 mx-auto"
          />
        </SlideInWhenVisible>
        <div className="w-24 h-1 bg-white/50 mx-auto rounded-full mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2 ">
          {/* KI-Kosten-Dashboard */}
          <ProjectCard
            media={
              <img
                src={ScreenshotDashboard}
                alt="Screenshot vom Dashboard"
                className="w-full h-52 object-cover rounded-lg mb-4 border border-white/20"
              />
            }
            title="KI-Kosten-Dashboard"
            description="Ein Full-Stack-Dashboard zur Simulation und Analyse von KI-Prompt-Kosten. 
            Das Projekt bildet typische KI-Workflows nach, berechnet Token-Nutzung, Latenzen und modellabhängige Kosten, 
            speichert alle Daten in einer PostgreSQL-Datenbank und visualisiert sie in einem interaktiven Dashboard. 
            Der Fokus liegt auf Kostenlogik, Datenfluss, Backend-API-Design und aussagekräftiger Visualisierung."
            tech={[
              "React",
              "TypeScript",
              "Node.js",
              "Express",
              "PostgreSQL",
              "TailwindCSS",
            ]}
            link="https://github.com/Vivien-W/KI-Kosten-Dashboard"
            liveDemo="https://ki-kosten-dashboard.vercel.app/"
          />

          {/* To-Do-App */}
          <ProjectCard
            media={
              <img
                src={ScreenshotLeaflist}
                alt="Screenshot von der To-Do-App"
                className="w-full h-52 object-cover rounded-lg mb-4 border border-white/20"
              />
            }
            title="Fullstack-To-Do-App"
            description="LeafList ist eine moderne, ruhige und bewusst minimalistisch gestaltete To-Do-Webanwendung.
            Das Projekt wurde als Full-Stack-Portfolio-Projekt entwickelt und legt besonderen Wert auf
            saubere Architektur, TypeScript-Typisierung, Testbarkeit und ein hochwertiges Nutzererlebnis."
            tech={[
              "React",
              "TypeScript",
              "Node.js",
              "Express",
              "PostgreSQL",
              "TailwindCSS",
              "Jest/Vitest",
            ]}
            link="https://github.com/Vivien-W/Fullstack-To-Do-App"
            liveDemo="https://ki-kosten-dashboard.vercel.app/"
          />

          {/* Portfolio */}
          <ProjectCard
            media={
              <img
                src={ScreenshotPortfolio}
                alt="Screenshot von der Portfolio-Website"
                className="w-full h-52 object-cover rounded-lg mb-4 border border-white/20"
              />
            }
            title="Portfolio-Website"
            description="Individuell gestaltete Portfolio-Website, die modernste Webtechniken kombiniert, um eine ansprechende Benutzererfahrung zu bieten. Die Seite enthält eine Three.js-Animation und dynamische Hintergrundeffekte, einen Loading Screen sowie Scroll-Effekte, die das Design interaktiv und lebendig machen. Besonderer Fokus liegt auf responsiver Umsetzung, flüssiger Performance und einem intuitiven, visuellen Storytelling, das Projekte und Fähigkeiten übersichtlich präsentiert. Das Projekt demonstriert den professionellen Einsatz von Frontend-Frameworks, Animationen und komponentenbasiertem Design."
            tech={["React", "Node.js", "Javascript", "TailwindCSS", "Three.js"]}
            link="https://github.com/Vivien-W/ViviensPortfolio"
          />

          {/* Bücher-App */}
          <ProjectCard
            media={
              <video
                src={`${import.meta.env.BASE_URL}videos/buecher-app.mp4`}
                controls
                className="w-full h-52 object-cover rounded-lg mb-4 border border-white/20"
              />
            }
            title="Bücher-App (BibliAmour)"
            description="BibliAmour ist eine interaktive Single-Page-Anwendung, die Nutzer*innen ermöglicht, Bücher über eine API zu entdecken und zu verwalten. Die App bietet Funktionen wie Favoriten speichern, Gelesenes markieren und eine intuitive Buchsuche. Durch den Einsatz von React Router DOM können unterschiedliche Views nahtlos innerhalb der SPA navigiert werden, während State-Management sicherstellt, dass Benutzerinteraktionen und Daten konsistent bleiben. Besonderer Fokus liegt auf Usability, responsivem Design und einer übersichtlichen, modernen Benutzeroberfläche."
            tech={["React", "CSS3", "Node.js", "React Router DOM", "API"]}
            link="https://github.com/Vivien-W/Buecher-App"
            liveDemo="https://vivien-w.github.io/Buecher-App/"
          />

          {/* Wetter-App */}
          <ProjectCard
            media={
              <video
                src={`${import.meta.env.BASE_URL}videos/wetter-app.mp4`}
                controls
                className="w-full h-52 object-cover rounded-lg mb-4 border border-white/20"
              />
            }
            title="Wetter-App"
            description="Interaktive Wetter-App, die aktuelle Wetterdaten für jeden Standort über die Open-Meteo API abruft. Die App zeigt übersichtlich Temperatur, Windgeschwindigkeit und Luftfeuchtigkeit an. Besonderes Augenmerk lag auf einem cleanen, modernen UI und einer vollständig responsiven Gestaltung für Desktop- und Mobilgeräte. Das Projekt demonstriert den Umgang mit API-Integration, State-Management und dynamischem Rendering in React."
            tech={["React", "Node.js", "Javascript", "CSS3", "API"]}
            link="https://github.com/Vivien-W/Wetter-App"
            liveDemo="https://vivien-w.github.io/Wetter-App/"
          />

          {/* Sales Dashboard */}
          <ProjectCard
            media={
              <video
                src={`${import.meta.env.BASE_URL}videos/dashboard.mp4`}
                controls
                className="w-full h-52 object-cover rounded-lg mb-4 border border-white/20"
              />
            }
            title="Sales-Dashboard"
            description="Modernes Sales-Dashboard zur Datenvisualisierung und Kundenverwaltung. Das Dashboard bietet interaktive Diagramme, Dark Mode-Support und anpassbare Einstellungen, um schnelle Insights für Geschäftsdaten zu ermöglichen. Besonderer Fokus liegt auf reaktiver Darstellung, intuitivem UI/UX und nahtloser API-Integration für dynamische Datenaktualisierung. Das Projekt demonstriert die Umsetzung von State-Management, komponentenbasiertem Aufbau und responsive Design mit TailwindCSS."
            tech={["React", "Javascript", "TailwindCSS", "API"]}
            link="https://github.com/Vivien-W/Sales-Dashboard"
            liveDemo="https://vivien-w.github.io/Sales-Dashboard/"
          />

          {/* Festival Website */}
          <ProjectCard
            media={
              <video
                src={`${import.meta.env.BASE_URL}videos/festival-demo.mp4`}
                controls
                className="w-full h-52 object-cover rounded-lg mb-4 border border-white/20"
              />
            }
            title="Festival-Website mit Chatbot & Datenbank"
            description="Interaktive Eventplattform entwickelt mit HTML5, CSS3, JavaScript, PHP, Python (Flask) und MySQL, die effizientes Veranstaltungsmanagement ermöglicht. Die Website integriert einen FAQ-Chatbot zur direkten Unterstützung von Besucher*innen, einen Ticketshop für den einfachen Erwerb von Eintrittskarten und eine Datenbank für das zentrale Ticketmanagement. Besonderer Fokus liegt auf Usability, interaktiven Funktionen und der nahtlosen Verbindung von Frontend und Backend, um Veranstaltern und Gästen eine reibungslose Erfahrung zu bieten. Das Projekt zeigt die Umsetzung von Server-Client-Kommunikation, API-Integration und Datenbankmanagement in einer voll funktionsfähigen Webanwendung."
            tech={[
              "HTML5",
              "CSS3",
              "Javascript",
              "PHP",
              "Python",
              "MySQL",
              "Flask",
            ]}
            link="https://github.com/Vivien-W/Festival-Website-mit-FAQ-Chatbot"
          />

          {/* Raketenspiel */}
          <ProjectCard
            media={
              <video
                src={`${import.meta.env.BASE_URL}videos/raketenspiel.mp4`}
                controls
                alt="Demo vom Spiel"
                className="w-full h-52 object-cover rounded-lg mb-4 border border-white/20"
              />
            }
            title="Bonus-Spaßprojekt: 2D-Raketenspiel"
            description="Browserbasiertes 2D-Raketenspiel, das den Spieler*innen mehrere Levels mit Score-System, Animationen und Game-Loop-Logik bietet. Das Projekt legt den Fokus auf Spielfluss, Performance und interaktive Mechaniken, inklusive reaktiver Steuerung und dynamischer Level-Progression. Es demonstriert das Verständnis von DOM-Manipulation, Event-Handling, Timing-Mechanismen und grundlegender Spielentwicklung im Browser."
            tech={["Javascript", "HTML5", "CSS3"]}
            link="https://github.com/Vivien-W/Raketenspiel"
            liveDemo="https://vivien-w.github.io/Raketenspiel/"
          />
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ media, title, description, tech, link, liveDemo }) => (
  <div
    className="backdrop-blur-xl bg-white/40 
  border border-white/20 
  shadow-[0_8px_20px_rgba(0,0,0,0.15)]
  rounded-3xl p-6 
  hover:bg-white/50 
  hover:shadow-[0_12px_32px_rgba(0,0,0,0.25)]
  hover:-translate-y-1
  transition-all duration-300"
  >
    {media}
    <h3 className="text-4xl text-shadow text-cyan-900 mb-2 mt-6 font-dancing">
      {title}
    </h3>
    <p className="text-gray-700 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {tech.map((item, idx) => (
        <span
          key={idx}
          className="
        px-3 py-1
        rounded-full text-sm
        bg-white/40
        text-gray-700
        border border-white/30
        backdrop-blur-sm
        shadow-sm
        hover:bg-white/60
        transition-all
      "
        >
          {item}
        </span>
      ))}
    </div>

    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="
    inline-block
    text-cyan-700 
    hover:text-cyan-900
    font-medium 
    transition-colors
  "
    >
      Zum Projekt →
    </a>

    <div className="mb-2 mt-2">
      {liveDemo && (
        <a
          href={liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="
        inline-block
        px-3 py-1
        rounded-full
        bg-white/40
        backdrop-blur-sm
        text-gray-700 
        border border-white/30
        shadow-sm
        hover:bg-white/60
        transition-all
      "
        >
          Live-Demo →
        </a>
      )}
    </div>
  </div>
);
