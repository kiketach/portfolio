import { LangProvider } from "./i18n";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Interests from "./components/Interests";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <LangProvider>
      <div id="top" className="grain relative min-h-screen bg-paper">
        <Nav />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <Interests />
          <Contact />
        </main>
        <Footer />
      </div>
    </LangProvider>
  );
}
