import Helmet from "react-helmet";

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

const SEOHead = ({
  title = "TRIBOT - AI-Powered Multilingual Triage System",
  description = "TRIBOT is an AI-powered multilingual triage system for Emergency Departments, developed by UNSW Medicine & Health to reduce triage delays and improve equity in Australian EDs.",
  image = "/tribot-logo.png",
  url = "https://tribot.health",
  type = "website",
  author,
  publishedTime,
  modifiedTime,
  section,
  tags = [],
}: SEOHeadProps) => {
  const siteName = "TRIBOT";
  const twitterHandle = "@TRIBOT_AU";

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="author" content={author || "TRIBOT, UNSW Medicine & Health"} />
      <meta name="keywords" content="AI triage, emergency care, multilingual AI, healthcare technology, emergency department, medical AI, patient safety, TRIBOT, UNSW" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={url} />
      {author ? <meta property="article:author" content={author} /> : null}
      {publishedTime ? <meta property="article:published_time" content={publishedTime} /> : null}
      {modifiedTime ? <meta property="article:modified_time" content={modifiedTime} /> : null}
      {section ? <meta property="article:section" content={section} /> : null}
      {tags.length > 0 ? <meta property="article:tag" content={tags.join(", ")} /> : null}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {author ? <meta name="twitter:creator" content={author} /> : null}
    </Helmet>
  );
};

export default SEOHead;
