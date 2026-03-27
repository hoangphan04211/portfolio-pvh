"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, CheckCircle2 } from "lucide-react";
import { Project } from "@/types";
import { Button } from "../common/ui/Button";
import Image from "next/image";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-neutral-900/40 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl overflow-y-auto md:overflow-hidden border border-neutral-100"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 p-2 bg-neutral-100/50 rounded-full hover:bg-neutral-200/50 transition-all duration-300 group"
            >
              <X className="w-5 h-5 text-neutral-500 group-hover:text-neutral-900 transition-colors" />
            </button>

            {/* Left: Image / Showcase */}
            <div className="md:w-1/2 relative min-h-[300px] md:min-h-full bg-neutral-50">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent md:hidden" />
            </div>

            {/* Right: Content */}
            <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto">
              <div className="space-y-8">
                <div>
                  <h3 className="text-4xl font-bold text-neutral-900 mb-2 tracking-tight">{project.title}</h3>
                  <p className="text-accent font-bold text-xs uppercase tracking-widest">{project.role} • {project.period}</p>
                </div>

                <p className="text-neutral-600 leading-relaxed font-light text-lg">
                  {project.longDescription}
                </p>

                <div className="space-y-4">
                  <h4 className="text-neutral-900 font-bold uppercase text-[10px] tracking-widest mb-4">Key Features</h4>
                  <ul className="grid grid-cols-1 gap-4">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-neutral-600 font-light">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-neutral-100 rounded-full text-[10px] font-bold text-neutral-500 uppercase tracking-widest">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button variant="primary" size="md" className="flex-1 font-bold tracking-widest uppercase text-[10px] rounded-xl" onClick={() => window.open(project.liveUrl, "_blank")}>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="md" className="flex-1 font-bold tracking-widest uppercase text-[10px] rounded-xl border-neutral-100" onClick={() => window.open(project.githubUrl, "_blank")}>
                    <Github className="w-4 h-4 mr-2" />
                    Codebase
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
