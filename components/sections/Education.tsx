"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "../common/ui/SectionHeader";
import { EDUCATION } from "@/data";
import { GraduationCap, Award, Calendar } from "lucide-react";
import { Card } from "../common/ui/Card";

export const Education = () => {
  return (
    <section id="education" className="section-padding">
      <SectionHeader 
        title="Education" 
        subtitle="Academic background and certifications"
      />
      
      <div className="max-w-4xl mx-auto space-y-8">
        {EDUCATION.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="flex flex-col md:flex-row gap-8 items-start md:items-center relative overflow-hidden group border-neutral-100 hover:border-accent">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full z-0 group-hover:bg-accent/10 transition-colors" />
              
              <div className="p-5 bg-neutral-100 rounded-2xl text-accent z-10 shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                <GraduationCap className="w-10 h-10" />
              </div>
              
              <div className="space-y-3 z-10 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <h3 className="text-2xl font-bold text-neutral-900 group-hover:text-accent transition-colors tracking-tight">{edu.school}</h3>
                  <span className="px-4 py-1.5 bg-neutral-50 rounded-full text-[10px] font-bold text-accent uppercase tracking-widest border border-accent/20">
                    {edu.period}
                  </span>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-neutral-500 font-medium">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-accent/60" />
                    <span>{edu.major}</span>
                  </div>
                  <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-neutral-100" />
                  <div className="flex items-center gap-2">
                    <span className="text-neutral-400 text-sm font-bold uppercase tracking-widest">GPA:</span>
                    <span className="text-neutral-900 font-bold">{edu.gpa}</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100 flex items-center justify-center gap-4 shadow-sm">
            <Award className="w-6 h-6 text-accent" />
            <p className="text-neutral-800 font-medium text-sm tracking-wide">
              English Certificate: <span className="text-neutral-900 font-bold">Intermediate reading level (A2 certified)</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
