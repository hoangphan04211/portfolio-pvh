import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-100 py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-neutral-900">Hoang<span className="text-accent">Phan</span></h3>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Frontend Developer passionate about crafting modern, high-performance web applications with refined, minimalist interfaces.
            </p>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-neutral-900 font-bold uppercase tracking-widest text-xs">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:phan21828@gmail.com" className="hover:text-accent transition-colors">phan21828@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-accent" />
                <a href="tel:+84337987504" className="hover:text-accent transition-colors">+84 337 987 504</a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Ho Chi Minh City, Vietnam</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-neutral-900 font-bold uppercase tracking-widest text-xs">Social</h4>
            <div className="flex gap-4">
              <Link href="https://github.com/hoangphan04211" target="_blank" className="p-3 bg-white border border-neutral-100 rounded-xl hover:border-accent hover:text-accent transition-all shadow-sm">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-3 bg-white border border-neutral-100 rounded-xl hover:border-accent hover:text-accent transition-all shadow-sm">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="mailto:phan21828@gmail.com" className="p-3 bg-white border border-neutral-100 rounded-xl hover:border-accent hover:text-accent transition-all shadow-sm">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-neutral-100 text-center text-muted-foreground text-sm tracking-wide">
          <p>© {new Date().getFullYear()} Phan Van Hoang. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
