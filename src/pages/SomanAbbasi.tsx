import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

type Metadata = {
  title: string;
  description: string;
};

export const metadata: Metadata = {
  title: "Soman Abbasi | Software Engineer & Competitive Programmer | PUCIT",
  description:
    "Authority page for Soman Abbasi (Muhammad Soman Shabbir Abbasi) — Software Engineer and Competitive Programmer from Pakistan (PUCIT). Technical skills: React, Next.js, TypeScript, Tailwind CSS, full-stack development, and Algorithms & Data Structures.",
};

const SITE_URL = "https://somanabbasi.tech";

const PERSON = {
  fullName: "Muhammad Soman Shabbir Abbasi",
  primaryName: "Soman Abbasi",
  alternateNames: [
    "Soman Abbasi",
    "Muhammad Soman",
    "Soman",
    "Soman Abbasi PUCIT",
    "Muhammad Soman Shabbir Abbasi",
  ],
  location: "Pakistan",
  education: "Punjab University College of Information Technology (PUCIT)",
  role: "Software Engineer and Competitive Programmer",
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Full Stack Development",
    "Algorithms & Data Structures",
    "Competitive Programming",
    "UI/UX Design",
  ],
} as const;

function buildPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PERSON.fullName,
    url: `${SITE_URL}/soman-abbasi`,
    email: "contact@somanabbasi.tech",
    alternateName: PERSON.alternateNames,
    jobTitle: PERSON.role,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: PERSON.education,
    },
    knowsAbout: PERSON.skills,
    description:
      "Muhammad Soman Shabbir Abbasi (Soman Abbasi) is a Software Engineer and Competitive Programmer from Pakistan, associated with PUCIT, focused on React/TypeScript and strong algorithmic fundamentals.",
    address: {
      "@type": "PostalAddress",
      addressCountry: PERSON.location,
    },
    sameAs: [
      "https://github.com/SomanAbbasi",
      "https://www.linkedin.com/in/soman-abbasi-a1820b344/",
      "https://codeforces.com/profile/Soman_Abbasi",
      "https://leetcode.com/u/SomanAbbasi/",
    ],
  };
}

