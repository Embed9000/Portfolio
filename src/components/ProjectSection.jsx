import React, { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import ModalWrapper from "./ModalWrapper";
import ProjectDetailPage from "./ProjectDetailPage";
import { projects } from "../data/projects";

export const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="pb-20 bg-gray-950 w-full">
      <div className="container mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white pt-3">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore my portfolio of games and interactive experiences. Each
            project represents my passion for creating engaging gameplay and
            immersive worlds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.slug}
              onClick={() => setActiveProject(project)}
              className="cursor-pointer group block rounded-2xl hover:scale-[1.02] transition-transform"
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>

      <ModalWrapper open={!!activeProject} onClose={() => setActiveProject(null)}>
        {activeProject && <ProjectDetailPage modalProject={activeProject} />}
      </ModalWrapper>
    </section>
  );
};
