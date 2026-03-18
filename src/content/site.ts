export const site = {
  name: "Varun Kiragi",
  headline: "Software developer building full-stack and AI-driven products.",
  role: "Software Developer",
  location: "United States",
  shortBio:
    "Focused on building reliable, user-focused products across web, mobile, and AI.",
  longBio:
    "I bring experience across full-stack systems, product-focused UI, and AI-enabled workflows. My work spans smart contract dApps, production security systems, and data-driven applications with a focus on performance, reliability, and thoughtful UX.",
  links: [
    {
      label: "Email",
      href: "mailto:varunkiragi@icloud.com",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/vkiragi/",
    },
    {
      label: "Website",
      href: "https://varun-kiragi.netlify.app/",
    },
    {
      label: "Phone",
      href: "tel:+14085077026",
    },
  ],
  nav: [
    { label: "Home", href: "/" },
    { label: "Work", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  hero: {
    kicker: "Software Developer",
    primaryCta: { label: "View Projects", href: "/projects" },
    secondaryCta: { label: "Contact Me", href: "/contact" },
  },
  sections: {
    projects: {
      title: "Work",
      subtitle: "Selected engineering work across full-stack, AI, and Web3.",
    },
    experience: {
      title: "Experience",
      subtitle: "Internships and production-impact engineering work.",
    },
    education: {
      title: "Education",
      subtitle: "Academic foundation in computer science.",
    },
    skills: {
      title: "Skills",
      subtitle: "Languages, frameworks, and tools used in production.",
    },
    about: {
      title: "About",
      subtitle: "Focus, impact, and the work I enjoy most.",
    },
    contact: {
      title: "Contact",
      subtitle: "Open to full-time roles and collaborations.",
    },
  },
  labels: {
    stack: "Stack",
    highlights: "Highlights",
    projectLinks: "Project Links",
    viewLive: "Live",
    viewCode: "GitHub",
    viewProject: "View project",
    backToProjects: "Back to projects",
    seeAllProjects: "See all projects",
    menuOpen: "Menu",
    menuClose: "Close",
    roleLabel: "Role",
    locationLabel: "Location",
    summaryLabel: "Summary",
  },
  experience: [
    {
      company: "The Honey Jar",
      role: "Software Engineer Intern",
      dates: "Sep 2024 - Nov 2024",
      highlights: [
        "Led development of a Coin Flip dApp on Berachain with Next.js and Tailwind CSS.",
        "Optimized NFT smart contracts, improving gas efficiency by 15%.",
        "Debugged and enhanced blockchain indexer workflows for transaction analytics.",
      ],
    },
    {
      company: "TeamcalAI",
      role: "Software Engineer Intern",
      dates: "May 2024 - Aug 2024",
      highlights: [
        "Built a voice assistant bot in React Native with speech recognition.",
        "Reduced crashes by spearheading bug-fix and stability improvements.",
        "Introduced testing, error handling, and refactoring practices.",
      ],
    },
    {
      company: "MyAIChef",
      role: "Software Engineer Intern",
      dates: "Jun 2023 - Mar 2024",
      highlights: [
        "Optimized Python web scraping pipelines using pandas and Beautiful Soup.",
        "Revamped React Native UI for smoother navigation and input flows.",
        "Improved data handling for faster execution and better engagement.",
      ],
    },
  ],
  education: [
    {
      school: "Georgia Institute of Technology",
      degree: "M.S. in Computer Science",
      dates: "Jan 2025 - Apr 2027",
    },
    {
      school: "University of California, Davis",
      degree: "B.S. in Computer Science",
      dates: "Sep 2019 - Jun 2023",
    },
  ],
  projects: [
    {
      slug: "briefing",
      title: "Briefing",
      summary:
        "Sports and news tracking platform with FastAPI backend and React frontend.",
      stack: ["FastAPI", "React", "Python", "Netlify", "Docker"],
      links: { live: "https://yourbriefing.io", repo: "https://github.com/vkiragi/your-briefing" },
      highlights: [
        "Integrated web scraping and public APIs for real-time updates.",
        "Built a terminal-based CLI with Rich alongside a modern web UI.",
        "Containerized backend and implemented CI/CD via GitHub Actions.",
      ],
    },
    {
      slug: "mailfind",
      title: "MailFind",
      summary:
        "Full-stack NLU search engine that converts conversational email queries into structured, high-precision search.",
      stack: [
        "FastAPI",
        "Python",
        "Supabase",
        "pgvector",
        "React",
        "TypeScript",
      ],
      links: {},
      highlights: [
        "Built GPT-5 nano query parsing for structured JSON search inputs.",
        "Designed OAuth2 flow with encrypted token storage and async indexing.",
        "Shipped a Gmail-injected Chrome extension with real-time AI responses.",
      ],
    },
    {
      slug: "rampart-ai",
      title: "Rampart AI",
      summary:
        "Security pipeline enhancements for data exfiltration detection in production.",
      stack: ["Kubernetes", "Python", "ML Services"],
      links: {},
      highlights: [
        "Implemented readiness/liveness endpoints with real service checks.",
        "Designed weighted pattern scoring to improve detection accuracy.",
        "Enabled risk-based severity classification for safer automated blocking.",
      ],
    },
    {
      slug: "stock-sentiment-analyzer",
      title: "Stock Sentiment Analyzer",
      summary:
        "Real-time NLP pipeline for high-volume financial tweet sentiment.",
      stack: ["Python", "Spark", "VADER", "Streaming"],
      links: {},
      highlights: [
        "Processed 10,000+ tweets/min with structured streaming.",
        "Extracted ticker symbols with >98% accuracy.",
        "Aggregated 5-min sliding window sentiment with <2s latency.",
      ],
    },
  ],
  skills: [
    "TypeScript",
    "JavaScript",
    "Java",
    "Python",
    "HTML",
    "CSS",
    "SQL",
    "Next.js",
    "React",
    "Node.js",
    "PyTorch",
    "TensorFlow",
    "pandas",
    "NumPy",
    "scikit-learn",
    "Tailwind CSS",
  ],
  featuredItems: [
    {
      image: "/images/illustrations/feature-1.svg",
      title: "Projects",
      description: "Full-stack, AI, and Web3 engineering work I've shipped.",
      cta: { label: "View All", href: "/projects" },
    },
    {
      image: "/images/illustrations/feature-2.svg",
      title: "Experience",
      description:
        "Internships and engineering roles in production environments.",
      cta: { label: "Learn More", href: "/about" },
    },
    {
      image: "/images/illustrations/feature-3.svg",
      title: "Get in Touch",
      description:
        "Open to full-time roles, collaborations, and conversations.",
      cta: { label: "Contact Me", href: "/contact" },
    },
  ],
  footer: {
    text: "Open to full-time roles and impactful projects.",
  },
} as const;
