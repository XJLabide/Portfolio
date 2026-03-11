export const navSections = [
  { name: "Xander", href: "hero" },
  { name: "About", href: "about" },
  { name: "Projects", href: "projects" },
  { name: "Skills", href: "skills" },
  { name: "Approach", href: "approach" },
  { name: "Contact", href: "contact" },
] as const;

export type NavSectionId = (typeof navSections)[number]["href"];

export const projects = [
  {
    title: "Frugal",
    eyebrow: "Personal Finance",
    description:
      "A budgeting and money-tracking product focused on helping users understand spending patterns, monitor expenses, and make more intentional financial decisions.",
    stack: ["Product UI", "Frontend", "Personal Finance"],
    repoUrl: "https://github.com/XJLabide/Frugal",
    imagePosition: "left" as const,
  },
  {
    title: "FitPlan AI",
    eyebrow: "AI Fitness Tool",
    description:
      "An AI-assisted fitness planning experience designed to turn user goals into structured routines, guidance, and more personalized workout support.",
    stack: ["AI", "LLM Workflow", "Fitness"],
    repoUrl: "https://github.com/XJLabide/FitPlan-AI",
    imagePosition: "right" as const,
  },
  {
    title: "Unravel",
    eyebrow: "AI-Powered Product",
    description:
      "A product built around AI-enhanced interaction and problem solving, combining interface clarity with more intelligent user assistance.",
    stack: ["AI Tooling", "UX", "System Design"],
    repoUrl: "https://github.com/XJLabide/Unravel",
    imagePosition: "left" as const,
  },
];

export const skillsContent = [
  {
    title: "AI Systems",
    description:
      "Designing and shaping intelligence-powered experiences that go beyond prompts into usable products.",
    eyebrow: "01 / Applied Intelligence",
    accent: "#c2ff6b",
    stack: ["OpenAI", "Prompt Design", "RAG Thinking", "LLM Workflows"],
    items: [
      "LLM-powered interfaces and AI-assisted user flows",
      "Retrieval-aware product thinking for grounded experiences",
      "System behavior design around usefulness, tone, and trust",
    ],
  },
  {
    title: "Automation Workflows",
    description:
      "Turning repetitive operations into orchestrated flows that save time and reduce friction for users and teams.",
    eyebrow: "02 / Workflow Logic",
    accent: "#ff7b54",
    stack: ["n8n", "API Integrations", "Automation Design", "Tooling"],
    items: [
      "AI-enhanced automations that connect tools, prompts, and outcomes",
      "Workflow design for real operational use instead of demo-only setups",
      "Systemized logic for intake, generation, delivery, and follow-through",
    ],
  },
  {
    title: "Frontend Experience",
    description:
      "Building interfaces that feel intentional, cinematic, and technically disciplined across devices.",
    eyebrow: "03 / Interface Craft",
    accent: "#7dd3fc",
    stack: ["React", "Next.js", "Tailwind CSS", "Motion"],
    items: [
      "Responsive product surfaces with strong hierarchy and interaction rhythm",
      "Editorial-style UI systems with modern frontend execution",
      "Motion and layout used to support narrative, not distract from it",
    ],
  },
  {
    title: "Backend and Delivery",
    description:
      "Supporting the product layer with practical backend decisions, data structure, and shipping discipline.",
    eyebrow: "04 / Systems Backbone",
    accent: "#f6f1e8",
    stack: ["Supabase", "PostgreSQL", "REST APIs", "Deployment"],
    items: [
      "API integration, data modeling, and service-level product logic",
      "Supabase and PostgreSQL-backed workflows for modern applications",
      "Shipping client-ready builds with maintainability and clarity in mind",
    ],
  },
];

export const achievementCards = [
  {
    description: "4th Placer",
    title: "Techvocacy On-The-Spot Web Development",
    eyebrow: "Competition",
    metric: "Live Build Sprint",
    visual: {
      type: "image",
      src: "/images/techvocacy.jpg",
      style: "portrait",
    },
    content:
      "Placed 4th in an on-the-spot web development event that required fast execution, clean UI decisions, and practical implementation under time pressure.",
  },
  {
    description: "3rd Placer and Finalist",
    title: "CodeChum National Programming Competition",
    eyebrow: "Programming",
    metric: "National Finalist",
    visual: {
      type: "image",
      src: "/images/Codechum.jpg",
      style: "portrait",
    },
    content:
      "Finished as a finalist and 3rd placer in a national programming competition, reflecting strong problem solving, algorithmic thinking, and consistency under pressure.",
  },
  {
    description: "Level 2 Passer",
    title: "Test of Practical Competency in ICT (TOPCIT)",
    eyebrow: "Assessment",
    metric: "Systems Thinking",
    visual: {
      type: "text",
      badge: "TOPCIT",
      accent: "#ff3b30",
      rotation: -8,
    },
    content:
      "Achieved a Level 2 TOPCIT result, demonstrating practical ICT competency across software development, systems thinking, and technical problem solving.",
  },
  {
    description: "Certification",
    title: "Cisco Certified CyberOps Associate",
    eyebrow: "Security",
    metric: "Operations + Defense",
    visual: {
      type: "text",
      badge: "CYBEROPS",
      accent: "#c2ff6b",
      rotation: 0,
    },
    content:
      "Earned the CyberOps Associate certification, strengthening knowledge in security operations, monitoring, incident handling, and foundational defensive security practices.",
  },
];
