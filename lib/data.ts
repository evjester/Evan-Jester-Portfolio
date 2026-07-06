// Central content for the site. Edit copy here without touching components.

export const profile = {
  name: "Evan Jester",
  title: "AI Systems Builder",
  roles: "Founder @ Hoosier AI Solutions · Co-Founder @ Plaibook",
  // Hero
  headline: "I help businesses scale",
  headlineAccent: "using AI",
  subhead:
    "Founder, builder, and AI/ML student turning AI into products that actually work.",
  // Contact — confirm before publishing
  email: "jesterevan@gmail.com",
  phone: "(260) 249-0472",
  showPhone: false,
  linkedin: "https://www.linkedin.com/in/evanjester15",
  github: "https://github.com/evjester", // TODO confirm handle
  hoosierAi: "https://hoosierai.io",
  location: "Bloomington, IN",
  resume: "/resume.pdf",
  headshot: "/headshot.jpg",
  heroImage: "/hero-headshot-v2.png",
};

export type Project = {
  name: string;
  tagline: string;
  description: string;
  role?: string;
  year?: string;
  stack: string[];
  href?: string;
  accent?: "indigo" | "cyan" | "violet";
  logo?: string;
  logoLight?: string; // shown in light mode when the main logo is light-on-dark
};

// Flagship ventures (his companies)
export const ventures: Project[] = [
  {
    name: "Plaibook",
    tagline: "AI soccer analytics platform",
    description:
      "An AI coaching platform built around Tekki AI, a retrieval-augmented assistant that fuses a coaching knowledge base, live match data, and tactical reasoning. Coaches get instant answers, drill plans, set-piece templates, and an interactive tactical board, with computer-vision film analysis on the way.",
    role: "Co-Founder · Since 2025",
    stack: ["React", "Supabase", "pgvector", "OpenAI", "RAG", "Stripe", "Konva"],
    href: "https://plaibook.soccer",
    accent: "indigo",
    logo: "/logos/ventures/plaibook.png",
    logoLight: "/logos/ventures/plaibook-light.png",
  },
  {
    name: "Hoosier AI Solutions",
    tagline: "AI consulting & web-design agency",
    description:
      "My agency helping small businesses automate workflows and grow online. We build AI-powered dashboards (SEO analytics, content generation, automation), intelligent websites with integrated chatbots and lead systems, and a custom lead-gen CRM that scrapes, enriches, and runs outreach end-to-end.",
    role: "Founder · Since 2024",
    stack: ["Next.js", "Supabase", "OpenAI", "n8n", "Make.com", "Stripe"],
    href: "https://hoosierai.io",
    accent: "cyan",
    logo: "/logos/ventures/hoosier-ai.png",
  },
];

// Selected client work — names + high-level outcomes only. No confidential data/code/PII.
export type Client = {
  name: string;
  summary: string;
  tags: string[];
  logo: string;
};

export const clients: Client[] = [
  {
    name: "Ripple Boulder",
    summary:
      "A boutique bouldering gym in Broad Ripple, Indianapolis. Built their website, set up internal automations, and helped them scale from launch.",
    tags: ["Website", "Automations", "Growth"],
    logo: "/logos/clients/ripple-badge.png",
  },
  {
    name: "Empowered International",
    summary:
      "A non-profit providing business education and discipleship in Haiti, plus affordable housing in Fort Wayne. Built their marketing website and internal automations.",
    tags: ["Website", "Automations", "Non-profit"],
    logo: "/logos/clients/empowered-mark.png",
  },
  {
    name: "The Refuge",
    summary:
      "A Fort Wayne co-working and commercial leasing space with on-site residences. Built the website, internal automations, and a full client portal covering payments, leasing, maintenance, and door access.",
    tags: ["Website", "Automations", "Client portal"],
    logo: "/logos/clients/refuge.png",
  },
];

// The Lab — personal projects & experiments
export const labProjects: Project[] = [
  {
    name: "ES:EQ Trader",
    tagline: "Real-time trading dashboard",
    description:
      "A personal trading cockpit with live positions, equity curve, and strategy signals in one real-time view.",
    stack: ["React", "Vite", "Supabase"],
    accent: "cyan",
  },
  {
    name: "Kilroys",
    tagline: "Staff-scheduling engine",
    description:
      "A scheduling tool that turns availability and constraints into optimized staff rosters with a greedy assignment algorithm.",
    stack: ["Next.js", "TypeScript", "Algorithms"],
    accent: "violet",
  },
  {
    name: "Tactical Board",
    tagline: "Interactive coaching canvas",
    description:
      "A drag-and-drop tactical board for soccer with formations, drawing tools, keyframe animation, and GIF/PNG export. Now powering Plaibook.",
    stack: ["React", "Konva", "Zustand", "Framer Motion"],
    accent: "indigo",
  },
];

export const skillGroups: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["Python", "JavaScript / TypeScript", "HTML / CSS", "Java"] },
  {
    label: "AI & Systems",
    items: ["RAG systems", "Prompt engineering", "LLM workflows", "Vector search"],
  },
  { label: "Automation", items: ["n8n", "Make.com", "Webhooks"] },
  { label: "Web & Tools", items: ["Next.js", "React", "Supabase", "Figma", "Claude Code"] },
  { label: "Security", items: ["Linux", "Kali Linux", "Wireshark"] },
];

export type TimelineItem = {
  role: string;
  org: string;
  period: string;
  detail: string;
};

export const timeline: TimelineItem[] = [
  {
    role: "Co-Founder",
    org: "Plaibook",
    period: "Since 2025",
    detail:
      "Building Tekki AI: RAG + computer vision + tactical reasoning over a scalable data-ingestion and vector-search architecture.",
  },
  {
    role: "Founder",
    org: "Hoosier AI Solutions",
    period: "Since 2024",
    detail:
      "AI consulting and web design for small businesses: automation, AI dashboards, and intelligent lead systems.",
  },
  {
    role: "Head of Operations",
    org: "The District Entertainment",
    period: "Since 2026",
    detail: "Running day-to-day operations for an entertainment venue in Fort Wayne, IN.",
  },
  {
    role: "Bartender",
    org: "Kilroy's",
    period: "Since 2024",
    detail: "Bartending in Bloomington, IN. Fast pace, regulars, and steady hustle.",
  },
];

export const education = [
  {
    school: "University of Colorado Boulder",
    credential: "MS-Level Coursework in Artificial Intelligence",
    detail: "Coursera Pathway · In progress",
    period: "Expected Summer 2027",
  },
  {
    school: "Indiana University Bloomington",
    credential: "B.S. Informatics, Luddy School",
    detail: "Cognate: Cybersecurity · Minors: Web Design, Security",
    period: "May 2026",
  },
];

export const honors = [
  { label: "IT Security Basics Certificate", org: "Indiana University", year: "2023" },
  { label: "Instructional Assistant of the Year", org: "Luddy School", year: "2022" },
];

export const nav = [
  { label: "Work", href: "#ventures" },
  { label: "Clients", href: "#clients" },
  { label: "Lab", href: "#lab" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
