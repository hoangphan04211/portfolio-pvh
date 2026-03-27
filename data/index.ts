import { Skill, Project, Experience, Education } from "../types";

export const SKILLS: Skill[] = [
  { name: "React.js", icon: "react" },
  { name: "Next.js", icon: "next" },
  { name: "React Native", icon: "mobile" },
  { name: "JavaScript", icon: "js" },
  { name: "TypeScript", icon: "ts" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "Framer Motion", icon: "framer" },
  { name: "Laravel API", icon: "laravel" },
  { name: "MySQL", icon: "mysql" },
  { name: "Docker", icon: "docker" },
];

export const PROJECTS: Project[] = [
  {
    id: "watchshop",
    title: "Luxury E-Commerce (Watchshop)",
    role: "Full Stack Developer",
    period: "09/2025 - 11/2025",
    description: "Full-stack e-commerce system with 30+ RESTful APIs and 18+ modules.",
    longDescription: "A high-performance luxury watch store built with Next.js App Router. Features include lazy loading for homepage sections, Glassmorphism UI, Skeleton Loading, and a real-time cart using polling mechanism.",
    technologies: ["Next.js", "React", "Laravel API", "Tailwind CSS", "MySQL", "Axios"],
    liveUrl: "https://watchshop.hoangphan.info.vn",
    githubUrl: "https://github.com/hoangphan04211/watchshop-frontend",
    image: "/watchshop.png",
    features: [
      "Next.js App Router for optimal routing",
      "30+ RESTful APIs integration",
      "Lazy loading for 7 homepage sections",
      "Axios Interceptor for request/response handling",
      "Real-time cart with polling",
      "Responsive Glassmorphism design"
    ]
  },
  {
    id: "mobile-ecommerce",
    title: "Mobile E-Commerce App",
    role: "Frontend Developer",
    period: "11/2025 - 01/2026",
    description: "Feature-rich mobile application with secure authentication and smooth UX.",
    longDescription: "Built with React Native (Expo), this app provides a seamless mobile shopping experience. It features Laravel Sanctum authentication, AsyncStorage for persistence, and a clean service layer using Axios.",
    technologies: ["React Native", "Expo", "Laravel Sanctum", "NativeWind", "Context API"],
    liveUrl: "https://demo.hoangphan.info.vn",
    githubUrl: "https://github.com/hoangphan04211/ecommerce_app",
    image: "/mobileapp.png",
    features: [
      "Laravel Sanctum + AsyncStorage Auth",
      "NativeWind for consistent styling",
      "Product filtering & search",
      "Checkout & Order history",
      "Context API for global state",
      "Service layer abstraction"
    ]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    company: "Freelance / Personal Projects",
    position: "Frontend Developer",
    period: "2024 - Present",
    description: [
      "Developing high-performance web applications using Next.js and React.",
      "Integrating complex RESTful APIs and optimizing frontend performance.",
      "Designing modern, responsive UIs with Tailwind CSS and Framer Motion."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    school: "Ho Chi Minh City Industry and Trade College (HITC)",
    major: "Information Technology",
    period: "2023 - 2026",
    gpa: "7.0/10"
  }
];