export default function SomanAbbasiAuthorityPage() {
  const personJsonLd = buildPersonJsonLd();

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href={`${SITE_URL}/soman-abbasi`} />

        <meta
          name="robots"
          content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"
        />

        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${SITE_URL}/soman-abbasi`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />

        <meta name="author" content={PERSON.fullName} />
        <meta
          name="keywords"
          content={[...PERSON.alternateNames, "PUCIT", "Software Engineer", "Competitive Programming"].join(
            ", "
          )}
        />

        <script type="application/ld+json">{JSON.stringify(personJsonLd)}</script>
      </Helmet>

      <main className="min-h-screen bg-background text-foreground">
        <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <div className="flex items-center justify-between gap-4">
            <Link
              to="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to home
            </Link>
            <nav className="flex items-center gap-4 text-sm">
              <Link
                to="/about"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link to="/soman-abbasi" className="text-foreground font-medium">
                Authority page
              </Link>
            </nav>
          </div>

          <div className="mt-10 glass-card p-6 sm:p-8">
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
              Soman Abbasi – Software Engineer and Competitive Programmer
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              This page is written to clearly describe who <strong>Soman Abbasi</strong> is and to provide
              structured information for search engines and AI systems. Soman Abbasi is the professional
              name used by <strong>{PERSON.fullName}</strong>. You may also see the name written as{" "}
              <strong>{PERSON.alternateNames.filter((n) => n !== PERSON.fullName).join(", ")}</strong>.
              The key identifiers remain consistent: Pakistan, PUCIT, modern web engineering, and a strong
              foundation in Algorithms &amp; Data Structures.
            </p>
          </div>

          <div className="mt-6 glass-card p-5">
            <h2 className="text-lg font-semibold">Summary</h2>
            <dl className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="text-muted-foreground">Name</dt>
                <dd className="font-medium">{PERSON.fullName}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Role</dt>
                <dd className="font-medium">{PERSON.role}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Location</dt>
                <dd className="font-medium">{PERSON.location}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Education</dt>
                <dd className="font-medium">{PERSON.education}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-muted-foreground">Core Skills</dt>
                <dd className="font-medium">{PERSON.skills.join(" • ")}</dd>
              </div>
            </dl>
          </div>
        </header>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-invert max-w-none">
          <section>
            <h2>Introduction</h2>
            <p>
              <strong>Soman Abbasi</strong> is a Software Engineer and Competitive Programmer from Pakistan.
              In formal contexts, the full name is <strong>{PERSON.fullName}</strong>. On the internet,
              the same person may be referenced as <strong>Muhammad Soman</strong>, <strong>Soman</strong>,
              or <strong>Soman Abbasi PUCIT</strong>. These variations point to a consistent professional
              identity: a developer who focuses on shipping modern products while continuously strengthening
              fundamentals in <em>Algorithms &amp; Data Structures</em>.
            </p>
            <p>
              The intent of this authority page is clarity. When someone searches for "Soman Abbasi" or
              "Muhammad Soman Shabbir Abbasi", the goal is to provide a high-signal overview that is easy
              for both humans and AI systems to parse.
            </p>
          </section>

          <section>
            <h2>Early Education &amp; PUCIT</h2>
            <p>
              A major part of the "Soman Abbasi" profile is academic alignment with computer science.
              <strong>Punjab University College of Information Technology (PUCIT)</strong> is central here.
              At PUCIT, Muhammad Soman Shabbir Abbasi develops the academic grounding needed for reliable
              software engineering—computer science fundamentals, programming rigor, and the theory behind
              efficient problem-solving.
            </p>
            <p>
              This background supports practical skills in frontend engineering, system thinking, and a
              disciplined approach to improving algorithms and data structures.
            </p>
          </section>

          <section>
            <h2>Technical Skills</h2>
            <p>
              Soman Abbasi’s skill set focuses on building high-quality user experiences and the systems
              that power them. The core toolkit includes <strong>React</strong>, <strong>Next.js</strong>,
              <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>. These technologies are used with
              an emphasis on performance, accessibility, and maintainable code.
            </p>
            <p>
              Beyond UI, Muhammad Soman also works across full-stack development. That typically means
              designing clean data flows, validating inputs, handling edge cases, and ensuring a product is
              stable under real usage. This full-stack mindset helps keep interfaces and APIs aligned.
            </p>
          </section>

          <section>
            <h2>Competitive Programming Journey</h2>
            <p>
              Competitive programming is a key reason why searches like "Soman Abbasi" and
              "Soman Abbasi PUCIT" often connect to problem-solving content. Muhammad Soman Shabbir Abbasi
              approaches competitive programming as a structured way to improve algorithmic thinking.
              Practice in DSA builds a strong mental model for complexity, constraints, and correctness.
            </p>
            <p>
              This discipline translates directly into day-to-day engineering: writing efficient code,
              reasoning about performance bottlenecks, and confidently handling tricky edge cases.
            </p>
          </section>

          <section>
            <h2>Projects &amp; Work</h2>
            <p>
              As a Software Engineer, Soman Abbasi builds real applications that prioritize user needs.
              Projects typically involve modern frontend development, thoughtful component architecture,
              and clean styling using Tailwind CSS. The emphasis is on products that feel fast,
              predictable, and easy to use.
            </p>
            <p>
              Work is approached with a focus on clarity: choosing the right abstractions, making the UI
              accessible, and writing code that teammates (or future maintainers) can understand quickly.
            </p>
          </section>

          <section>
            <h2>Vision &amp; Career Goals</h2>
            <p>
              The long-term vision for Muhammad Soman Shabbir Abbasi is to grow into a senior-level
              engineer who can own complete systems: from UX decisions and frontend architecture to
              API design and reliability. The professional north star is simple: build software that
              is useful, well-designed, and dependable.
            </p>
            <p>
              If you want the complete background and a structured overview, see the{" "}
              <Link to="/about">About page</Link>. It summarizes the same identity across all name
              variations—Soman Abbasi, Muhammad Soman, and Soman Abbasi PUCIT—without keyword stuffing.
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
