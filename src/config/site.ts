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
    title: "Frontend Developer",
    company: "Osum (AI powered)",
    duration: "Jan 2023 – May 2025",
    description: [
      "Built frontend of an AI-powered business intelligence platform using Next.js, Tailwind, and shadcn/ui.",
      "Integrated Stripe, Clerk, OpenAI, and Cloudinary APIs.",
      "Improved performance and SEO by optimizing rendering, data fetching, and asset loading.",
      "Delivered responsive dashboards with PDF export functionality."
    ]
  },
  {
    title: "Frontend Developer",
    company: "Crypto Projects (Armor, Mochi, Sentry)",
    duration: "2020 – 2023",
    description: [
      "Developed decentralized apps, dutch auctions, and token launch platforms.",
      "Connected smart contracts with frontend for reliable on-chain interaction.",
      "Integrated wallet providers and optimized performance for 5k+ concurrent users.",
      "Contributed to successful token launches."
    ]
  },
  {
    title: "Frontend Developer",
    company: "Freelance",
    duration: "2017 – 2020",
    description: [
      "Delivered websites and web apps using React, Gatsby, jQuery.",
      "Focused on responsive UI, bug fixing, and cross-browser compatibility."
    ]
  }
];

export const skills: SkillCategory[] = [
  {
    title: "Core",
    items: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)"]
  },
  {
    title: "Styling & UI",
    items: ["Tailwind CSS", "shadcn/ui", "daisyUI", "Framer Motion"]
  },
  {
    title: "Backend & Tools",
    items: ["Node.js", "REST APIs", "Git", "CI/CD", "Vercel"]
  },
  {
    title: "Integrations",
    items: ["Stripe", "Clerk", "OpenAI", "Cloudinary"]
  }
];
