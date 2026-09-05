export const site = {
  name: "Varun Kiragi",
  headline: "Software developer building full-stack and AI-driven products.",
  role: "Software Developer",
  location: "United States",
  shortBio:
    "Focused on building reliable, user-focused products across web, mobile, and AI.",
  longBio:
    "I bring experience across full-stack systems, product-focused UI, and AI-enabled workflows. My work spans mobile apps, production security systems, and data-driven applications with a focus on performance, reliability, and thoughtful UX.",
  links: [
    {
      label: "Email",
      href: "mailto:varunkiragi@icloud.com",
    },
    {
      label: "GitHub",
      href: "https://github.com/vkiragi",
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
      label: "Resume",
      href: "/Varun_Kiragi_Resume.pdf",
    },
    {
      label: "Phone",
      href: "tel:+14085077026",
    },
  ],
  nav: [
    { label: "Ventures", href: "/#venture" },
    { label: "Work", href: "/#work" },
    { label: "Experience", href: "/#experience" },
    { label: "Education", href: "/#education" },
    { label: "Skills", href: "/#skills" },
    { label: "Contact", href: "/#contact" },
  ],
  hero: {
    intro:
      "Currently pursuing my M.S. in Computer Science at Georgia Tech. I build reliable, user-focused products across web, mobile, and AI — from iOS apps and ML systems to full-stack tools, with a focus on performance and thoughtful UX.",
  },
  sections: {
    venture: {
      title: "Ventures",
      subtitle: "A solo product I design, build, and grow.",
    },
    projects: {
      title: "Selected work",
      subtitle: "Engineering projects across ML, full-stack, and security.",
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
      subtitle:
        "Currently seeking full-time roles and internships — also open to interesting projects.",
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
      company: "Briefing",
      role: "Founder & Engineer",
      dates: "Nov 2025 - Present",
      highlights: [
        "Built and shipped a full-stack iOS app to the App Store with in-app subscriptions, delivering live scores and AI-powered bet tracking across 20+ sports including NFL, NBA, Tennis, and F1.",
        "Engineered a Python/FastAPI backend with real-time API integrations, deployed on Fly.io with rate limiting and connection pooling for production-scale performance.",
        "Built a React + TypeScript frontend with Capacitor for iOS, featuring machine learning-driven insights via Gemini 2.5 Flash and a personalized news feed.",
      ],
    },
    {
      company: "The Honey Jar",
      role: "Software Engineer Intern",
      dates: "Sep 2024 - Nov 2024",
      highlights: [
        "Led development of a Coin Flip game dApp on Berachain, integrating smart contract interactions with a Next.js and Tailwind CSS frontend.",
        "Optimized smart contracts for NFT projects, improving gas efficiency by 15% and increasing user interactions by 20% through enhanced dApp features.",
      ],
    },
    {
      company: "TeamcalAI",
      role: "Software Engineer Intern",
      dates: "May 2024 - Aug 2024",
      highlights: [
        "Engineered a voice assistant using React Native's Speech Recognition API as sole developer, enabling users to manage schedules via voice commands.",
        "Reduced app crashes through targeted bug-fixing and error handling; refactored legacy components and introduced a testing strategy that minimized regression bugs across releases.",
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
      specialization: "AI specialization",
      location: "Atlanta, GA",
      dates: "Jan 2025 - Apr 2027 (Expected)",
    },
    {
      school: "University of California, Davis",
      degree: "B.S. in Computer Science",
      location: "Davis, CA",
      dates: "Sep 2019 - Jun 2023",
    },
  ],
  projects: [
    {
      slug: "briefing",
      title: "Briefing",
      featured: true,
      category: "Full-stack · iOS",
      role: "Solo founder & engineer",
      status: "Live on the US App Store",
      timeframe: "Nov 2025 — present",
      summary:
        "Live sports scores, bet tracking, and analytics — all in one app. A full-stack sports platform that aggregates live scores, odds, and news across 20+ sports into a single dashboard. Users can track bets with detailed analytics, monitor prop lines in real-time, and pin games for quick access.",
      stack: ["React", "TypeScript", "Tailwind CSS", "FastAPI", "Python", "Supabase", "Netlify", "Fly.io"],
      links: {
        appStore: "https://apps.apple.com/us/app/briefing-sports-bet-tracker/id6758562551",
        live: "https://yourbriefing.io",
      },
      highlights: [
        "Live scores and odds across NFL, NBA, MLB, NHL, NCAA, Soccer (15+ leagues), F1, Tennis, and Boxing.",
        "Full bet tracking with parlay support, bankroll management, and performance analytics.",
        "Real-time prop line monitoring with automatic refresh.",
        "Favorite teams with personalized game feeds.",
        "Cross-platform — responsive web app and native iOS via Capacitor.",
      ],
      engineering: [
        "Built and shipped a full-stack iOS app to the App Store with in-app subscriptions, delivering live scores and AI-powered bet tracking across 20+ sports including NFL, NBA, Tennis, and F1.",
        "Engineered a Python/FastAPI backend with real-time API integrations, deployed on Fly.io with rate limiting and connection pooling for production-scale performance.",
        "Built a React + TypeScript frontend with Capacitor for iOS, featuring machine learning-driven insights via Gemini 2.5 Flash and a personalized news feed.",
      ],
    },
    {
      slug: "guardrail",
      title: "Guardrail",
      category: "AI Agent · Fintech",
      role: "lablab.ai × Alpaca hackathon",
      summary:
        "An autonomous options-trading agent that structurally cannot reach the broker except through a deterministic risk layer. An LLM produces trading opinions (bullish, bearish, or skip) while a rules engine holds veto power over every order, making risk management structural instead of a matter of trusting the prompt.",
      stack: [
        "Python",
        "OpenAI",
        "Alpaca API",
        "FastAPI",
        "SQLite",
        "Netlify",
      ],
      links: {
        live: "https://guardrail-hackathon.netlify.app",
        repo: "https://github.com/vkiragi/guardrail",
      },
      highlights: [
        "Separated the agent (opinions only) from a deterministic engine that evaluates six configurable risk gates with no network calls or hallucination exposure.",
        "Enforced drawdown halts, symbol allowlists, expiry windows, contract and position limits, and a market-close cutoff before any order reaches the broker.",
        "Selected contracts deterministically (always ATM, 7+ days to expiry, one contract, limit orders only) to avoid thin options books.",
        "Logged every decision and order to SQLite for a full audit trail, surfaced through a live dashboard.",
        "Backed the engine with 22 unit tests, treating the control layer (not trading alpha) as the core innovation.",
      ],
    },
    {
      slug: "nba-win-probability",
      title: "NBA Win-Probability Prediction",
      category: "Machine learning",
      summary:
        "End-to-end ML system that predicts NBA game win probabilities, served as an interactive web app with game-by-game backtest report cards.",
      stack: ["Python", "scikit-learn", "XGBoost", "Streamlit"],
      links: { live: "https://nba-win-probability.streamlit.app" },
      highlights: [
        "Engineered a leakage-safe pipeline validated with walk-forward testing over 22,800+ held-out games across 19 seasons.",
        "Prioritized proper scoring rules (log loss, Brier) and probability calibration over raw accuracy.",
        "Best model (logistic regression on Elo + rolling form/rest features) beat a strong Elo baseline while staying well-calibrated.",
        "Benchmarked against the betting market and honestly reported no edge after the house margin after debugging a data error.",
      ],
    },
    {
      slug: "mailfind",
      title: "MailFind",
      category: "Full-stack · AI",
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
      links: { repo: "https://github.com/vkiragi/MailFind" },
      highlights: [
        "Engineered a full-stack NLU search engine using GPT-5 nano to parse conversational queries into structured JSON, powering a hybrid search combining Supabase filters and pgvector similarity.",
        "Architected a Python/FastAPI backend with Google OAuth2, encrypted token storage via Fernet, and an async email indexing pipeline using open-source sentence-transformers for local vector embeddings.",
        "Built a Chrome Extension in React and TypeScript injecting a dynamic UI into the Gmail DOM with real-time streaming AI responses.",
      ],
    },
    {
      slug: "rampart-ai",
      title: "Rampart AI",
      role: "Contributor",
      category: "Security · ML",
      summary:
        "Security pipeline enhancements for data exfiltration detection in production.",
      stack: ["Kubernetes", "Python", "ML Services"],
      links: {
        repo: "https://github.com/arunrao/rampart-ai",
        repoLabel: "GitHub (upstream repo)",
      },
      highlights: [
        "Enhanced a production AI security pipeline by implementing Kubernetes-compatible readiness and liveness endpoints with real database and ML service verification.",
        "Designed weighted pattern scoring for data exfiltration detection, differentiating bulk vs. targeted commands and ambiguous indicators to improve detection accuracy.",
        "Contributed risk-based severity classification and open-sourced detection logic to the core DataExfiltrationMonitor, shipped in a production release.",
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
  skills: {
    languages: [
      "TypeScript",
      "JavaScript",
      "Python",
      "C",
      "Java",
      "SQL",
      "HTML",
      "CSS",
    ],
    frameworks: [
      "React",
      "Next.js",
      "React Native",
      "FastAPI",
      "Node.js",
      "PyTorch",
      "scikit-learn",
      "pandas",
      "NumPy",
      "Tailwind CSS",
      "Capacitor",
    ],
    tools: ["Docker", "Kubernetes", "CI/CD", "Git", "Linux", "PostgreSQL", "Supabase"],
  },
  footer: {
    text: "Open to full-time roles and impactful projects.",
  },
} as const;
