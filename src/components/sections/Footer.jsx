import Koralle from "../../assets/images/Koralle.png";

export const Footer = () => {
  return (
    <footer className="w-full mt-2 bg-gray-100 backdrop-blur-xl shadow-[0_-8px_30px_rgba(0,0,0,0.05)]">
      <div className="max-w-4xl mx-auto px-8 py-4 text-center">
        <p className="text-sm text-gray-700">
          © 2025{" "}
          <span className="font-semibold text-gray-700">Vivien Wallbaum</span> –
          Danke fürs Vorbeischauen!
        </p>
        <p className="text-xs text-gray-500 mt-2">
          Portfolio zu Lern- und Demonstrationszwecken. Teile des Codes basieren
          auf Tutorials. Bilder KI-generiert & z.T. mit Canva bearbeitet.
        </p>

        <div className="flex justify-center gap-4 mt-4 text-cyan-400">
          <a
            href="mailto:vivienwbaum@gmail.com"
            className="hover:underline hover:text-cyan-500 transition"
          >
            E-Mail
          </a>
          <img src={Koralle} alt="Icon Koralle" className="h-8 " />
          <a
            href="#projekte"
            className="hover:underline hover:text-cyan-500 transition"
          >
            Projekte
          </a>
        </div>
      </div>
    </footer>
  );
};
