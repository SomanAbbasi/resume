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
  title: "Frontend & Full-Stack Engineer",
  tagline:
    "Building performant, accessible, and modern web and desktop applications.",
  summary:
    "I’m Soman Abbasi, a passionate Frontend & Full-Stack Engineer with a focus on building performant, accessible, and modern web and desktop applications. I work with tools like React and Python to create smooth experiences, and I’m always exploring new areas like AI to push my skills further.",
  email: "mssabbasi306@gmail.com",
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
    liveUrl: "https://quickbites-ymjz.onrender.com/",
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
    title: "Weather Monitoring Application",
    description:
      "Full-stack weather monitoring dashboard with real-time data fetching and interactive charts.",
    image: "/projects/weatherApp.png",
    imageFit: "contain",
    techStack: ["Python", "Flask", "React"],
    githubUrl: "https://github.com/SomanAbbasi/React-Weather-App",
    liveUrl: "https://www.linkedin.com/posts/soman-abbasi-a1820b344_react-flask-webdevelopment-activity-7362436442490302464-GCEw?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFYsJ_QBqqXdUJ0xpJqpqJ2F6z-_oo66ahY",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Python", "C/C++", "C#", "JavaScript", "TypeScript"],
  },
  {
    name: "Frontend",
    skills: ["React", "Next.js", "HTML5", "CSS3", "SASS", "Tailwind CSS", "Electron"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express.js", "Flask", "FastAPI", "ASP.NET Core (.NET)"],
  },
  {
    name: "Databases",
    skills: ["MySQL", "Oracle", "MongoDB", "Convex Database"],
  },
  {
    name: "Tools",
    skills: ["Git", "Figma", "Redis", "GraphQL", "Linux"],
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Bachelor of Science in Computer Science | CGPA: 3.78",
    organization: "PUCIT, University of the Punjab",
    duration: "2024 – 2028",
    location: "Lahore, Pakistan",
    points: [
      "Focused on core CS fundamentals including data structures, algorithms, and database systems",
    ],
    type: "education",
  },
  {
    id: "2",
    title: "Full-Stack Freelance Developer",
    organization: "Freelance",
    duration: "2026 – Present",
    location: "Remote",
    points: [
      "Delivered MERN / Next.js web applications for small clients, including food ordering and hospital websites",
      "Collaborated directly with clients to gather requirements, iterate on designs, and deliver high-quality solutions",
    ],
    type: "work",
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
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
