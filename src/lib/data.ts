export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  imageFit?: "cover" | "contain";
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  title: string;
  organization: string;
  duration: string;
  location?: string;
  points: string[];
  type: "work" | "education";
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: "trophy" | "medal" | "award";
  url?: string;
}

export const personalInfo = {
  name: "Soman Abbasi",
  fullName: "Muhammad Soman Shabbir Abbasi",
  title: "Full-Stack Engineer & AI Integrator",
  tagline:
    "Building end-to-end applications, APIs, and intelligent workflows.",
  summary:
    "I’m Soman Abbasi, a Full-Stack & AI Engineer focused on building scalable web applications and intelligent software systems. I work across frontend, backend, APIs, and AI integrations to create reliable and user-focused products. My experience includes modern web development, automation workflows, and building applications that combine performance, usability, and real-world impact.",
  profileImageLight: "/profile-light.jpeg",
  profileImageDark: "/profile-dark.jpeg",
  profileImageSeo: "/soman-abbasi-profile.jpeg",
  email: "contact.somanabbasi@gmail.com",
  secondaryEmail: "contact@somanabbasi.tech",
  github: "https://github.com/SomanAbbasi",
  linkedin: "https://www.linkedin.com/in/soman-abbasi-a1820b344/",
  fiverr: "https://www.fiverr.com/users/somanabbasi/portfolio",
  upwork: "https://www.upwork.com/freelancers/~01a6c3f988b638e99a",
  codeforces: "https://codeforces.com/profile/Soman_Abbasi",
  leetcode: "https://leetcode.com/u/SomanAbbasi/",
  resumeUrl: "/Resume_Soman_Abbasi.pdf",
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Fast-Food Restaurant Platform",
    description:
      "Production-ready food ordering platform with authentication, cart management, order tracking, and an admin panel with full CRUD.",
    image: "/projects/quickbites.png",
    techStack: ["MongoDB", "Express.js", "React", "Node.js"],
    liveUrl: "https://quickbites-flame.vercel.app/",
  },
  {
    id: "2",
    title: "Slack Clone — Real-Time Collaboration App",
    description:
      "Real-time chat platform with multi-workspace channels, direct messaging, role-based access control, file sharing, and live data synchronization.",
    image: "/projects/nexus.jpg",
    techStack: ["Next.js", "TypeScript", "Convex DB"],
  },
  {
    id: "3",
    title: "Hospital Website with SEO Optimisation",
    description:
      "High-performance, SEO-optimised site with structured content and dynamic doctor profile pages.",
    image: "/projects/hospitalwebsite.png",
    imageFit: "contain",
    techStack: ["Next.js", "TypeScript"],
    githubUrl: "https://github.com/SomanAbbasi/Ruhan-Medical-Complex-Khanpur-",
    liveUrl: "https://ruhanmedicalcomplex.com/",
  },
  {
    id: "4",
    title: "Agentic RAG System Chatbot",
    description:
      "A production-ready multi-agent AI system using LangChain, Groq, RAG, and ReAct architecture with web search, validation loops, and Streamlit UI for self-correcting intelligent responses.",
    image: "/projects/agentic_rag_system.png",
    imageFit: "contain",
    techStack: ["Python", "LangChain", "LangGraph", "Groq", "Streamlit"],
    githubUrl: "https://github.com/SomanAbbasi/Agentic-RAG-System-Chatbot-",

  },
   {
    id: "5",
    title: "Code Optimizer",
    description:
      "AI-powered tool that analyzes your code, detects inefficiencies, and returns an optimized version instantly.",
    image: "/projects/codeEnhancer.png",
    imageFit: "contain",
    techStack: ["Python", "Flask", "NextJs"],
    githubUrl: "https://github.com/SomanAbbasi?tab=repositories",
    liveUrl: "https://codeenhancer.vercel.app/",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Python", "C/C++", "C#", "JavaScript", "TypeScript"],
  },
  {
    name: "Frontend",
    skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "SASS"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express.js", "Flask", "FastAPI", "REST APIs"],
  },
  {
    name: "AI / ML",
    skills: [
      "LangChain",
      "LangGraph",
      "OpenAI API",
      "Gemini API",
      "Groq",
      "Hugging Face",
      "RAG Systems",
      "AI Agents",
      "Prompt Engineering",
    ],
  },
  {
    name: "Databases",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Convex",
      "Supabase",
      "Vector Databases (FAISS, ChromaDB, Pinecone)",
    ],
  },
  {
    name: "DevOps / Tools",
    skills: ["Git", "GitHub", "Docker", "Linux", "Postman"],
  },
  {
    name: "Other",
    skills: ["GraphQL", "Redis", "Figma"],
  },
];

export const experiences: Experience[] = [

  {
    id: "1",
    title: "Full-Stack Developer Intern (AI Integrations)",
    organization: "SKAFS International (Pvt) Ltd",
    duration: "Jan 2026 - Present",
    location: "Lahore, Pakistan",
    points: [
      "Engineered full-stack applications with AI-powered workflows, integrating LLM chatbots, RAG pipelines, and multi-agent orchestration systems into production environments",
      "Developed and deployed end-to-end AI agent systems using LangChain and LangGraph with memory, tool execution, and validation layers",
      "Integrated backend APIs and optimized system reliability, scalability, and AI response quality across application workflows",
    ],
    type: "work",
  },

  {
    id: "2",
    title: "Full-Stack Freelance Developer",
    organization: "Freelance",
    duration: "2026 - Present",
    location: "Remote",
    points: [
      "Delivered MERN / Next.js web applications for clients, including food ordering and hospital management platforms",
      "Collaborated directly with clients to gather requirements, iterate on designs, and deliver production-ready solutions",
      "Contributed to a real-world music streaming application (Tswangi Music App), implementing API integrations and building frontend interfaces connected to backend services",
    ],
    type: "work",
  },

  {
    id: "3",
    title: "Bachelor of Science in Computer Science | CGPA: 3.76",
    organization: "PUCIT, University of the Punjab",
    duration: "2024 - 2028",
    location: "Lahore, Pakistan",
    points: [
      "Focused on core CS fundamentals including data structures, algorithms, and database systems",
    ],
    type: "education",
  },

  

  
];
  

 

export const achievements: Achievement[] = [
  {
    id: "1",
    title: "LeetCode",
    description: "Data Structures & Algorithms practice across core topics",
    icon: "trophy",
    url: "https://leetcode.com/u/SomanAbbasi/",
  },
  {
    id: "2",
    title: "Codeforces",
    description: "Consistent performance across rated rounds",
    icon: "medal",
    url: "https://codeforces.com/profile/Soman_Abbasi",
  },
  {
    id: "3",
    title: "ICPC Regional Contest (2026)",
    description: "Regionalist",
    icon: "medal",
    url: "https://www.linkedin.com/posts/syed-ahmad-raza-226559335_from-a-last-minute-ac-in-the-qualifiers-activity-7425235882430980097-g2pd?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFYsJ_QBqqXdUJ0xpJqpqJ2F6z-_oo66ahY",
  },
  {
    id: "4",
    title: "Calico — Bronze Medalist (2025)",
    description: "Bronze medal in competitive programming contest",
    icon: "award",
    url: "https://www.linkedin.com/posts/syed-ahmad-raza-226559335_im-extremely-delighted-to-share-the-final-ugcPost-7397233813904355328-3Y3_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFYsJ_QBqqXdUJ0xpJqpqJ2F6z-_oo66ahY",
  },
];

export const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];
