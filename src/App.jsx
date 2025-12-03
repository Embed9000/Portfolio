// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import { AboutSection } from "./components/About";
import Writings from "./components/Writings";
import { ProjectsSection } from "./components/ProjectSection";
import EducationSection from "./components/EducationSection";
import Contact from "./components/ContactSection";

import ProjectDetailPage from "./components/ProjectDetailPage";

// Pagina de start (landing)
function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutSection />
      <Writings />
      <ProjectsSection />
      <EducationSection />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing page */}
        <Route path="/" element={<Home />} />

        {/* Pagină detaliu proiect */}
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
