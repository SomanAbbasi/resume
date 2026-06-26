import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { personalInfo } from "@/lib/data";
import {
  SITE_URL,
  fullName,
  alternateNames,
  knowsAbout,
  buildPersonJsonLd,
  profileImageAlt,
} from "@/lib/seo";

const authorityTitle =
  "Soman Abbasi | Muhammad Soman Shabbir Abbasi | Full-Stack Engineer & AI Integrator";

const authorityDescription =
  "Official authority page for Muhammad Soman Shabbir Abbasi (Soman Abbasi) — Full-Stack Engineer & AI Integrator from Pakistan (PUCIT). Identity, skills, projects, and verified profiles at somanabbasi.tech.";

export default function SomanAbbasiAuthorityPage() {
  const personJsonLd = buildPersonJsonLd(`${SITE_URL}/soman-abbasi`);

  return (
    <>
      <SEO
        title={authorityTitle}
        description={authorityDescription}
        path="/soman-abbasi"
        type="article"
        jsonLd={personJsonLd}
      />

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
            <div className="flex flex-col sm:flex-row gap-8 items-start">
              <figure className="shrink-0 mx-auto sm:mx-0">
                <img
                  src={personalInfo.profileImageSeo}
                  alt={profileImageAlt}
                  width={200}
                  height={200}
                  className="w-48 h-48 rounded-full object-cover border border-border"
                  loading="eager"
                />
                <figcaption className="sr-only">{profileImageAlt}</figcaption>
              </figure>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                  Soman Abbasi — Full-Stack Engineer &amp; AI Integrator
                </h1>
                <p className="mt-2 text-muted-foreground font-medium">
                  {fullName}
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  This is the official authority page for{" "}
                  <strong>Muhammad Soman Shabbir Abbasi</strong>, professionally
                  known as <strong>Soman Abbasi</strong>. It provides structured
                  information for search engines and AI systems. You may also find
                  this person under{" "}
                  <strong>
                    {alternateNames
                      .filter((n) => n !== fullName)
                      .slice(0, 4)
                      .join(", ")}
                  </strong>
                  . Official website:{" "}
                  <a
                    href={SITE_URL}
                    className="text-primary hover:underline"
                  >
                    somanabbasi.tech
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 glass-card p-5">
            <h2 className="text-lg font-semibold">Summary</h2>
            <dl className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="text-muted-foreground">Full Name</dt>
                <dd className="font-medium">{fullName}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Professional Name</dt>
                <dd className="font-medium">Soman Abbasi</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Role</dt>
                <dd className="font-medium">{personalInfo.title}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Location</dt>
                <dd className="font-medium">Lahore, Pakistan</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Education</dt>
                <dd className="font-medium">
                  PUCIT, University of the Punjab (BSc CS)
                </dd>
              </div>
              <div>
                <dt className="text-muted-foreground">LinkedIn</dt>
                <dd className="font-medium">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="me noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    linkedin.com/in/soman-abbasi
                  </a>
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-muted-foreground">Core Skills</dt>
                <dd className="font-medium">{knowsAbout.join(" • ")}</dd>
              </div>
            </dl>
          </div>
        </header>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-invert">
          <section>
            <h2>Who is Soman Abbasi?</h2>
            <p>
              <strong>Soman Abbasi</strong> is the professional name of{" "}
              <strong>{fullName}</strong>, a Full-Stack Engineer &amp; AI
              Integrator based in Lahore, Pakistan. He builds scalable web
              applications, APIs, and intelligent software systems using React,
              Next.js, TypeScript, Node.js, and AI frameworks such as LangChain
              and LangGraph.
            </p>
            <p>
              When people search for &quot;Soman Abbasi&quot;, &quot;Muhammad
              Soman&quot;, &quot;Muhammad Soman Shabbir&quot;, or &quot;
              {fullName}&quot;, this page and{" "}
              <a href={SITE_URL}>somanabbasi.tech</a> are the authoritative
              sources for this individual.
            </p>
          </section>

          <section>
            <h2>Disambiguation</h2>
            <p>
              Multiple people may share the name &quot;Soman Abbasi&quot; on the
              internet. The person described on this page is specifically{" "}
              <strong>{fullName}</strong> — associated with{" "}
              <strong>PUCIT</strong>, <strong>somanabbasi.tech</strong>, and the
              LinkedIn profile at{" "}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/soman-abbasi-a1820b344
              </a>
              . He is a software engineer and AI integrator, not a financial
              analyst or other profession.
            </p>
          </section>

          <section>
            <h2>Education &amp; PUCIT</h2>
            <p>
              Muhammad Soman Shabbir Abbasi studies Computer Science at{" "}
              <strong>
                Punjab University College of Information Technology (PUCIT)
              </strong>
              , University of the Punjab, with a focus on data structures,
              algorithms, and software engineering fundamentals.
            </p>
          </section>

          <section>
            <h2>Technical Skills &amp; AI Integration</h2>
            <p>
              Soman Abbasi works across the full stack — frontend (React,
              Next.js, TypeScript, Tailwind CSS), backend APIs, databases
              (PostgreSQL, MongoDB), and AI integrations including LLM chatbots,
              RAG pipelines, and multi-agent systems. He has production
              experience building AI-powered workflows at SKAFS International.
            </p>
          </section>

          <section>
            <h2>Competitive Programming</h2>
            <p>
              Beyond professional development, Muhammad Soman maintains active
              profiles on{" "}
              <a
                href={personalInfo.codeforces}
                target="_blank"
                rel="noopener noreferrer"
              >
                Codeforces
              </a>{" "}
              and{" "}
              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noopener noreferrer"
              >
                LeetCode
              </a>
              , with achievements including ICPC Regional Contest participation
              and competitive programming medals.
            </p>
          </section>

          <section>
            <h2>Verified Profiles</h2>
            <ul>
              <li>
                <a href={SITE_URL}>somanabbasi.tech</a> — Official portfolio
              </li>
              <li>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="me noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="me noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.fiverr}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fiverr
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Upwork
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2>Learn More</h2>
            <p>
              For projects, experience, and contact details, visit the{" "}
              <Link to="/about">About page</Link>,{" "}
              <Link to="/projects">Projects</Link>, and{" "}
              <Link to="/contact">Contact</Link> sections on{" "}
              <a href={SITE_URL}>somanabbasi.tech</a>.
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
