"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "../common/ui/SectionHeader";
import { PROJECTS } from "@/data";
import { Project } from "@/types";
import { ProjectModal } from "../modals/ProjectModal";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-padding">
      <SectionHeader 
        title="Featured Projects" 
        subtitle="A selection of my recent works"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="group cursor-pointer mb-8"
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-neutral-100 bg-neutral-50 shadow-soft group-hover:shadow-md transition-all duration-500">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-neutral-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 backdrop-blur-[2px]">
                <div className="space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-neutral-500 text-sm font-light mb-6 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex items-center text-accent font-bold text-[10px] uppercase tracking-widest group/btn">
                      View Details
                      <div className="ml-2 w-4 h-px bg-accent/30 group-hover/btn:w-8 transition-all duration-300" />
                    </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 space-y-4 px-4">
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-neutral-100 text-[10px] font-bold text-neutral-500 uppercase tracking-wider">
                    {tech}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 group-hover:text-accent transition-colors">{project.title}</h3>
              <p className="text-neutral-600 leading-relaxed font-light line-clamp-2">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};
