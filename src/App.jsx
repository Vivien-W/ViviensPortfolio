import { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";
import Datenschutz from "./components/sections/Datenschutz";
import Impressum from "./components/sections/Impressum";
import { Routes, Route } from "react-router-dom";
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  if (!isLoaded) return <LoadingScreen onComplete={() => setIsLoaded(true)} />;

  return (
    <div className="relative z-10 min-h-screen transition-opacity duration-400 opacity-100 bg-cyan-100 text-gray-100">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main>
        <Routes>
          {/* Portfolio-Hauptseite */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Projects />
                <Contact />
                <Footer />
              </>
            }
          />

          {/* Rechtliche Seiten als eigene Seiten */}
          <Route
            path="/datenschutz"
            element={
              <>
                <Datenschutz />
              </>
            }
          />
          <Route
            path="/impressum"
            element={
              <>
                <Impressum />
              </>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
