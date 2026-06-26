import { personalInfo } from "@/lib/data";

export const SITE_URL = "https://www.somanabbasi.tech";
export const SITE_NAME = "Soman Abbasi Portfolio";

export const fullName = "Muhammad Soman Shabbir Abbasi";

export const alternateNames = [
  "Soman Abbasi",
  "Muhammad Soman",
  "Muhammad Soman Shabbir",
  "Muhammad Soman Shabbir Abbasi",
  "Soman Abbasi PUCIT",
] as const;

export const defaultTitle =
  "Muhammad Soman Shabbir Abbasi (Soman Abbasi) | Full-Stack Engineer & AI Integrator";

export const defaultDescription = personalInfo.metaDescription;

export const profileImage = `${SITE_URL}/soman-abbasi-profile.jpeg`;
export const profileImageAlt = `${fullName} (Soman Abbasi) — Full-Stack Engineer & AI Integrator`;

export const knowsAbout = [
  "Full-Stack Development",
  "AI Integration",
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "REST APIs",
  "LangChain",
  "LangGraph",
  "RAG Pipelines",
  "AI Agents",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS",
  "Algorithms & Data Structures",
  "Competitive Programming",
] as const;

export const sameAs = [
  personalInfo.linkedin,
  personalInfo.github,
  personalInfo.fiverr,
  personalInfo.upwork,
  personalInfo.codeforces,
  personalInfo.leetcode,
  SITE_URL,
] as const;

export function buildPersonJsonLd(pageUrl = SITE_URL) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: fullName,
    givenName: "Muhammad Soman",
    familyName: "Shabbir Abbasi",
    alternateName: [...alternateNames],
    url: pageUrl,
    image: {
      "@type": "ImageObject",
      url: profileImage,
      caption: profileImageAlt,
    },
    email: personalInfo.secondaryEmail,
    jobTitle: personalInfo.title,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Punjab University College of Information Technology (PUCIT)",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "Pakistan",
      addressLocality: "Lahore",
    },
    knowsAbout: [...knowsAbout],
    sameAs: [...sameAs],
    description: personalInfo.metaDescription,
    worksFor: {
      "@type": "Organization",
      name: "SKAFS International (Pvt) Ltd",
    },
  };
}

export function buildWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: defaultDescription,
    author: { "@id": `${SITE_URL}/#person` },
    publisher: { "@id": `${SITE_URL}/#person` },
    inLanguage: "en",
  };
}

export type PageSeoProps = {
  title?: string;
  description?: string;
  path?: string;
  type?: "website" | "article";
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};