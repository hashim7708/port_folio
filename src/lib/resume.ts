export const profile = {
  name: "Muhammad Hashim",
  initials: "MH",
  role: "Full Stack Developer",
  intro: "I build things for the web.",
  email: "mh6811172@gmail.com",
  phone: "0349-5137424",
  phoneLink: "tel:+923495137424",
  location: "Faisalabad, Pakistan",
  summary: [
    "A full stack developer based in Faisalabad who builds fast, reliable and pleasant-to-use web applications, and adds AI features such as chatbots, report analysis and image generation through the OpenAI API.",
    "I enjoy working across the whole stack, from designing REST APIs in FastAPI or Node.js to crafting responsive interfaces with Next.js, React and Tailwind CSS, backed by PostgreSQL. I deliver work to professional standards, meet deadlines and keep a sharp eye on the details.",
    "Currently a full stack developer at Exprtec, available for remote roles and always sharpening my skills in modern web technologies.",
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/hashim7708" },
    { label: "Email", href: "mailto:mh6811172@gmail.com" },
  ],
};

export const skills = [
  "Next.js",
  "React.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express",
  "FastAPI",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "OpenAI API",
  "MUI 5",
  "Redux Toolkit",
  "Tailwind CSS",
  "Bootstrap",
  "HTML",
  "CSS",
  "AWS",
];

export const education = [
  {
    school: "Virtual University of Pakistan",
    degree: "BS Software Engineering",
    period: "2021 — Present",
  },
  {
    school: "F.G. Liaquat Ali Degree College",
    degree: "F.Sc (Pre-Engineering)",
    period: "2014 — 2016",
  },
];

export const experience = [
  {
    company: "Exprtec",
    role: "Full Stack Software Developer",
    period: "Feb 2024 — Present",
    current: true,
    points: [
      "Built an automated messaging system using AI chatbots powered by the OpenAI API, integrated into backend workflows to automate communication and reduce manual effort.",
      "Built an AI feature that generates house floor plan images from property measurements uploaded by users.",
      "Developed algorithms for Imagini Health, an AI veterinary imaging platform, to identify issues in radiology reports and automate a manual review task.",
      "Designed and implemented RESTful APIs using FastAPI and Node.js, and built the React frontends and PostgreSQL schemas behind them to support marketing strategies and campaigns.",
    ],
    tech: ["FastAPI", "Node.js", "React", "PostgreSQL", "OpenAI API"],
  },
  {
    company: "Bin-Nisar",
    role: "Frontend Developer",
    period: "Apr 2023 — Dec 2023",
    points: [
      "Built and maintained frontend components and user interfaces as part of a collaborative delivery team.",
      "Supported backend development tasks, contributing to features from interface to server logic.",
    ],
    tech: ["React", "Next.js", "Tailwind CSS", "Node.js"],
  },
  {
    company: "Saphona",
    role: "Frontend Developer",
    period: "Aug 2021 — Aug 2022",
    points: [
      "Developed responsive frontend interfaces and assisted with backend development for the Saphona marketplace web app.",
      "Translated designs into clean, maintainable code while improving performance.",
    ],
    tech: ["React", "CSS", "Bootstrap"],
  },
];

export type Project = {
  title: string;
  role?: string;
  description: string;
  tech: string[];
  links: {
    live?: string;
    source?: string;
  };
};

export const projects: Project[] = [
  {
    title: "NDIS Provider Review",
    role: "Full Stack Developer · Exprtec",
    description:
      "Searchable directory of 8,460+ registered NDIS providers across Australia, with suburb-level search, reviews and provider profiles.",
    tech: ["Full Stack", "Search", "Directory"],
    links: { live: "https://ndisprovider.review" },
  },
  {
    title: "Imagini Health",
    role: "Full Stack Developer · Exprtec",
    description:
      "AI-powered diagnostic imaging platform for veterinary practices and pet owners. I built the algorithms that identify issues in radiology reports, automating a manual review task.",
    tech: ["Full Stack", "AI", "Report Analysis"],
    links: { live: "https://www.imaginihealth.ai" },
  },
  {
    title: "ListingSight",
    role: "Full Stack Developer · Exprtec",
    description:
      "AI virtual staging and listing-description tool that helps Australian real estate agents turn empty-room photos into furnished listings.",
    tech: ["Full Stack", "AI", "Real Estate"],
    links: { live: "https://listingsight.com" },
  },
];