# TODO: SEO Metadata Implementation

## Task P1 3.1.2 — Add Core SEO Metadata

### Steps Completed:
- [x] Analyze existing codebase and index.html
- [x] Review all page components
- [x] Get user confirmation on plan
- [x] Install react-helmet package
- [x] Create SEOHead React component for page-specific meta tags
- [x] Update index.html with new meta description and schema.org JSON-LD
- [x] Add SEO meta tags to Index page (Homepage)
- [x] Add SEO meta tags to About page
- [x] Add SEO meta tags to Technology page
- [x] Add SEO meta tags to Applications page
- [x] Add SEO meta tags to Research page
- [x] Add SEO meta tags to Contact page

### Implementation Summary:

**Meta Description (155 chars):**
> "TRIBOT is an AI-powered multilingual triage system for Emergency Departments, developed by UNSW Medicine & Health to reduce triage delays and improve equity in Australian EDs."

**Components Created:**
- `src/components/SEOHead.tsx` - Reusable SEO component using react-helmet

**Files Updated:**
- `index.html` - Global meta tags, OG tags, Twitter Cards, and schema.org JSON-LD
- `src/pages/Index.tsx` - Homepage SEO
- `src/pages/About.tsx` - Team/institution page SEO
- `src/pages/Technology.tsx` - Technology page SEO
- `src/pages/Applications.tsx` - Applications page SEO
- `src/pages/Research.tsx` - Research page SEO
- `src/pages/Contact.tsx` - Contact page SEO

**Schema.org Markup:**
- SoftwareApplication (TRIBOT)
- MedicalOrganization (TRIBOT Research Team)
- WebSite

**Open Graph Tags:**
- og:title, og:description, og:image, og:url, og:type, og:site_name
- Twitter Card: summary_large_image

**OG Image:** /tribot-logo.png (local asset)
