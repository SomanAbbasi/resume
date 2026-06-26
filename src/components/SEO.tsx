import { Helmet } from "react-helmet-async";
import {
  SITE_URL,
  SITE_NAME,
  defaultTitle,
  defaultDescription,
  profileImage,
  profileImageAlt,
  fullName,
  alternateNames,
  type PageSeoProps,
} from "@/lib/seo";

const robots =
  "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1";

export default function SEO({
  title = defaultTitle,
  description = defaultDescription,
  path = "/",
  type = "website",
  jsonLd,
}: PageSeoProps) {
  const canonical = `${SITE_URL}${path === "/" ? "/" : path}`;
  const keywords = [...alternateNames, "PUCIT", personalInfoKeywords()].join(
    ", "
  );

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={fullName} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={profileImage} />
      <meta property="og:image:alt" content={profileImageAlt} />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="800" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={profileImage} />
      <meta name="twitter:image:alt" content={profileImageAlt} />

      {jsonLd ? (
        <script type="application/ld+json">
          {serializeJsonLd(jsonLd)}
        </script>
      ) : null}
    </Helmet>
  );
}

function personalInfoKeywords() {
  return [
    "Full-Stack Engineer",
    "AI Integrator",
    "Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "LangChain",
    "somanabbasi.tech",
  ];
}

function serializeJsonLd(
  jsonLd: Record<string, unknown> | Record<string, unknown>[]
) {
  if (Array.isArray(jsonLd)) {
    return JSON.stringify({
      "@context": "https://schema.org",
      "@graph": jsonLd,
    });
  }
  return JSON.stringify(jsonLd);
}
