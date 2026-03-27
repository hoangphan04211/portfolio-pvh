"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { SectionHeader } from "../common/ui/SectionHeader";
import { Button } from "../common/ui/Button";
import { Send, Mail, Phone, Loader2, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    console.log("Form Data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="contact" className="section-padding">
      <SectionHeader 
        title="Get In Touch" 
        subtitle="Let's collaborate on your next big project"
      />
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div className="space-y-6">
            <h3 className="text-4xl font-bold text-neutral-900 tracking-tight">Contact Information</h3>
            <p className="text-neutral-600 leading-relaxed font-light text-lg">
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your visions. Feel free to reach out!
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-6 group">
              <div className="p-4 bg-neutral-100 rounded-2xl text-neutral-400 group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-sm">
                <Mail className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] text-neutral-400 uppercase font-bold tracking-widest">Email</p>
                <a href="mailto:phan21828@gmail.com" className="text-neutral-900 font-bold text-lg hover:text-accent transition-colors">
                  phan21828@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="p-4 bg-neutral-100 rounded-2xl text-neutral-400 group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-sm">
                <Phone className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] text-neutral-400 uppercase font-bold tracking-widest">Phone</p>
                <a href="tel:+84337987504" className="text-neutral-900 font-bold text-lg hover:text-accent transition-colors">
                  +84 337 987 504
                </a>
              </div>
            </div>
          </div>

          <div className="p-8 bg-neutral-50 rounded-3xl border border-neutral-100">
            <h4 className="text-neutral-900 font-bold mb-2 uppercase text-xs tracking-widest">Location</h4>
            <p className="text-neutral-600 font-light">Thu Duc, Ho Chi Minh City, Vietnam</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-12 rounded-[2rem] border border-neutral-100 shadow-soft"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest ml-1">Full Name</label>
              <input
                {...register("name")}
                className="w-full bg-neutral-50 border border-neutral-100 rounded-xl px-6 py-4 text-neutral-900 focus:outline-none focus:border-accent focus:bg-white transition-all placeholder:text-neutral-300 font-light"
                placeholder="Phan Van Hoang"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name.message}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest ml-1">Email Address</label>
              <input
                {...register("email")}
                className="w-full bg-neutral-50 border border-neutral-100 rounded-xl px-6 py-4 text-neutral-900 focus:outline-none focus:border-accent focus:bg-white transition-all placeholder:text-neutral-300 font-light"
                placeholder="example@mail.com"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email.message}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest ml-1">Subject</label>
              <input
                {...register("subject")}
                className="w-full bg-neutral-50 border border-neutral-100 rounded-xl px-6 py-4 text-neutral-900 focus:outline-none focus:border-accent focus:bg-white transition-all placeholder:text-neutral-300 font-light"
                placeholder="Project Inquiry"
              />
              {errors.subject && <p className="text-red-500 text-xs mt-1 ml-1">{errors.subject.message}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest ml-1">Message</label>
              <textarea
                {...register("message")}
                rows={5}
                className="w-full bg-neutral-50 border border-neutral-100 rounded-xl px-6 py-4 text-neutral-900 focus:outline-none focus:border-accent focus:bg-white transition-all placeholder:text-neutral-300 font-light resize-none"
                placeholder="Tell me more about your project..."
              />
              {errors.message && <p className="text-red-500 text-xs mt-1 ml-1">{errors.message.message}</p>}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-5 rounded-xl font-bold tracking-widest uppercase text-xs"
              variant={isSuccess ? "outline" : "primary"}
            >
              {isSubmitting ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : isSuccess ? (
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Sent Successfully!
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  Send Message
                </div>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
