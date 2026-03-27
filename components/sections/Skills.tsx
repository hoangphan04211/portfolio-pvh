"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "../common/ui/SectionHeader";
import { SKILLS } from "@/data";
import { 
  Code2, Terminal, Layers, Database, 
  GitBranch, Box, Server, Smartphone, Monitor, Palette
} from "lucide-react";

const iconMap: Record<string, any> = {
  react: Code2,
  next: Terminal,
  mobile: Smartphone,
  js: Monitor,
  ts: Code2,
  tailwind: Palette,
  framer: Layers,
  laravel: Server,
  mysql: Database,
  docker: Box,
};

export const Skills = () => {
  return (
    <section id="skills" className="section-padding py-32">
      <SectionHeader 
        title="Skills & Tools" 
        subtitle="The technology stack I use to bring ideas to life"
      />
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {SKILLS.map((skill, idx) => {
          const Icon = iconMap[skill.icon] || Code2;
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="group"
            >
              <div className="bg-white p-8 rounded-2xl flex flex-col items-center justify-center gap-6 text-center border border-neutral-100 hover:border-accent shadow-sm hover:shadow-md transition-all duration-500">
                <div className="p-4 bg-neutral-50 rounded-2xl group-hover:bg-accent/10 transition-colors">
                  <Icon className="w-8 h-8 text-neutral-400 group-hover:text-accent transition-colors" />
                </div>
                <span className="text-sm font-bold text-neutral-900 group-hover:text-accent transition-colors tracking-tight">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
