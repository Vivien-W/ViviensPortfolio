import Sternenfeuer1 from "../../assets/images/Sternenfeuer1.JPG";
import festivalwebsite from "../../assets/videos/festival-demo.mp4";
import bibliAmour from "../../assets/videos/bibliAmour.mp4";
import dashboard from "../../assets/videos/dashboard.mp4";
import wetterapp from "../../assets/videos/wetter-app.mp4";
import portfolio from "../../assets/images/Portfolio_Background.jpg";
import MeineProjekte from "../../assets/images/MeineProjekte.png";
import SlideInWhenVisible from '../../components/SlideInWhenVisible';

export const Projects = () => {
  return (
    <section
      id="projekte"
      className="min-h-screen flex items-center justify-center bg-white px-4 py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <SlideInWhenVisible delay={0}>
        <img
                  src={MeineProjekte}
                  alt="Überschrift meine Projekte"
                  className="h-14 mb-8 mx-auto"
                />
        </SlideInWhenVisible>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2 ">
          {/* Festival Website */}
          <ProjectCard
            media={<video src={festivalwebsite} controls className="w-full h-52 object-cover rounded-lg mb-4 border border-white/20" />}
            title="Festival-Website mit Chatbot & Datenbank"
            description="Eine interaktive Eventplattform mit integriertem FAQ-Chatbot, Ticketshop und Datenbank für Ticketmanagement (MySQL) für effizientes Veranstaltungsmanagement."
            tech={["HTML5", "CSS3", "Javascript", "PHP", "Python", "MySQL", "Flask"]}
            link="https://github.com/Vivien-W/Festival-Website-mit-FAQ-Chatbot"
          />
          

          {/* Bücher-App */}
          <ProjectCard
            media={<video src={bibliAmour} controls className="w-full h-52 object-cover rounded-lg mb-4 border border-white/20" />}
            title="Bücher-App (BibliAmour)"
            description="Single-Page-Anwendung zur Buchsuche via API: Nutzer*innen können beliebte Titel entdecken, Favoriten speichern und Gelesenes markieren. Fokus auf Usability und State-Management."
            tech={["React", "HTML5", "CSS3", "Node.js", "React Router DOM", "API"]}
            link="https://github.com/Vivien-W/Buecher-App"
          />

          {/* Sales Dashboard */}
          <ProjectCard
            media={<video src={dashboard} controls className="w-full h-52 object-cover rounded-lg mb-4 border border-white/20" />}
            title="Sales-Dashboard"
            description="Datenvisualisierung in einem modernen Dashboard mit React: Dark Mode, interaktive Diagramme, Kundenverwaltung und Einstellungen – optimiert für schnelle Insights."
            tech={["React", "Javascript", "TailwindCSS", "Dark Mode"]}
            link="https://github.com/Vivien-W/Sales-Dashboard"
          />

          {/* Wetter-App */}
          <ProjectCard
            media={<video src={wetterapp} controls className="w-full h-52 object-cover rounded-lg mb-4 border border-white/20" />}
            title="Wetter-App"
            description="Wetterübersicht mit React und Open-Meteo API – Anzeige von Temperatur, Wind & Luftfeuchtigkeit. Cleanes UI, responsiv umgesetzt."
            tech={["React", "Javascript", "CSS3", "HTML5", "API"]}
            link="https://github.com/Vivien-W/Wetter-App"
          />

          {/* Raketenspiel */}
          <ProjectCard
            media={<img src={Sternenfeuer1} alt="Raketenspiel Screenshot" className="w-full h-52 object-cover rounded-lg mb-4 border border-white/20" />}
            title="2D-Raketenspiel"
            description="Browserbasiertes Javascript-Spiel mit Score-System, mehreren Levels und Game-Loop-Logik. Fokus: Logik, Animation & Spielfluss."
            tech={["Javascript", "HTML5", "CSS3"]}
            link="https://github.com/Vivien-W/Raketenspiel"
          />

          {/* Portfolio */}
          <ProjectCard
            media={<img src={portfolio} alt="Screenshot von der Portfolio-Website" className="w-full h-52 object-cover rounded-lg mb-4 border border-white/20" />}
            title="Portfolio-Website: dark theme"
            description="Individuell gestaltete Portfolio-Seite mit React und TailwindCSS: animiertes Logo, Ladebildschirm, Scroll-Effekte und responsive Umsetzung."
            tech={["React", "Javascript", "TailwindCSS", "CSS3", "HTML5"]}
            link="https://github.com/Vivien-W/Portfolio"
          />
        </div>
        
      </div>
    </section>
  );
};

const ProjectCard = ({ media, title, description, tech, link }) => (
  <div className="backdrop-blur-md bg-white/80 border border-cyan-100 rounded-2xl 
                   hover:border-cyan-300 p-6 shadow-2xl hover:-translate-y-1 transition-transform">
    {media}
    <h3 className="text-xl font-bold text-pink-600 mb-2">{title}</h3>
    <p className="text-gray-700 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {tech.map((item, idx) => (
        <span
          key={idx}
          className="bg-pink-100 text-pink-600 py-1 px-3 rounded-full text-sm hover:bg-cyan-100 transition"
        >
          {item}
        </span>
      ))}
    </div>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-cyan-600 hover:text-cyan-800 transition-colors font-medium"
    >
      View Project →
    </a>
  </div>
);
