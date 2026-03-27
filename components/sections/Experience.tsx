"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "../common/ui/SectionHeader";
import { EXPERIENCE } from "@/data";
import { Briefcase, Calendar } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <SectionHeader 
        title="Experience" 
        subtitle="My professional journey and growth"
      />
      
      <div className="relative max-w-4xl mx-auto pl-8 md:pl-0">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-neutral-200 -translate-x-1/2 hidden md:block" />
        
        {EXPERIENCE.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`relative mb-16 md:flex md:justify-between items-center w-full ${
              idx % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-[-32px] md:left-1/2 w-4 h-4 rounded-full bg-accent border-4 border-white z-10 -translate-x-1/2 top-2 md:top-1/2 shadow-sm" />
            
            <div className="md:w-[45%]">
              <div className="bg-white p-8 rounded-3xl border border-neutral-100 hover:border-accent shadow-soft hover:shadow-md transition-all duration-500 group">
                <div className="flex items-center gap-3 text-accent mb-4">
                  <Briefcase className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-widest">{exp.period}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-neutral-900 mb-1 group-hover:text-accent transition-colors tracking-tight">{exp.position}</h3>
                <h4 className="text-neutral-500 font-medium mb-6 uppercase text-xs tracking-widest">{exp.company}</h4>
                
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-neutral-600 text-sm leading-relaxed font-light">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/30 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Spacer for centering */}
            <div className="hidden md:block md:w-[45%]" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
