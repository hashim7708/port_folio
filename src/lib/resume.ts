export const profile = {
  name: "Muhammad Hashim",
  initials: "MH",
  role: "Web Developer",
  intro: "I build things for the web.",
  email: "mh6811172@gmail.com",
  phone: "0349-5137424",
  phoneLink: "tel:+923495137424",
  location: "Rawalpindi, Pakistan",
  summary: [
    "An enthusiastic web developer based in Rawalpindi who loves turning ideas into fast, reliable and pleasant-to-use web applications.",
    "I enjoy working across the full stack — from designing REST APIs in FastAPI or Node.js to crafting responsive UIs with Next.js, React and Tailwind CSS. I have a history of completing work to professional standards, meeting strict deadlines and keeping a sharp eye on the details.",
    "Currently working as a frontend developer and always sharpening my skills in modern web technologies.",
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/hashim7708" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
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
  "MongoDB",
  "MUI 5",
  "Redux Toolkit",
  "Tailwind CSS",
  "Bootstrap",
  "HTML",
  "CSS",
  "FastAPI",
  "Python",
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
    company: "Bin-Nisar",
    role: "Frontend Developer",
    period: "Feb 2024 — Present",
    current: true,
    points: [
      "Build responsive, accessible user interfaces with React, Next.js and Tailwind CSS.",
      "Collaborate with backend engineers to shape both frontend and backend features.",
      "Review code, debug issues and keep the product consistent across browsers.",
    ],
    tech: ["React", "Next.js", "Tailwind CSS", "Node.js"],
  },
  {
    company: "Exprtec",
    role: "Full Stack Software Developer",
    period: "Sep 2023 — Dec 2023",
    points: [
      "Designed and implemented RESTful APIs using FastAPI and Node.js.",
      "Built the frontend for features that support marketing strategies and campaigns aligned with company goals.",
      "Shipped full-stack features from database schema to polished UI.",
    ],
    tech: ["FastAPI", "Node.js", "React", "MongoDB"],
  },
  {
    company: "Innovative Tech",
    role: "MERN Stack Junior",
    period: "Apr 2023 — Jul 2023",
    points: [
      "Contributed to the creation of both frontend and backend of MERN applications.",
      "Built reusable components and gained hands-on experience with MongoDB and Express.",
      "Participated in daily standups and feature planning with the team.",
    ],
    tech: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    company: "Saphona",
    role: "Frontend Developer",
    period: "2023",
    points: [
      "Helped create both frontend and backend for the Saphona marketplace web app.",
      "Translated designs into clean, maintainable code while improving performance.",
    ],
    tech: ["React", "CSS", "Bootstrap"],
  },
];

export const projects = [
  {
    title: "Marketplace Web App",
    description:
      "A multi-vendor marketplace with product listings, carts, checkout and order tracking. Built a shared API and responsive storefront from the ground up.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    links: { live: "#", source: "https://github.com/" },
  },
  {
    title: "Campaign Dashboard & REST APIs",
    description:
      "Analytics dashboard for marketing campaigns — REST APIs in FastAPI/Node.js powering charts, campaign tracking and reports aligned with company goals.",
    tech: ["FastAPI", "Next.js", "Chart.js", "AWS"],
    links: { live: "#", source: "https://github.com/" },
  },
  {
    title: "E-commerce Storefront",
    description:
      "A product storefront for a consumer brand with catalog pages, filters, cart state managed with Redux Toolkit and a clean Tailwind + MUI UI.",
    tech: ["Next.js", "TypeScript", "Redux Toolkit", "MUI 5"],
    links: { live: "#", source: "https://github.com/" },
  },
];