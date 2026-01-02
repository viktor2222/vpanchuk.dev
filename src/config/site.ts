export type PersonalInfo = {
  name: string;
  role: string;
  location: string;
  email: string;
  about: string[];
  education: string;
  languages: string;
};

export type SocialLinks = {
  github: string;
  linkedin: string;
  upwork: string;
};

export type ExperienceItem = {
  title: string;
  company: string;
  duration: string;
  technologies: string[];
  description: string[];
};

export type SkillCategory = {
  title: string;
  items: string[];
};

export const personal: PersonalInfo = {
  name: "Viktor Panchuk",
  role: "Frontend Developer",
  location: "Rivne, Ukraine",
  email: "vpanchukdev@gmail.com",
  about: [
    "I’m a Frontend Developer with over 7 years of experience building modern web applications.",
    "For the last 5+ years, I’ve been working primarily with React and Next.js, developing high-performance, SEO-optimized, and scalable interfaces.",
    "I have strong experience collaborating with backend teams, integrating third-party services (Stripe, Clerk, OpenAI), and turning complex requirements into clean, maintainable UI solutions."
  ],
  education: "Master's in Computer Science",
  languages: "Ukrainian (Native), English (Intermediate)",
};

export const socials: SocialLinks = {
  github: "https://github.com/viktor2222",
  linkedin: "https://www.linkedin.com/in/viktor-panchuk-43295215b/",
  upwork: "https://www.upwork.com/freelancers/~011a8c66e1b4df0b03",
};

export const experience: ExperienceItem[] = [
  {
    title: "Frontend Engineer",
    company: "Osum (AI Intelligence)",
    duration: "Jan 2023 – Present",
    technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "OpenAI API", "Clerk", "Stripe"],
    description: [
      "Architected a market intelligence platform transforming raw data into actionable visual insights.",
      "Implemented streaming AI responses and real-time chart updates using Next.js App Router.",
      "Integrated Stripe subscriptions and Clerk authentication for secure user access."
    ]
  },
  {
    title: "Frontend Engineer",
    company: "Immersia",
    duration: "2025",
    technologies: ["Angular (v19)", "Firebase", "Tailwind CSS v4", "DaisyUI", "RxJS"],
    description: [
      "Architected a scalable educational platform using bleeding-edge Angular and Tailwind v4.",
      "Implemented real-time data sync and user management using Firebase ecosystem.",
      "Built a comprehensive UI kit with DaisyUI for consistent design across the application."
    ]
  },
  {
    title: "Web3 Frontend Engineer",
    company: "DeFi Protocols (Armor / Mochi / Sentry / Concur / Cyberfrogs)",
    duration: "2021 – 2023",
    technologies: ["React", "Ethers.js", "Lightweight Charts", "Framer Motion", "i18n"],
    description: [
      "Built a high-performance decentralized exchange interface with real-time trading charts.",
      "Developed complex multi-step transaction flows for staking and liquidity provision.",
      "Localized the platform for global markets using i18n and optimized bundle size."
    ]
  },
  {
    title: "Frontend Developer",
    company: "Licensing Brands",
    duration: "2019 – 2020",
    technologies: ["Next.js", "Leaflet Maps", "React Player", "Framer Motion"],
    description: [
      "Developed interactive marketing platforms featuring complex map integrations and media playback.",
      "Optimized performance for media-heavy pages aiming for high Core Web Vitals scores.",
      "Collaborated with design teams to implement pixel-perfect, responsive animated interfaces."
    ]
  },
  {
    title: "Frontend Developer",
    company: "Whitedot (Upwork)",
    duration: "2018 – 2019",
    technologies: ["Gatsby", "React", "Styled Components", "React Reveal", "GraphQL"],
    description: [
      "Delivered my first major commercial project, a high-performance marketing site for a design agency.",
      "Implemented complex scroll animations and creative UI effects using React Reveal and Styled Components.",
      "Achieved perfect Lighthouse performance scores using Gatsby static site generation."
    ]
  }
];

export const skills: SkillCategory[] = [
  {
    title: "Modern Frontend",
    items: [
      "React (v18+)", "Next.js (App Router)", "TypeScript", "Angular (v17+ basics)", 
      "TanStack Query", "Zustand / Redux", "Astro", "Gatsby", "RxJS", "Server Components", 
      "Vite / Webpack", "i18n / Localization", "Web Vitals"
    ]
  },
  {
    title: "UI & Animation",
    items: [
      "Tailwind CSS", "Framer Motion", "React Spring", "Shadcn/UI", 
      "Material UI", "DaisyUI", "Headless UI", "Styled Components", 
      "SASS / SCSS", "Data Visualization", "Responsive Design"
    ]
  },
  {
    title: "Web3 Integration",
    items: [
      "Solidity", "Hardhat", "Ethers.js / Web3.js", 
      "Smart Contracts", "OpenZeppelin", "WalletConnect", "The Graph", 
      "DeFi Protocols", "DApp Architecture", "Gas Optimization"
    ]
  },
  {
    title: "Backend & Services",
    items: [
      "Node.js", "Prisma", "Supabase / Firebase", 
      "CI/CD (GitHub Actions)", "Stripe Payments", "Clerk Auth", 
      "PostHog / Analytics", "Serverless Functions", "REST / GraphQL", "WebSockets"
    ]
  }
];
