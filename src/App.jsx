import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  const [activeSelection, setActiveSelection] = useState("home");

  // Render component based on activeSelection
  const renderSection = () => {
    switch (activeSelection) {
      case "home":
        return <Hero />;
      case "skills":
        return <Skills />;
      case "projects":
        return <Projects />;
      case "about":
        return <About />;
      case "experience":
        return <Experience />;
      case "contact":
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Pass the setter to Header */}
      <Header setActiveSelection={setActiveSelection} />

      {/* Render the selected section */}
      <main className="pt-20">{renderSection()}</main>
    </div>
  );
}

export default App;
