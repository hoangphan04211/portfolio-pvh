"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "../common/ui/SectionHeader";
import { Card } from "../common/ui/Card";
import { User, MapPin, GraduationCap, Mail } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="section-padding">
      <SectionHeader 
        title="About Me" 
        subtitle="Designing and building with purpose"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <Card className="h-full">
            <h3 className="text-3xl font-bold text-neutral-900 mb-6 tracking-tight">
              Passionate developer dedicated to <span className="text-accent italic">quality</span> and <span className="text-accent italic">minimalism</span>.
            </h3>
            <div className="space-y-4 text-neutral-600 font-light leading-relaxed">
              <p>
                I'm a final-year Information Technology student at Ho Chi Minh City Industry and Trade College.
                I specialize in building React-based web applications with a focus on clean architecture and smooth user experiences.
              </p>
              <p>
                My approach to development is inspired by Japanese minimalism: 
                <span className="font-bold text-neutral-900"> simple, effective, and refined.</span>
                I believe that every line of code should serve a purpose and every pixel 
                should contribute to a harmonious whole.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: User, label: "Name", value: "Phan Van Hoang" },
                { icon: MapPin, label: "Address", value: "Thu Duc, Ho Chi Minh City" },
                { icon: GraduationCap, label: "Education", value: "HITC - IT Major" },
                { icon: Mail, label: "Email", value: "phan21828@gmail.com" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group p-5 border border-neutral-100 rounded-2xl hover:bg-neutral-50 transition-all duration-300">
                  <div className="p-3 bg-neutral-100 rounded-xl text-neutral-500 group-hover:bg-accent group-hover:text-white transition-all">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold mb-1">{item.label}</p>
                    <p className="text-neutral-900 font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Card className="h-full flex flex-col justify-center items-center text-center space-y-8">
            <div className="w-24 h-24 bg-neutral-50 border border-neutral-100 rounded-full flex items-center justify-center shadow-inner">
              <span className="text-3xl font-black text-neutral-900">GPA</span>
            </div>
            <div>
              <h4 className="text-5xl font-black text-neutral-900 tracking-tighter">7.0/10</h4>
              <p className="text-neutral-500 text-sm font-medium uppercase tracking-widest mt-2">Information Technology</p>
            </div>
            <div className="pt-8 border-t border-neutral-100 w-full">
              <h5 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-3">Languages</h5>
              <p className="text-neutral-900 font-bold text-lg">English - Intermediate (A2)</p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
