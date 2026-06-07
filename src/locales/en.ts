import type { CvMessages } from "./types";

export const en: CvMessages = {
  header: {
    title: "Curriculum Vitae",
  },
  sections: {
    skills: "Skills",
    hardSkills: "Hard Skills",
    softSkills: "Soft Skills",
    myStack: "My Stack",
    languages: "Languages",
    hobbies: "Hobbies",
    work: "Work Experience",
    education: "Education",
  },
  profile: {
    name: "Aleksandr Shushakov",
    profession: "Full-Stack Software Engineer, Business Analyst",
    location: "Miami, FL, USA",
  },
  contact: {
    emailLabel: "Email",
    phoneLabel: "Phone",
  },
  work: [
    {
      company: "Working on College Projects",
      period: "2023 – Jan. 2024",
      bullets: [
        "Worked with friends on various college projects.",
        "Built Telegram bots, front-end and full-stack projects; involved in planning, development, and testing.",
      ],
    },
    {
      company: "IKM Soft LLC (Russia)",
      logo: "ikm",
      role: "Frontend Developer / Quality Control",
      period: "Jan. 2024 – Oct. 2024",
      bullets: [
        "Developed responsive web applications using Vue 3, TypeScript, and PrimeVue.",
        "Ensured product quality through manual and automated testing.",
        "Collaborated with the team to improve UI/UX and fix issues.",
      ],
    },
    {
      company: "SkyEng",
      logo: "skyeng",
      role: "English Teacher",
      period: "Summer 2024",
      note: "Part-time",
      bullets: [
        "Conducted online English lessons for students of different levels.",
        "Focused on speaking practice, grammar, and exam preparation.",
      ],
    },
    {
      company: "Genesis LLC (Russia)",
      logo: "genesis",
      role: "Full Stack Software Engineer / Business Analyst / Tech Support",
      period: "Oct. 26, 2024 – Present",
      bullets: [
        "Developing full-stack web applications (Vue 3, TypeScript, Node.js).",
        "Analyzing business requirements and translating them into technical solutions.",
        "Providing technical support and working closely with clients.",
        "Participating in project planning and improving internal processes.",
      ],
    },
    {
      company: "DSANDY LLC",
      logo: "dsandy",
      role: "Founder / Business Owner",
      period: "Oct. 30, 2025 – Present",
      note: "Part-time",
      bullets: [
        "Founded my own company in the US focused on AliExpress drop shipping.",
        "Managing product research, supplier communication, store operations, and marketing.",
        "Building and scaling an e-commerce brand.",
      ],
    },
  ],
  education: [
    {
      company: "Xi'an University of Petroleum",
      logo: "xupt",
      role: "Bachelor's Degree in International Economics and Trade",
      period: "2022 – 2027",
      note: "Expected",
      bullets: [
        "Studying international trade, economics, management, and related subjects.",
        "Actively participated in academic activities and conducted English classes for students.",
      ],
    },
  ],
  languages: [
    { name: "English", level: "Excellent", note: "IELTS 8.3 (9 Speaking)" },
    { name: "Chinese", level: "Confident", note: "HSK 5 Certificate" },
    { name: "Russian", level: "Native" },
  ],
  hobbies: [
    {
      icon: "pi pi-video",
      title: "Video Editing & Motion Design",
      desc: "YouTube channel with over 1.6 million views.",
    },
    {
      icon: "pi pi-desktop",
      title: "Video Game Modding",
      desc: "Risk of Rain 2 mod (C#) with over 13 thousand downloads on Thunderstore.",
    },
    {
      icon: "pi pi-user",
      title: "Actor / Model Experience",
      desc: "Worked as an actor and model in China. Traveled across China. Live TikTok auction bidding in English.",
    },
  ],
};
