"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "../common/ui/Button";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] -z-10" />

      <div className="section-padding grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 text-center lg:text-left"
        >
          <div className="space-y-4">
            <h2 className="text-accent font-bold uppercase tracking-[0.3em] text-xs mb-4">Frontend Developer</h2>
            <h1 className="text-6xl md:text-8xl font-bold text-neutral-900 mb-8 tracking-tight leading-[1.1]">
              Phan Van <span className="text-accent underline underline-offset-8 decoration-accent/10">Hoang</span>
            </h1>
          </div>

          <p className="text-neutral-500 max-w-lg mx-auto md:mx-0 text-lg md:text-xl font-light leading-relaxed mb-10">
            Crafting high-performance, minimalist web experiences with a focus on modern aesthetics and clean code.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6">
            <Button variant="primary" size="lg" className="px-10 rounded-full shadow-soft" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Projects
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]">
            {/* Minimalist Frame Wrapper */}
            <div className="absolute inset-0 rounded-3xl border border-neutral-100 p-4 bg-white shadow-soft group hover:shadow-md transition-all duration-500">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-neutral-50 relative">
                <Image
                  src="/logo.png"
                  alt="Phan Van Hoang Logo"
                  fill
                  className="object-contain p-8 transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
            </div>
            
            {/* Decorative Elements - Simplified */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/5 rounded-full z-[-1]" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-neutral-100/50 rounded-full z-[-1]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
