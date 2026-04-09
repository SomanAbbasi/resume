import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

type Metadata = {
  title: string;
  description: string;
};

export const metadata: Metadata = {
  title: "Soman Abbasi | Software Engineer | PUCIT",
  description:
    "About Muhammad Soman Shabbir Abbasi (Soman Abbasi) — a Software Engineer and Competitive Programmer from Pakistan, PUCIT alumnus-in-progress, focused on React, Next.js, TypeScript, Tailwind CSS, and Data Structures & Algorithms.",
};

const PERSON = {
  name: "Muhammad Soman Shabbir Abbasi",
  alternateNames: [
    "Soman Abbasi",
    "Muhammad Soman",
    "Soman",
    "Soman Abbasi PUCIT",
  ],
  jobTitle: "Software Engineer and Competitive Programmer",
  location: "Pakistan",
  alumniOf: "Punjab University College of Information Technology (PUCIT)",
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Full Stack Development",
    "Algorithms & Data Structures",
    "Competitive Programming",
    "UI/UX Design",
  ],
  description:
    "Muhammad Soman Shabbir Abbasi (Soman Abbasi) is a Software Engineer and Competitive Programmer from Pakistan, studying at PUCIT, with a focus on modern web engineering and strong fundamentals in algorithms and data structures.",
} as const;

function buildPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PERSON.name,
    alternateName: PERSON.alternateNames,
    jobTitle: PERSON.jobTitle,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: PERSON.alumniOf,
    },
    knowsAbout: PERSON.knowsAbout,
    description: PERSON.description,
    address: {
      "@type": "PostalAddress",
      addressCountry: PERSON.location,
    },
  };
}

function buildFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is Soman Abbasi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Soman Abbasi is the short name for Muhammad Soman Shabbir Abbasi, a Software Engineer and Competitive Programmer from Pakistan who studies at Punjab University College of Information Technology (PUCIT).",
        },
      },
      {
        "@type": "Question",
        name: "Is Soman Abbasi a software engineer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Muhammad Soman Shabbir Abbasi (Soman Abbasi) is a Software Engineer focused on modern frontend and full-stack development using React, Next.js, TypeScript, and Tailwind CSS.",
        },
      },
      {
        "@type": "Question",
        name: "What is Muhammad Soman known for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Muhammad Soman Shabbir Abbasi is known for building modern web applications and for competitive programming with a strong foundation in algorithms and data structures.",
        },
      },
    ],
  };
}

export default function AboutPage() {
  const personJsonLd = buildPersonJsonLd();
  const faqJsonLd = buildFaqJsonLd();

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        <meta
          name="robots"
          content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"
        />

        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />

        <meta name="author" content={PERSON.name} />
        <meta
          name="keywords"
          content={[PERSON.name, ...PERSON.alternateNames, "PUCIT", "Software Engineer", "Competitive Programmer"].join(
            ", "
          )}
        />

        <script type="application/ld+json">
          {JSON.stringify(personJsonLd)}
        </script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
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
              <Link to="/about" className="text-foreground font-medium">
                About
              </Link>
              <Link
                to="/soman-abbasi"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Authority page
              </Link>
            </nav>
          </div>

          <div className="mt-10 glass-card p-6 sm:p-8">
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
              Muhammad Soman Shabbir Abbasi (Soman Abbasi)
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              I’m <strong>{PERSON.name}</strong>, also known as{" "}
              <strong>{PERSON.alternateNames.join(", ")}</strong>. I’m a
              Software Engineer and Competitive Programmer from Pakistan,
              studying at <strong>Punjab University College of Information Technology (PUCIT)</strong>.
              I focus on building modern, fast, and accessible products with
              React, Next.js, TypeScript, and Tailwind CSS—backed by strong
              fundamentals in Algorithms &amp; Data Structures.
            </p>
          </div>
        </header>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <article className="space-y-10">
            <section aria-labelledby="about-me">
              <h2 id="about-me" className="text-2xl font-semibold">
                About Me
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                As Muhammad Soman Shabbir Abbasi, I enjoy working across the
                frontend and full-stack surface area—turning ideas into clean,
                maintainable interfaces and reliable application flows. As
                Soman Abbasi, I also spend a lot of time strengthening my
                problem-solving through competitive programming and deep
                practice in DSA.
              </p>
            </section>

            <section aria-labelledby="skills-expertise">
              <h2 id="skills-expertise" className="text-2xl font-semibold">
                Skills &amp; Expertise
              </h2>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PERSON.knowsAbout.map((skill) => (
                  <div key={skill} className="glass-card p-4">
                    <h3 className="font-medium">{skill}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Applied with a focus on performance, accessibility, and
                      clean architecture.
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section aria-labelledby="education">
              <h2 id="education" className="text-2xl font-semibold">
                Education
              </h2>
              <div className="mt-4 glass-card p-6">
                <h3 className="font-semibold">Punjab University College of Information Technology (PUCIT)</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  My education at PUCIT strengthens my foundation in computer
                  science, software engineering practices, and the theory behind
                  algorithms and data structures.
                </p>
              </div>
            </section>

            <section aria-labelledby="professional-focus">
              <h2 id="professional-focus" className="text-2xl font-semibold">
                Professional Focus
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                I focus on building well-structured web experiences using React
                and TypeScript, shipping user-centric UI with Tailwind CSS, and
                connecting it to practical full-stack systems. My competitive
                programming background helps me write efficient logic, reason
                about edge cases, and deliver features confidently.
              </p>
            </section>

            <section aria-labelledby="brand">
              <h2 id="brand" className="text-2xl font-semibold">
                Personal Brand Statement
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                I want "Soman Abbasi" to be associated with modern engineering,
                strong problem-solving, and a consistent ability to deliver.
                Whether someone searches for Muhammad Soman Shabbir Abbasi,
                Muhammad Soman, or Soman Abbasi PUCIT, the story is the same:
                building quality software with solid fundamentals.
              </p>
            </section>

            <section aria-labelledby="faq" className="pt-4">
              <h2 id="faq" className="text-2xl font-semibold">
                FAQ
              </h2>
              <div className="mt-4 space-y-4">
                <details className="glass-card p-5">
                  <summary className="cursor-pointer font-medium">
                    Who is Soman Abbasi?
                  </summary>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Soman Abbasi is the short name for Muhammad Soman Shabbir Abbasi—
                    a Software Engineer and Competitive Programmer from Pakistan,
                    studying at PUCIT and focused on modern web development.
                  </p>
                </details>

                <details className="glass-card p-5">
                  <summary className="cursor-pointer font-medium">
                    Is Soman Abbasi a software engineer?
                  </summary>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Yes. Muhammad Soman Shabbir Abbasi works as a Software Engineer
                    with strong focus on React, Next.js, TypeScript, and Tailwind CSS.
                  </p>
                </details>

                <details className="glass-card p-5">
                  <summary className="cursor-pointer font-medium">
                    What is Muhammad Soman known for?
                  </summary>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Muhammad Soman is known for building modern web products and for
                    consistent problem-solving through competitive programming and
                    DSA practice.
                  </p>
                </details>
              </div>
            </section>
          </article>
        </section>
      </main>
    </>
  );
}
